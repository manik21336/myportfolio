import { useEffect } from "react";
import "./ContainerWrapper.css";

const ContainerWrapper = () => {
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
    <div className="ending-inner1">
      <div className="group-wrapper10">
        <div className="frame-parent2">
          <div className="group-wrapper11">
            <div className="glow-wrapper">
              <div className="glow" data-animate-on-scroll>
                <div className="glow-child" />
              </div>
            </div>
          </div>
          <div className="group-wrapper12">
            <div className="group-parent2">
              <div className="glow-container" data-animate-on-scroll>
                <div className="glow-wrapper">
                  <div className="glow-item" />
                </div>
              </div>
              <div className="frame-wrapper3">
                <div className="vector-frame" data-animate-on-scroll>
                  <img
                    className="vector-icon12"
                    alt=""
                    src="/vector12.svg"
                    data-animate-on-scroll
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWrapper;
