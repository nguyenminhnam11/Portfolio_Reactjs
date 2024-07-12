import React from "react";
import Slider from "react-slick";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
import projects from "../../assets/data/projects";

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

  const { t } = useTranslation();
  return (
    <section className="projects">
      <h1>
        <span>{t("proj-title-span1")}</span> {t("proj-title")}{" "}
        <span>{t("proj-title-span2")}</span>
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="app" key={index}>
              <div className="app-item">
                <img src={project.image} alt="" />
                <h2>{project.name}</h2>
                <p className="describe">{project.description}</p>
                <div className="tech">
                  {project.tech.map((item,index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <div className="btn-projects">
                  <a href={project.url} target="_blank" rel="noreferrer">
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
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
