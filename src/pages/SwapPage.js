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
  useWalletTokenAccounts
} from '../utils/wallet';
import {  
  parseTokenAccountData
} from '../utils/tokens/data';
import {  
  refreshAccountInfo,  
} from '../utils/connection';
import {
  WRAPPED_SOL_MINT,
  USDC_MINT
} from '../utils/tokens/instructions';
import BalancesList from '../components/BalancesList';
import { useIsExtensionWidth } from '../utils/utils';
import internal from 'stream';
import { randomBytes } from 'tweetnacl';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { refreshCache, useAsyncData } from '../utils/fetch-loop';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { serumMarkets, priceStore } from '../utils/markets';




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
    margin: "10px 0",
    cursor: "pointer"
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
//const connection = new Connection('https://ssc-dao.genesysgo.net');
//const connection = new Connection('https://api.mainnet-beta.solana.com');
const QUOTE_DURATION = 10;
const SALMON_API_URL = "https://xw314040mf.execute-api.us-east-1.amazonaws.com/develop";
//const SALMON_API_URL = "http://localhost:3000/local";

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
  const [quoteRequest, setQuoteRequest] = useState(null);  
  const [route, setRoute] = useState(null);
  const [loadingQuote, setLoadingQuote] = useState(null);
  const [loadingSwap, setLoadingSwap] = useState(false);  
  const [back, setBack] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);  
  const [success, setSuccess] = useState(false); 
  const [txid, setTxid] = useState(null);
  const [ownedTokens, setOwnedTokens] = useState(null);
  const [refeshForm, setRefreshForm] = useState(false);
  const wallet = useWallet();
  const walletAccounts = useWalletTokenAccounts();


  useEffect(() => {
    async function fetchOwnedTokens() {
      if(tokens && walletAccounts && !ownedTokens){        
        const keys = [
          USDC_MINT.toBase58(),
          WRAPPED_SOL_MINT.toBase58(),
          ...walletAccounts[0].map((w) => w.parsed.mint.toBase58())
        ];        
        const result = await Promise.all(
          keys.map(async (tokenKey) => {                         
            const {value, label, image,} = tokens.find(token => token.value === tokenKey);                                    
            return {value, label, image};      
          })
        )
        setOwnedTokens(result);        
      }
    }
    fetchOwnedTokens();
  }, [tokens, walletAccounts])
  

  //console.log(ownedTokens[0].map((t) => t.parsed.mint.toBase58()));


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
    if(counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const cleanAll = () => {
    setLoadingQuote(false);
    setLoadingSwap(false);
    setRoute(null);
    setError(null);
  }

  const updateQuoteRequest = (newValue) => {
    setQuoteRequest(newValue);
    cleanAll();
  }

  const quote = async(quoteRequest) => {
    const {inToken, outToken, amount, maxAmount} = quoteRequest;
    cleanAll();
    setLoadingQuote(true);
    const inputAmount = applyInputDecimals(amount, inToken.value, tokens);
    const response = await fetch(`${SALMON_API_URL}/v1/swap/quote?inputMint=${inToken.value}&outputMint=${outToken.value}&amount=${inputAmount}&slippage=0.5`);          
    const data = await response.json();       
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
      setTxid(txid);
      console.log("before confirm: " + txid);
      try { 
          
        const simulation = await connection.simulateTransaction(transaction, [wallet.provider.account])
        console.log("Simulation result: " + JSON.stringify(simulation));      
        
        /*const response = await connection.confirmTransaction(txid); */
        cleanAll();
        refreshAccountInfo(connection, wallet.publicKey, true);
        setSuccess(true);                        

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
            {tokens 
              && <div>
                {!success && 
                  <>
                    <AmountForm tokens={tokens} ownedTokens={ownedTokens} update={updateQuoteRequest} success={success}></AmountForm>    
                    {quoteRequest && quoteRequest.amount > 0 && !loadingQuote && !route
                      &&
                      <Box align="center" px={3} mb={1}>
                        <Button variant="contained" color="primary" disabled={quoteRequest.amount > quoteRequest.maxAmount} onClick={() => quote(quoteRequest)}>Preview conversion</Button>  
                      </Box>                  
                    }
                  </>                        
                }
                {loadingQuote 
                  && <Box align="center" style={styles.quoteGroup}>
                    <Typography>Finding best price</Typography>
                    <br/>
                    <CircularProgress /> 
                  </Box>
                }

                {loadingSwap
                  && <ShowSwap route={route} quoteRequest={quoteRequest} tokens={tokens}></ShowSwap>
                }
                
                {route && !loadingSwap
                  && 
                  <>                    
                    <Route route={route} quoteRequest={quoteRequest} tokens={tokens}></Route>                                      
                    <Box align="center" mb={1}> 
                      {counter == 0 && <Box mb={1}><Typography style={{fontSize: "12px",fontWeight: "500", color: "red"}} variant="caption">Quote Expired. Please request a new quote.</Typography></Box>}
                      { counter > 0
                        ? <Button variant="contained" color="primary" onClick={() => swap(route.id)}>Swap ({counter})</Button>  
                        : <Button variant="contained" color="secondary" onClick={() => quote(quoteRequest)}>Refresh</Button>  
                      }                        
                    </Box>                    
                  </>                              
                }     

                {error
                  && <Box align="center" style={styles.quoteGroup}>
                    <Typography>Could not verify transaction. Please verify at <Link href={`https://solscan.io/tx/${error.txid}`} target='_blank'>solscan</Link></Typography>                    
                  </Box>
                }
            
                {success &&
                  <Box py={2} align="center">
                    <Box align="center" style={styles.quoteGroup}>
                      <Typography>Transaction succesfull. Please verify at <Link href={`https://solscan.io/tx/${txid}`} target='_blank'>solscan</Link></Typography>                    
                    </Box>
                    <Button variant="outlined" color="primary" onClick={() => {setRefreshForm(true); cleanAll(); setSuccess(false)}}>Continue</Button>        
                  </Box> 
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

function AmountForm({tokens, ownedTokens, update, refresh}){
  const [amount, setAmount] = useState(null);
  const [inToken, setInToken] = useState(null);
  const [outToken, setOutToken] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const wallet = useWallet();

  useEffect(() => {
    if(tokens || refresh){      
      setInToken(getTokenByAddress(USDC_MINT.toBase58(), tokens));  
      setOutToken(getTokenByAddress(WRAPPED_SOL_MINT.toBase58(), tokens));      
      setAmount(0);
      update({inToken, outToken, amount});
    }
  }, [tokens, refresh]);

  useEffect(() => {
    async function fetchAccountInfo() {      
      if(inToken){ 
        setMaxAmount(null);
        let uiAmount = null;        
        if(inToken.value == WRAPPED_SOL_MINT.toBase58()){
          const balance = await connection.getBalance(wallet.publicKey);
          uiAmount = balance / LAMPORTS_PER_SOL;
        }
        else{
          const data = await wallet.getTokenAmount(inToken.value);                
          uiAmount = data?data.uiAmount:0;
        }                              
        setMaxAmount(uiAmount);
        update({inToken,outToken,amount,uiAmount})        
      }
    }
    fetchAccountInfo();    
  }, [inToken])

  const handleInToken = (token) => {    
    setInToken(token);
    setAmount(0);
    console.log(amount);
    update({inToken: token,outToken,amount : 0, maxAmount})
  };
  const handleOutToken = (token) => {    
    setOutToken(token);
    update({inToken,outToken: token,amount, maxAmount})

  };
  const handleAmount = (amount) => {
    setAmount(amount);
    update({inToken,outToken,amount, maxAmount})
  };

  const noAmount = !amount || amount == 0;

  return (
    <Box py={2}>
      <Grid container spacing={2} style={styles.inputGroup}>
        <Grid item xs="12" align="right">
          {maxAmount !== null 
            ? <span style={{fontSize: 10, color: "#FF855F"}}>Import available {maxAmount} {inToken?.label}</span>
            : <span style={{fontSize: 10, color: "white"}}>Loading balance...</span>
          }
        </Grid>
        <Grid item xs="5">
          <TokenList callback={handleInToken}  tokens={ownedTokens} current={inToken}></TokenList>
        </Grid>
        <Grid item xs="3">
          <Button size="small" variant="text" color="secondary" onClick={() => handleAmount(maxAmount)}>MAX</Button>
        </Grid>
        <Grid item xs="4">
          <input name="amount" onChange={e => handleAmount(e.target.value)} value={amount} autoComplete="off" placeholder="0.00" style={styles.inputText}/>          
        </Grid>   
        <Grid item xs="12" align="right">
          {amount > maxAmount 
            && <span style={{fontSize: 10, color: "red"}}>Insufficient funds</span>
          }
        </Grid>               
      </Grid>
      <Grid container spacing={2} style={styles.inputGroup}>
        <Grid item xs="12">
          <TokenList callback={handleOutToken}  tokens={tokens} current={outToken}></TokenList>
        </Grid>
      </Grid>
      { noAmount
        &&
        <Box align="center" px={3} mb={1}><Chip style={{width:"100%"}} label="Enter an amount" disabled /></Box>
      }
    </Box>
  )
}


function ShowSwap({route, quoteRequest, tokens}){
  const {inToken, outToken} = quoteRequest;
  const outAmount = applyOutputDecimals(route.outAmount, outToken.value, tokens);
  const inAmount = applyOutputDecimals(route.inAmount, inToken.value, tokens);
  return (
    <Grid container spacing={2} style={styles.quoteGroup}>
      <Grid align="center" item xs="12">
        <Typography>Sending transaction</Typography>
        <br/>
        <CircularProgress  disableShrink/>
      </Grid>
      <Grid item xs="6"> 
        <div><Typography>You are sending</Typography></div> 
      </Grid>
      <Grid item xs="6">
        <span>{inAmount} {inToken.label}</span>        
      </Grid>
      <Grid item xs="6"> 
        <div><Typography>You will receive</Typography></div> 
      </Grid>
      <Grid item xs="6">
        <span>{outAmount} {outToken.label}</span>        
      </Grid>
    </Grid>
  )

}

function Route( {route, quoteRequest, tokens} ) {
  const {inToken, outToken} = quoteRequest;
  const markets = route.marketInfos
    .map( (info) => info.label)
    .join("+");
  const tokensRoute = route.marketInfos
    .map( (info) => getTokenByAddress(info.inputMint, tokens))
    .map( (t) => t.label)
    .join("->");
  const outAmount = applyOutputDecimals(route.outAmount, outToken.value, tokens)
  const inAmount = applyOutputDecimals(route.inAmount, inToken.value, tokens)

  return (
    <Grid container spacing={2} style={styles.quoteGroup}>
      <Grid item xs="12">
        <div align='center'><span>Best price</span></div>      
      </Grid>
      <Grid item xs="6">        
        <div><Typography>Route</Typography></div>        
      </Grid>
      <Grid item xs="6">
        <div><Typography>{markets}</Typography></div>      
      </Grid>
      <Grid item xs="6"> 
        <div><Typography>You will receive</Typography></div> 
      </Grid>
      <Grid item xs="6">
        <span>{outAmount} {outToken.label}</span>        
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

