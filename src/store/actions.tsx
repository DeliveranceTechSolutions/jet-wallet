import Web3 from "web3"

//WEB3
export function web3Loaded(connection: any) {
    return {
      type: 'WEB3_LOADED',
      payload: connection
    }
  }
  
  export function web3NetworkLoaded(network: any) {
    return {
      type: 'WEB3_NETWORK_LOADED',
      payload: network
    }
  }
  
  export function web3AccountLoaded(account: any) {
    return {
      type: 'WEB3_ACCOUNT_LOADED',
      payload: account
    }
  }
  
  export function web3BalanceLoaded(balance: any) {
    return {
      type: 'WEB3_BALANCE_LOADED',
      payload: balance
    }
  }
  
  export function toggleTheme() {
    return {
      type: "toggleTheme"
    }
  }
  
  export function increment() {
    return {
      type: "increment"
    }
  }
  
  export function decrement() {
    return {
      type: "decrement"
    }
  }

  export function update() {
    return {
      type: "update"
    }
  }