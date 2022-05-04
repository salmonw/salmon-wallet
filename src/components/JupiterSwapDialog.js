import DialogForm from './DialogForm';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TOKEN_LIST_URL } from "@jup-ag/core";
import { JupiterProvider, useJupiter } from "@jup-ag/react-hook";
import { DialogContent } from '@material-ui/core';

export default function JupiterSwapDialog({ open, onClose, wallet }) {

  const [tokens, setTokens] = useState([])
    useEffect(() => {
        // Fetch token list from Jupiter API
        fetch(TOKEN_LIST_URL[ENV])
          .then(response => response.json())
          .then(result => setTokens(result))
      }, [])

  return (
    <DialogForm
      open={open}
      onClose={onClose}
    >
        <DialogTitle>Swap</DialogTitle>
        <DialogContent>
          <>
            <div style={{ fontWeight: '600', fontSize: 16, marginTop: 24 }}>
              Hook example
            </div>
            <div>Tokens {JSON.stringify(tokens)}</div>
            <div>Number of tokens:</div>
            <div>Number of input tokens</div>
            <div>Possible number of routes:</div>
            <div>
              Best quote:
            </div>
          </>
         </DialogContent>
      </DialogForm> 
  )
}
