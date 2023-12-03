"use client";
import React, { Component } from "react";

interface ScrollToTopButtonState {
  isButtonVisible: boolean;
}

class ScrollToTopButton extends Component<{}, ScrollToTopButtonState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isButtonVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollFunction);
  }

  scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.setState({ isButtonVisible: true });
    } else {
      this.setState({ isButtonVisible: false });
    }
  };

  scrollToTop = () => {
    this.scrollTo(0, 500);
  };

  scrollTo = (to: number, duration: number) => {
    const start = window.scrollY;
    const change = to - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(
        0,
        easeInOutCubic(elapsedTime / duration) * change + start
      );

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, to);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  render() {
    return (
      <div className="fixed sm:bottom-10 sm:right-10 bottom-6 right-5 z-50">
        {this.state.isButtonVisible && (
          <button
            className="text-white hover:text-muted-foreground rounded-full transition duration-200 bg-[#0d0d0d] w-14 h-14 flex justify-center items-center"
            onClick={this.scrollToTop}
            title="Go to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="pb-1"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.161 14.907c-.707.809-.133 2.073.941 2.073h11.796c1.074 0 1.648-1.264.941-2.073l-5.522-6.31a1.75 1.75 0 0 0-2.634 0l-5.522 6.31Zm1.492.573l5.159-5.896a.25.25 0 0 1 .376 0l5.16 5.896H6.652Z"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
}

export default ScrollToTopButton;
