import React from "react";
import Slider from "react-slick";
import "./Projects.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import caro from "../../images/caro.png";
import todo from "../../images/todoApp.png";
import e_commerce from "../../images/E-commerce.png";
import shopdunk from "../../images/shopdunk.png";
import { useTranslation } from "react-i18next";

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

  const {t} = useTranslation()
  return (
    <section className="projects">
      <h1>
        <span>{t("proj-title-span1")}</span> {t("proj-title")} <span>{t("proj-title-span2")}</span>
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
              <img src={e_commerce} alt="" />
              <h2>UI E-commerce</h2>
              <p className="describe">
                Simple interface for an online clothing selling site. And
                compatible on all screens from computer to mobile
              </p>
              <div className="tech">
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>Responsive</div>
              </div>
              <div className="btn-projects">
                <a
                  href="https://e-commerce-ui-responsive.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/E-commerce_UI_responsive.git"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
          <div className="app">
            <div className="app-item">
              <img src={shopdunk} alt="" />
              <h2>Shop Dunk</h2>
              <p className="describe">
                Apple's sales store page interface and functions such as product
                details and add to cart
              </p>
              <div className="tech">
                <div>React</div>
                <div>React Router</div>
                <div>CSS</div>
                <div>Ant-Design</div>
              </div>
              <div className="btn-projects">
                <a href="https://shop-dunk-react-js.vercel.app/" target="_blank">Demo</a>
                <a
                  target="_blank"
                  href="https://github.com/nguyenminhnam11/ShopDunk_ReactJS.git"
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
