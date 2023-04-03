import { useCallback, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
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

  const onButtonClick = useCallback(() => {
    window.open("https://www.instagram.com/manikksharma/");
  }, []);

  const onButton1Click = useCallback(() => {
    window.open("https://twitter.com/home?lang=en");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/manikksharma13");
  }, []);

  return (
    <div className="frame-parent3">
      <div className="made-with-love-3-wrapper">
        <div className="manik-sharma-wrapper">
          <b className="manik-sharma">Manik Sharma</b>
        </div>
      </div>
      <div className="group-wrapper14">
        <div className="button-parent">
          <button
            className="button"
            onClick={onButtonClick}
            data-animate-on-scroll
          >
            <img className="instagram-1-icon" alt="" src="/instagram-1.svg" />
          </button>
          <button
            className="button1"
            onClick={onButton1Click}
            data-animate-on-scroll
          >
            <img className="twitter-1-icon" alt="" src="/twitter-1.svg" />
          </button>
          <button
            className="button2"
            onClick={onButton2Click}
            data-animate-on-scroll
          >
            <img className="linkedin-1-2" alt="" src="/linkedin-1-2.svg" />
          </button>
        </div>
      </div>
      <div className="made-with-love-3-wrapper">
        <img className="made-with-love-3" alt="" src="/made-with-love-3.svg" />
      </div>
    </div>
  );
};

export default Footer;
