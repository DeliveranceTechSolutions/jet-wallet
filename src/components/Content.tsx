import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions"
import React from "react";
import {
  Container
} from "../styles/rest"

export default function Content() {
  const dispatch = useDispatch();

  return (
    <Container>
        <br></br>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
    </Container>
  );
}