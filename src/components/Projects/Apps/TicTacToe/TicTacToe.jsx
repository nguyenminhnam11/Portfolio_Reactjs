import React from "react";
import Caro from "./Caro";
import { ToastContainer } from "react-toastify";
import './TicTacToe.css'

function TicTacToe(props) {
  return (
    <div className="tictactoe">
      <Caro />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default TicTacToe;
