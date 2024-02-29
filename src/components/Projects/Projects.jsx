import React from "react";
import Slider from "react-slick";
import "./Projects.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import caro from "../../images/caro.png";
import todo from "../../images/todoApp.png";
const A = styled(Link)`
  text-decoration: none;
  background: #00ecfd;
  padding: 10px 30px;
  border-radius: 25px;
  font-weight: 600;
  color: black;
`;
function Projects(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="projects">
      <h1>
        <span>Project</span> and <span>Mini App</span>
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="app">
            <div className="app-item">
              <img src={todo} alt="" />
              <h2>Todo List</h2>
              <p className="describe">
                A "to-do list" app is a task management tool that helps users
                create lists of tasks, prioritize work, and track progress. It
                is used to enhance personal organization and productivity
              </p>
              <div className="tech">
                <div>React</div>
                <div>Redux</div>
                <div>Styled-components</div>
              </div>
              <div className="btn-projects">
                <A to="/todo">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src={caro} alt="" />
              <h2>TicTacToe</h2>
              <p className="describe">
                Tic-Tac-Toe is a two-player game on a 3x3 board where the goal
                is to get three symbols ("X" or "O") in a row, either
                horizontally, vertically, or diagonally.
              </p>
              <div className="tech">
                <div>React</div>
                <div>Css</div>
              </div>
              <div className="btn-projects">
                <A to="/tictac">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/TicTacToe_ReactJS.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src="" alt="" />
              <h2>Calculator</h2>
              <p className="describe">
                A calculator app is a digital tool for performing math
                calculations on devices like smartphones and computers, used for
                daily tasks and work
              </p>
              <div className="tech">
                <div>React</div>
                <div>CSS</div>
              </div>
              <div className="btn-projects">
                <A href="">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src="" alt="" />
              <h2>Clock & Counter</h2>
              <p className="describe">
                This app integrates the functions of counting, watch and
                stopwatch
              </p>
              <div className="tech">
                <div>React</div>
                <div>Redux</div>
                <div>Styled-components</div>
              </div>
              <div className="btn-projects">
                <A href="">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src="" alt="" />
              <h2>Todo List</h2>
              <p className="describe">
                A "to-do list" app is a task management tool that helps users
                create lists of tasks, prioritize work, and track progress. It
                is used to enhance personal organization and productivity
              </p>
              <div className="tech">
                <div>React</div>
                <div>Redux</div>
                <div>Styled-components</div>
              </div>
              <div className="btn-projects">
                <A href="">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src="" alt="" />
              <h2>Todo List</h2>
              <p className="describe">
                A "to-do list" app is a task management tool that helps users
                create lists of tasks, prioritize work, and track progress. It
                is used to enhance personal organization and productivity.
              </p>
              <div className="tech">
                <div>React</div>
                <div>Redux</div>
                <div>Styled-components</div>
              </div>
              <div className="btn-projects">
                <A href="">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src="" alt="" />
              <h2>Todo List</h2>
              <p className="describe">
                A "to-do list" app is a task management tool that helps users
                create lists of tasks, prioritize work, and track progress. It
                is used to enhance personal organization and productivity.
              </p>
              <div className="tech">
                <div>React</div>
                <div>Redux</div>
                <div>Styled-components</div>
              </div>
              <div className="btn-projects">
                <A href="">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src="" alt="" />
              <h2>Todo List</h2>
              <p className="describe">
                A "to-do list" app is a task management tool that helps users
                create lists of tasks, prioritize work, and track progress. It
                is used to enhance personal organization and productivity.
              </p>
              <div className="tech">
                <div>React</div>
                <div>Redux</div>
                <div>Styled-components</div>
              </div>
              <div className="btn-projects">
                <A href="">Demo</A>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/Todo_App.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
