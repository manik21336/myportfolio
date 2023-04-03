import { useCallback } from "react";
import GithubContainer from "../components/GithubContainer";
import PortfolioContainer from "../components/PortfolioContainer";
import InterestContainer from "../components/InterestContainer";
import ContainerWrapper from "../components/ContainerWrapper";
import Footer from "../components/Footer";
import "./PORTFOLIO.css";

const PORTFOLIO = () => {
  const onResumeClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1mIrEeBZI-2bCh50C94H072hA3QeTsLqS/view?usp=share_link"
    );
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="portfolio">
      <div className="header">
        <div className="navbar">
          <img className="ms-icon" alt="" src="/ms.svg" />
          <div className="links">
            <a className="resume" onClick={onResumeClick}>
              Resume
            </a>
            <a
              className="about"
              href="https://www.linkedin.com/in/manikksharma13"
              target="_blank"
              data-scroll-to="about"
              onClick={onAboutClick}
            >
              About
            </a>
            <a
              className="project"
              href="https://github.com/manik21336"
              target="_blank"
            >
              Project
            </a>
          </div>
        </div>
      </div>
      <GithubContainer />
      <PortfolioContainer />
      <InterestContainer />
      <div className="ending">
        <ContainerWrapper />
        <a
          className="ending-child"
          href="mailto:manik21336@iiitd.ac.in?subject=PROJECT"
        />
        <div className="ending-inner">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PORTFOLIO;
