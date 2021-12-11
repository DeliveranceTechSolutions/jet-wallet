import { 
    web3_loaded,
    web3_account_loaded, 
    web3_network_loaded, 
    web3_balance_loaded,
    set_theme,
    update_theme,
    toggle_theme, 
} from "../../constants";

export interface IWeb3State 
extends 
    ILoadWeb3, 
    ILoadWeb3Account, 
    ILoadWeb3Network, 
    ILoadWeb3Balance 
{
    value: string;
}

export interface ILoadWeb3 {
    type: typeof web3_loaded;
    payload: any | null;
}

export interface ILoadWeb3Account {
    type: typeof web3_account_loaded,
    payload: any | null
}

export interface ILoadWeb3Balance {
    type: typeof web3_balance_loaded,
    payload: any | null
}

export interface ILoadWeb3Network {
    type: typeof web3_network_loaded,
    payload: any | null
}

export interface ISetTheme {
    type: typeof set_theme,
    payload: Array<any>,
    value: string 
}

export interface IToggleTheme {
    type: typeof toggle_theme,
    payload: Array<any>
    value: string
}

export interface IUpdateTheme {
    type: typeof update_theme,
    payload: Array<any>,
    value: any
}
