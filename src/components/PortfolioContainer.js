import { useCallback, useEffect } from "react";
import "./PortfolioContainer.css";

const PortfolioContainer = () => {
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

  const onFrameButtonClick = useCallback(() => {
    window.open("https://github.com/manik21336/Unix-Shell");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://github.com/manik21336/TANK-STAR");
  }, []);

  return (
    <div className="portfolioproject">
      <div className="frame-group">
        <div className="group-frame">
          <div className="group-parent">
            <div className="portfolio-project-wrapper">
              <div className="portfolio-project">{`Portfolio & Project`}</div>
            </div>
            <div className="selectanimation">
              <div className="selectanimation-child" />
              <div className="selectanimation-item" />
              <div className="selectanimation-inner" />
              <div className="selectanimation-child1" />
              <div className="selectanimation-child2" />
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="see-all-my-project-portfolio-wrapper">
            <a
              className="see-all-my"
              href=" https://github.com/manik21336"
              target="_blank"
            >{`See all my project & Portfolio~`}</a>
          </div>
        </div>
      </div>
      <div className="portfolioproject-inner">
        <div className="frame-wrapper1">
          <div className="group-wrapper1">
            <div className="group-div">
              <a
                className="group-inner"
                href=" https://github.com/manik21336"
                target="_blank"
              />
              <button
                className="frame-button"
                onClick={onFrameButtonClick}
                data-animate-on-scroll
              >
                <div className="about-parent">
                  <div className="about1">
                    <div className="about-inner">
                      <div className="image-parent">
                        <img
                          className="image-icon"
                          alt=""
                          src="/image@2x.png"
                        />
                        <div className="vector-group">
                          <img
                            className="rectangle-icon"
                            alt=""
                            src="/rectangle-25.svg"
                          />
                          <div className="wimix">Wimix</div>
                          <div className="a-simple-linux">
                            A simple Linux shell Written in C language using
                            UNIX macros
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-container">
                    <div className="group-child1" />
                    <img className="vector-icon9" alt="" src="/vector9.svg" />
                  </div>
                </div>
              </button>
              <button
                className="group-wrapper2"
                onClick={onFrameButton1Click}
                data-animate-on-scroll
              >
                <div className="group-parent1">
                  <div className="tank-stars-pc-full-1-parent">
                    <img
                      className="tank-stars-pc-full-1-icon"
                      alt=""
                      src="/tankstarspcfull-1@2x.png"
                    />
                    <img
                      className="group-child2"
                      alt=""
                      src="/rectangle-251.svg"
                    />
                    <div className="text" />
                    <div className="group-wrapper3">
                      <img className="group-icon" alt="" src="/group-23.svg" />
                    </div>
                  </div>
                  <div className="tank-star-game">Tank Star Game</div>
                  <div className="built-an-endless-runner">
                    Built an endless-runner game with additional features such
                    as pausing, saving, and loading games using serialization
                  </div>
                </div>
              </button>
              <button className="group-wrapper4" data-animate-on-scroll>
                <div className="group-wrapper5">
                  <div className="about-inner">
                    <button className="screenshot-2023-04-01-161259-1-parent">
                      <img
                        className="screenshot-2023-04-01-161259-1"
                        alt=""
                        src="/screenshot-20230401-161259-1@2x.png"
                      />
                      <img
                        className="group-child3"
                        alt=""
                        src="/rectangle-252.svg"
                      />
                      <div className="travelling-app-parent">
                        <div className="travelling-app">Travelling App</div>
                        <legend className="an-online-service">
                          An online service that lets you book local guides that
                          show you around your destination.
                        </legend>
                      </div>
                      <div className="rectangle-parent1">
                        <div className="group-child4" />
                        <img className="github-icon" alt="" src="/github.svg" />
                      </div>
                    </button>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContainer;
