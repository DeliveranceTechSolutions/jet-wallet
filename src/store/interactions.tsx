declare const window: any;
import { log } from 'console';
import Web3 from 'web3'
import {
  web3Loaded,
  web3NetworkLoaded,
  web3AccountLoaded,
  web3BalanceLoaded
} from './actions';

import { 
    ILoadWeb3, 
    ILoadWeb3Network, 
    ILoadWeb3Account, 
    ILoadWeb3Balance 
} from './types/interfaces';

import {
    eth_base_uri
} from '../constants';

export const loadWeb3 = async (dispatch: (arg: ILoadWeb3) => (ILoadWeb3)) => {
  if(typeof window.ethereum!=='undefined'){
    window.ethereum.autoRefreshOnNetworkChange = false;
    const web3 = new Web3(window.ethereum)
    dispatch(web3Loaded(web3))
    return web3
  } else {
    window.alert('Please install MetaMask')
    window.location.assign("https://metamask.io/")
  }
}
export const loadNetwork = async (dispatch: (arg: ILoadWeb3Network) => (ILoadWeb3Network), web3: Web3 | undefined) => {
  try{
    const networkConfig = web3 !== undefined && await web3.eth.net.getNetworkType()
    .then(network => {
        network = network.charAt(0).toUpperCase()+network.slice(1)
        dispatch(web3NetworkLoaded(network))
    })
    .catch(err => {
        log(err)
    });

    return networkConfig
  } catch (e) {
    dispatch(web3NetworkLoaded('Wrong network'))
    console.log('Error, load network: ', e)
  }
}

export const loadAccount = async (dispatch: (arg: ILoadWeb3Account) => ILoadWeb3Account, web3: Web3 | undefined) => {
  const account = web3 !== undefined && await web3.eth.getAccounts()
    .then(accounts => { accounts[0] !== undefined ? accounts[0] : eth_base_uri })
    .catch(e => {log('Error, load account: ', e)});
  
  typeof account !== 'undefined' ? () => {
        dispatch(web3AccountLoaded(account));
        return account;
    } : () => {
        dispatch(web3AccountLoaded(null));
        console.log('logout');
        return null;
    }
}


export const loadBalance = async (dispatch: (arg: ILoadWeb3Balance) => ILoadWeb3Balance, web3: Web3 | undefined, account: any) => {
    try {
        return web3 !== undefined && await web3.eth.getBalance(account)
            .then(etherBalance => {
                const etherBalanceInEther: number = parseInt(web3.utils.fromWei(etherBalance, 'ether'))
                dispatch(web3BalanceLoaded((etherBalanceInEther/10**18).toFixed(5)))
            })
    } catch (e) {
        dispatch(web3BalanceLoaded(null));
        console.log('Error, load balance: ', e);
    }

}

// export const loadContract = async (dispatch, web3, netId) => {
//   try {
//     const contractABI = []
//     const contractAddress = ''
//     const contract = new web3.eth.Contract(contractABI, contractAddress)
//     dispatch(contractLoaded(contract)) //create in action.js and add to reducers.js
//     return contract
//   } catch (e) {
//     console.log('Error, load contract: ', e)
//   }
// }

export const update = async (dispatch: any) => {
  const web3 = await loadWeb3(dispatch)
  const account = await loadAccount(dispatch, web3)

  await loadNetwork(dispatch, web3)

  account !== null || account !== undefined ? await loadBalance(dispatch, web3, account) : null
}