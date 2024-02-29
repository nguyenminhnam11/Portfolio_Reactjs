import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

import Todo from "./components/Projects/Apps/Todo";
import TicTacToe from "./components/Projects/Apps/TicTacToe";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/tictac" element={<TicTacToe />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
