import { Connection, Keypair, Transaction } from '@solana/web3.js'
import React, { useEffect, useState } from 'react';
import { useConnection } from '../utils/connection';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import DialogForm from '../components/DialogForm';
import { 
  Link,
  Button,
  Card,
  Typography,
  CardMedia,
  Box,
  Grid,
  Paper,
  CircularProgress,
  Popover,
  TextField,
  InputAdornment,
  Chip
} from '@material-ui/core';
import {  
  useWallet,  
} from '../utils/wallet';
import BalancesList from '../components/BalancesList';
import { useIsExtensionWidth } from '../utils/utils';
import internal from 'stream';
import { randomBytes } from 'tweetnacl';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const styles = {
  currentToken: {
    fontWeight: "700",
    lineHeight: "25px",     
  },
  tokenContainer: {
    height: "200px",
    width: "250px",
    overflowY: "scroll"
  },
  tokenList: {
    paddingLeft: "10px",
  },
  tokenListItem: {
    listStyleType: "none",
    margin: "10px 0"
  },
  tokenListImage: {
    width: "20px",
    verticalAlign: "middle",
    margin: "0 10px"
  },
  tokenListText: {
    lineHeight: "20px",        
  },
  popover: {
    borderRadius: "10px"
  },
  search: {
    width: "92%",
    borderRadius: "5px",
    border: "2px solid #FF855F",
    padding: "0 5px",
    margin: "4%",
  },
  inputGroup: {
    backgroundColor: "#222",
    borderRadius: "10px",
    width: "90%",
    padding: "10px 20px",
    margin: "0 auto 30px auto"
  },
  quoteGroup: {
    backgroundColor: "#363E48",
    borderRadius: "10px",
    width: "90%",
    padding: "10px 20px",
    margin: "0 auto 30px auto",
    fontWeight: "700",
    color: "#FF855F"
  },
  inputText: {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid #333",
    borderRadius: "5px",
    padding: "5px",
    fontWeight: "700",
    textAlign: "right",
    width: "100%"
  }
}

const connection = new Connection('https://solana-api.projectserum.com');
const QUOTE_DURATION = 10;
const SALMON_API_URL = "https://xw314040mf.execute-api.us-east-1.amazonaws.com/develop";


const getTokenByAddress = (address, tokens) => {
  const token = tokens.find((token) => token.value === address);
  return token;
}
const applyInputDecimals = (amount, address, tokens) => {
  const tokenInfo = getTokenByAddress(address, tokens);            
  return amount * (10 ** tokenInfo.decimals);
}
const applyOutputDecimals = (amount, address, tokens) => {
  const tokenInfo = getTokenByAddress(address, tokens);            
  return amount / (10 ** tokenInfo.decimals);
}


export default function SwapPage() {
  const [tokens, setTokens] = useState();
  const [inToken, setInToken] = useState();
  const [outToken, setOutToken] = useState();
  const [amount, setAmount] = useState(null);
  const [outAmount, setOutAmount] = useState();
  const [quoteValues, setQuoteValues] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const [route, setRoute] = useState(null);
  const [loadingQuote, setLoadingQuote] = useState(null);
  const [loadingSwap, setLoadingSwap] = useState(false);
  const [loadingExecute, setLoadingExecute] = useState(null);
  const [back, setBack] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);
  const [counterTimer, setCounterTimer] = useState(null);  
  const wallet = useWallet();

  useEffect(() => {    
    if(counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      setCounterTimer(timer);
    }
  }, [counter]);

  useEffect(() => {
    setRoute(null);
    setLoadingQuote(false);
    clearTimeout(counterTimer);
  }, [amount]);


  const quote = async(inToken, outToken, amount) => {
    setLoadingQuote(true);
    const inputAmount = applyInputDecimals(amount, inToken, tokens);
    const response = await fetch(`${SALMON_API_URL}/v1/swap/quote?inputMint=${inToken}&outputMint=${outToken}&amount=${inputAmount}&slippage=0.5`);          
    const data = await response.json();
    setOutAmount(data.outAmount);       
    setRoute(data);    
    setLoadingQuote(false);
    setCounter(QUOTE_DURATION);    
  }

  const swap = async(routeId) => {
    setLoadingSwap(true);
    const response = await fetch(`${SALMON_API_URL}/v1/swap/transaction?id=${routeId}&publicKey=${wallet.publicKey}`);
    const result = await response.json(); 
    console.log(result)
    const { setupTransaction, swapTransaction, cleanupTransaction } = result;
    execute(setupTransaction, swapTransaction, cleanupTransaction);
  }
  
  const execute = async(setupTransaction, swapTransaction, cleanupTransaction) => {    
    for (let serializedTransaction of [setupTransaction, swapTransaction, cleanupTransaction].filter(Boolean)) {

      const transaction = Transaction.from(Buffer.from(serializedTransaction, 'base64'))
      console.log(transaction);
      console.log(wallet);
      const txid = await connection.sendTransaction(transaction, [wallet.provider.account], {
        skipPreflight: true
      })
      console.log("before confirm: " + txid);
      try { 
        await connection.confirmTransaction(txid)
        console.log(`https://solscan.io/tx/${txid}`)
        setLoadingSwap(false);

      } catch (error) {
        setLoadingSwap(false);
        setError({
          message: "not_verified",
          txid: txid
        });        
        console.log(error);
      }
    }

  }


  const handleInToken = (token) => {setInToken(token)};
  const handleOutToken = (token) => {setOutToken(token)};
  

  useEffect(() => {
    async function fetchTokens() {
      fetch(`${SALMON_API_URL}/v1/tokens`)
      .then(response => response.json())      
      .then(response => response.map((item) => { return item ? {"value" : item.address, "label": item.symbol, "image" : item.logoURI, "decimals": item.decimals} : {} }))
      .then(result => {
        setTokens(result);
      })
    }
    fetchTokens();    
  }, [])

  useEffect(() => {
    if(tokens){
        setInToken(getTokenByAddress("So11111111111111111111111111111111111111112", tokens));
        setOutToken(getTokenByAddress("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", tokens));
    }
  }, tokens)

  /*
  useEffect(() => {
    if(amount && amount > 0 && inToken && outToken){
      const timeOutId = setTimeout(() => quote(inToken.value, outToken.value, amount), 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [inToken, outToken, amount]);
  */  

  if(back){
    return <BalancesList/>
  }

  return (
    <>
      <Paper style={{ display: tokens ? "block" : "none" }}>
        <Box style={{position:'relative'}} align="center" py={5} px={3}>
          <Box style={{position:'absolute', left:'15px', cursor: 'pointer'}} onClick={() => setBack(true)}>
            <Typography variant="h3"><ArrowBackIos/></Typography>
          </Box>
          <Typography variant="h3">Swap</Typography>
        </Box>
        <Card>          
          <div>
            {
              tokens && <div>
                <Grid container spacing={2} style={styles.inputGroup}>
                  <Grid item xs="7">
                    <TokenList callback={handleInToken}  tokens={tokens} current={inToken}></TokenList>
                  </Grid>
                  <Grid item xs="5">
                    <input name="amount" onChange={e => setAmount(e.target.value)} value={amount} autoComplete="off" placeholder="0.00" style={styles.inputText}/>
                  </Grid>                  
                </Grid>
                <Grid container spacing={2} style={styles.inputGroup}>
                  <Grid item xs="12">
                    <TokenList callback={handleOutToken}  tokens={tokens} current={outToken}></TokenList>
                  </Grid>
                </Grid>

                {loadingQuote 
                  && <Box align="center" style={styles.quoteGroup}>
                    <Typography>Finding best price</Typography>
                    <br/>
                    <CircularProgress /> 
                  </Box>
                }

                {!amount 
                  &&
                  <Box align="center" px={3} mb={1}><Chip style={{width:"100%"}} label="Enter an amount" disabled /></Box>
                }

                {amount && !route && !loadingQuote
                  &&
                  <Box align="center" px={3} mb={1}>
                    <Button variant="contained" color="primary" onClick={() => quote(inToken.value, outToken.value, amount)}>Preview conversion</Button>  
                  </Box>
                }

                {error
                  && <Box align="center" style={styles.quoteGroup}>
                    <Typography>Could not verify transaction. Please verify at <Link href={`https://solscan.io/tx/${error.txid}`} target='_blank'>solscan</Link></Typography>                    
                  </Box>
                }

                {loadingSwap
                  && <Box align="center" style={styles.quoteGroup}>
                    <Typography>Sending transaction</Typography>
                    <br/>
                    <CircularProgress /> 
                  </Box>
                }
                
                {route && !loadingQuote
                  && 
                  <>                    
                    <Route route={route} inToken={inToken} outToken={outToken} tokens={tokens}></Route>                    
                    { !loadingSwap &&
                      <Box align="center" mb={1}> 
                        {counter == 0 && <Box mb={1}><Typography style={{fontSize: "12px",fontWeight: "500", color: "red"}} variant="caption">Quote Expired. Please request a new quote.</Typography></Box>}
                        { counter > 0
                          ? <Button variant="contained" color="primary" onClick={() => swap(route.id)}>Swap ({counter})</Button>  
                          : <Button variant="contained" color="secondary" onClick={() => quote(inToken.value, outToken.value, amount)}>Refresh</Button>  
                        }
                        {loadingSwap}
                      </Box>
                    }
                  </>                              
                }                
              </div>            
            }
          </div>
        </Card>
      </Paper>
      <Paper style={{ display: tokens ? " none" : "block" }}>     
        <Box align="center" p={10}>
          <CircularProgress disableShrink/>
        </Box>
      </Paper>
      
    </>
  )

}

function Route( {route, inToken, outToken, tokens} ) {
  const markets = route.marketInfos
    .map( (info) => info.label)
    .join("+");
  const tokensRoute = route.marketInfos
    .map( (info) => getTokenByAddress(info.inputMint, tokens))
    .map( (t) => t.label)
    .join("->");
  const outAmount = applyOutputDecimals(route.outAmount, outToken.value, tokens)

  return (
    <Grid container spacing={2} style={styles.quoteGroup}>
      <Grid item xs="12">
        <div align='center'><span>Best price</span></div>      
      </Grid>
      <Grid item xs="7">        
        <div><Typography>{markets}</Typography></div>
        <div><Typography>{tokensRoute}</Typography></div>
      </Grid>
      <Grid item xs="5">
        <span>{outAmount}</span>
      </Grid>
    </Grid>
  )

}

function TokenList ({callback, tokens, current}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [tokenList, setTokenList] = useState(null);
  const [query, setQuery] = useState(null);

  const filterTokens = (query) => {
    const result = tokens.filter((token) => token.label.toLowerCase().includes(query.toLowerCase()))
    setTokenList(result);
  }

  useEffect(() => {
    if(query){
      const timeOutId = setTimeout(() => filterTokens(query), 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [query]);

  const handleClick = (event) => {
    setTokenList(tokens);
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (token) => {
    callback(token);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover-' + current.name : undefined;

  return (
    <Box>
      {current && 
        <>
        <Link component="button" variant="body2" underline="none" onClick={handleClick} aria-describedby={id} style={styles.currentToken}>
          <Typography style={{display: 'flex', alignItems: 'center'}}><img style={styles.tokenListImage} src={current.image} />{current.label}<KeyboardArrowDownIcon /></Typography>
        </Link>

        <Popover
               id={id}
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
               style={styles.popover}
        >
          <TextField   
            style={styles.search}
            onChange={event => setQuery(event.target.value)} 
            id="search"
            placeholder="filter by name "
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div style={styles.tokenContainer} >
            <ul style={styles.tokenList}>
              {tokenList && tokenList.map((token) => 
                <li style={styles.tokenListItem} onClick={() => {handleSelect(token)}}>
                  <img style={styles.tokenListImage} src={token.image} />
                  <Typography variant="caption" style={styles.tokenListText}>{token.label}</Typography>
                </li>
              )}
            </ul>
          </div>
        </Popover>
        </>
      }
    </Box>
  )
}

