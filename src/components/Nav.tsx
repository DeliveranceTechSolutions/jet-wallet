import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/actions"
import React from "react";
import {
  NavBar,
  NavLink,
  NavMenu,
  NavToggle,
} from "../styles/rest"
import { update } from "../store/interactions";

declare const window: any;

export default function Nav() {
  const account = useSelector((state: any) => state.account);
  const balance = useSelector((state: any) => state.balance);
  const network = useSelector((state: any) => state.network);
  const dispatch = useDispatch();

  return (
    <NavBar>
      <NavMenu>
        <NavLink>React dApp template with Hooks&Redux&Web3</NavLink>
        <NavToggle onClick={() => dispatch(toggleTheme())}>Toggle theme</NavToggle>
      </NavMenu>
      {account !== null
        ?
          <div>
            address: <u>{account.substring(0,6) + '...' + account.substring(38,42)}</u>&nbsp;
            network: <u>{network}</u>&nbsp;
            balance: <u>{balance} ETH</u>&nbsp;
          </div>
        : <button onClick={() => { window.ethereum.enable(); dispatch(update) }}>Login</button>
      }
    </NavBar>
  );
}