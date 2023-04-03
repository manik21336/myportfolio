import { useEffect } from "react";
import "./GithubContainer.css";

const GithubContainer = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="introduction">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-child" />
        <div className="frame-child" />
        <div className="frame-child1" />
      </div>
      <div className="frame-parent">
        <div className="frame-wrapper">
          <div className="frame-wrapper">
            <div className="group-wrapper">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <img
                  className="programmer-icon"
                  alt=""
                  src="/programmer.svg"
                  data-animate-on-scroll
                />
                <img className="iiit-delhi" alt="" src="/iiit--delhi.svg" />
                <img className="bio-icon" alt="" src="/bio.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="light-container-parent">
            <div className="light-container">
              <img
                className="git-branch-animation"
                alt=""
                src="/git-branch-animation.svg"
              />
            </div>
            <div className="githubframe">
              <div className="githubframe-child" />
              <div className="githubframe-item" />
              <div className="githubframe-inner" />
              <div className="githubframe-child1" />
              <div className="githubframe-child2" />
              <div className="githubframe-child3" />
              <div className="github-manik21336-container">
                <span>
                  <span>github</span>
                  <span className="span">{` `}</span>
                  <span className="span1">{`/ `}</span>
                </span>
                <span className="manik21336">manik21336</span>
              </div>
              <div className="beginner">Beginner</div>
            </div>
            <img className="group-child" alt="" src="/rectangle-12.svg" />
            <div className="group-item" />
            <div className="vector" data-animate-on-scroll>
              <img className="vector-icon1" alt="" src="/vector1.svg" />
            </div>
            <div className="adobe-indesign-1" data-animate-on-scroll>
              <img
                className="photo-surface-icon"
                alt=""
                src="/photo-surface.svg"
              />
              <img className="vector-icon2" alt="" src="/vector2.svg" />
            </div>
            <img className="git-regular-icon" alt="" src="/gitregular.svg" />
            <div className="react" data-animate-on-scroll>
              <img className="vector-icon3" alt="" src="/vector3.svg" />
            </div>
            <div className="nodejs" data-animate-on-scroll>
              <img className="shape-icon" alt="" src="/shape.svg" />
            </div>
            <div className="figma" data-animate-on-scroll>
              <img className="vector-icon4" alt="" src="/vector4.svg" />
              <img className="vector-icon5" alt="" src="/vector5.svg" />
              <img className="vector-icon6" alt="" src="/vector6.svg" />
              <img className="vector-icon7" alt="" src="/vector7.svg" />
              <img className="vector-icon8" alt="" src="/vector8.svg" />
            </div>
            <div className="tech-stack">Tech Stack</div>
            <div className="git" data-animate-on-scroll>
              <div className="git1" data-animate-on-scroll>
                <div className="logo-frame" />
                <img
                  className="git-regular-icon1"
                  alt=""
                  src="/gitregular1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-child" />
        <div className="frame-child" />
        <div className="frame-child1" />
      </div>
    </div>
  );
};

export default GithubContainer;
