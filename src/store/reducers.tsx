import { Action } from "history";
import { networkInterfaces } from "os";
import { ReducerAction } from "react";
import * as Eff from 'redux';
import { 
    web3_loaded,
    web3_account_loaded, 
    web3_network_loaded, 
    web3_balance_loaded,
    set_theme,
    update_theme,
    toggle_theme, 
    update
} from "../constants";
import { 
    IWeb3State,
    ISetTheme,
    IToggleTheme,
    IUpdateTheme 
} from "./types/interfaces";

interface IStoreInitialState {
  connection: any,
  account: any,
  network: any,
  balance: any,
  theme: any,
  isDark: any,
};

export const initialState: any = {
    connection: null,
    account: null,
    network: null,
    balance: null,
    theme: "light",
    isDark: false,
};

type IAction = ISetTheme | IToggleTheme | IUpdateTheme;

export function reducer(state = initialState, action: IAction /* TODO: reorganize these */ | IWeb3State) {
  switch (action.type) {
    case web3_loaded:
      return { ...state, connection: action.payload }
    case web3_network_loaded:
      return { ...state, network: action.payload }
    case web3_account_loaded:
      return { ...state, account: action.payload }
    case web3_balance_loaded:
      return { ...state, balance: action.payload }
    case set_theme:
      return { ...state, currentTheme: action.value };
    // case update_theme:
    //   return {
    //     ...state,
    //     currentTheme: { ...theme[state.currentTheme.id], ...action.value }
    //   };
    // case toggle_theme: {
    //   const newThemeKey = state.currentTheme.id === "dark" ? "light" : "dark";
    //   return { ...state, currentTheme: theme[newThemeKey] };
    // }
    case update:
      return { ...state, update: action.value };
    default:
      return state;
  }
}