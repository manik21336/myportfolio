import { useEffect } from "react";
import "./InterestContainer.css";

const InterestContainer = () => {
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
    <div className="my-interest">
      <div className="my-interest-inner">
        <div className="frame-wrapper2">
          <div className="frame-wrapper2">
            <div className="frame-parent1">
              <div className="group-wrapper8" data-animate-on-scroll>
                <div
                  className="competitive-programming-ux-de-parent"
                  data-animate-on-scroll
                >
                  <img
                    className="competitive-programming-ux-de"
                    alt=""
                    src="/competitive-programming-ux-design-data-structure--algorithm-object-oriented-programming.svg"
                  />
                  <img
                    className="my-interest-icon"
                    alt=""
                    src="/my-interest.svg"
                  />
                </div>
              </div>
              <div className="group-wrapper9">
                <div className="vector-container">
                  <img
                    className="vector-icon10"
                    alt=""
                    src="/vector10.svg"
                    data-animate-on-scroll
                  />
                  <img
                    className="group-child5"
                    alt=""
                    src="/group-39@2x.png"
                    data-animate-on-scroll
                  />
                  <div className="vector-wrapper">
                    <img
                      className="vector-icon11"
                      alt=""
                      src="/vector11.svg"
                      data-animate-on-scroll
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestContainer;
