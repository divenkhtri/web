import React, { useEffect } from "react";

import "../../../styles/Industry/BankingInsurance/BankingCoreSolution.css";

const TelecomCoreSolution = () => {
  useEffect(() => {
    const DOM = {
      timelineStep: "timeline__step",
      timelineStepActive: "is-active",
      timelineSlidesContainer: "timeline__slides",
      timelineSlide: "timeline__slide",
      timelineSlideActive: "is-active",
    };

    const STEP_ACTIVE_MARKER_CUSTOM_PROPS = {
      width: "--slide-width",
      posX: "--slide-pos-x",
      posY: "--slide-pos-y",
    };

    const SLIDES_CONTAINER_CUSTOM_PROPS = {
      height: "--slides-container-height",
    };

    const timeline = document.querySelector(".timeline");
    const timelineSlidesContainer = timeline?.querySelector(
      `.${DOM.timelineSlidesContainer}`
    );
    const timelineSlides = Array.from(
      timeline?.querySelectorAll(`.${DOM.timelineSlide}`)
    );

    const deactivateSteps = () => {
      const steps = document.querySelectorAll(`.${DOM.timelineStep}`);
      steps?.forEach((elem) => elem.classList.remove(DOM.timelineStepActive));
    };

    const activateCurrentStep = (currentStep) => {
      currentStep?.classList.add(DOM.timelineStepActive);
    };

    const deactivateSlides = () => {
      timelineSlides?.forEach((elem) =>
        elem.classList.remove(DOM.timelineSlideActive)
      );
    };

    const activateCurrentSlide = () => {
      const currentSlide = getCurrentSlide();

      if (!currentSlide) {
        return;
      }

      const currentSlideHeight = getCurrentSlideHeight(currentSlide);
      setSlideContainerHeight(currentSlideHeight);
      currentSlide.classList.add(DOM.timelineSlideActive);
    };

    const getCurrentStep = () => {
      const timelineSteps = Array.from(
        document.querySelectorAll(`.${DOM.timelineStep}`)
      );
      const currentStep = timelineSteps.find((element) =>
        element.classList.contains(DOM.timelineStepActive)
      );
      const currentStepIndex =
        currentStep &&
        timelineSteps.findIndex((element) =>
          element.classList.contains(DOM.timelineStepActive)
        );

      return { currentStep, currentStepIndex };
    };

    const getCurrentSlide = () => {
      const { currentStepIndex } = getCurrentStep();

      if (typeof currentStepIndex !== "number" || !timelineSlides) {
        return null;
      }

      return timelineSlides[currentStepIndex];
    };

    const setSlideContainerHeight = (height) => {
      timelineSlidesContainer?.style.setProperty(
        SLIDES_CONTAINER_CUSTOM_PROPS.height,
        `${height}px`
      );
    };

    const getCurrentSlideHeight = (currentSlide) => {
      return currentSlide.clientHeight;
    };

    const handleClick = (event) => {
      const { target } = event;

      if (
        !target ||
        !(target instanceof Element) ||
        !target.closest(`.${DOM.timelineStep}`)
      ) {
        return;
      }

      const currentStep = target.closest(`.${DOM.timelineStep}`);

      if (!currentStep) {
        return;
      }

      deactivateSteps();
      activateCurrentStep(currentStep);
      deactivateSlides();
      activateCurrentSlide();
    };

    const updateStepActiveMarkerProps = () => {
      const stepActiveMarker = timeline?.querySelector(
        ".timeline__step-active-marker"
      );

      const stepActiveMarkerProps = getStepActiveMarkerProps();
      if (!stepActiveMarkerProps) {
        return;
      }

      setStepActiveMarkerProps({ stepActiveMarker, ...stepActiveMarkerProps });
    };

    const setStepActiveMarkerProps = ({
      stepActiveMarker,
      posX,
      posY,
      width,
    }) => {
      stepActiveMarker.style.setProperty(
        STEP_ACTIVE_MARKER_CUSTOM_PROPS.width,
        `${width}px`
      );
      stepActiveMarker.style.setProperty(
        STEP_ACTIVE_MARKER_CUSTOM_PROPS.posX,
        `${posX}px`
      );
      stepActiveMarker.style.setProperty(
        STEP_ACTIVE_MARKER_CUSTOM_PROPS.posY,
        `${posY}px`
      );
    };

    const getStepActiveMarkerProps = () => {
      const currentStep = getCurrentStep();
      if (!currentStep || !timeline) {
        return null;
      }

      const timelineRect = timeline.getBoundingClientRect();
      const currentStepRect = currentStep.currentStep.getBoundingClientRect();

      return {
        posX: currentStepRect.left - timelineRect.left,
        posY: currentStepRect.top - timelineRect.top,
        width: currentStepRect.width,
      };
    };

    const handleResize = () => {
      updateStepActiveMarkerProps();
    };

    timeline?.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    // Clean up event listeners when the component is unmounted
    return () => {
      timeline?.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="industry-slt-content">
        <div className="industry-slt-container ">
          <h2 className="content__title">
            Core Telecommunication & Media Solutions
          </h2>
          <div className="content-border">
            <div className="timeline">
              <div className="timeline__stepper">
                <div className="timeline__step is-active">
                  <svg className="timeline__icon timeline__icon--default">
                    <use href="#icon-brain" />
                  </svg>
                  <svg className="timeline__icon timeline__icon--active">
                    <use href="#icon-brain" />
                  </svg>
                  <p className="timeline__step-title">
                    Network and Infrastructure Management
                  </p>
                </div>
                <div className="timeline__step">
                  <svg className="timeline__icon timeline__icon--default">
                    <use href="#icon-bulb" />
                  </svg>
                  <svg className="timeline__icon timeline__icon--active">
                    <use href="#icon-bulb" />
                  </svg>
                  <p className="timeline__step-title">Customer Experience</p>
                </div>
                <div className="timeline__step">
                  <svg className="timeline__icon timeline__icon--default">
                    <use href="#icon-rocket" />
                  </svg>
                  <svg className="timeline__icon timeline__icon--active">
                    <use href="#icon-rocket" />
                  </svg>
                  <p className="timeline__step-title">Digital Services</p>
                </div>
                <div className="timeline__step">
                  <svg className="timeline__icon timeline__icon--default">
                    <use href="#icon-target" />
                  </svg>
                  <svg className="timeline__icon timeline__icon--active">
                    <use href="#icon-target" />
                  </svg>
                  <p className="timeline__step-title">Business Operations</p>
                </div>
                <div className="timeline__step">
                  <svg className="timeline__icon timeline__icon--default">
                    <use href="#icon-seo" />
                  </svg>
                  <svg className="timeline__icon timeline__icon--active">
                    <use href="#icon-seo" />
                  </svg>
                  <p className="timeline__step-title">Analytics and Insights</p>
                </div>
              </div>

              <div className="timeline__slides">
                <div className="timeline__slide">
                  <h3 className="timeline__slide-title">
                    Network and Infrastructure Management
                  </h3>
                  <div className="timeline__slide-content">
                    <p class="bullet-points">
                      <span>&bull;</span> Core banking systems for managing
                      banking operations and customer accounts
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Online and mobile banking applications
                      for account management and transactions
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Payment processing and clearing
                      systems for transaction processing
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Fraud detection and prevention
                      solutions
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Risk management and compliance tools
                    </p>
                  </div>
                </div>

                <div className="timeline__slide">
                  <h3 className="timeline__slide-title">Customer Experience</h3>
                  <div className="timeline__slide-content">
                    <p class="bullet-points">
                      <span>&bull;</span> Customer relationship management (CRM)
                      software for personalized marketing and communications
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Customer service management systems
                      for inquiries, complaints, and disputes
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Loyalty program management software
                      for customer retention
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Customer analytics and segmentation
                      tools
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Social media management and analytics
                      solutions
                    </p>
                  </div>
                </div>

                <div className="timeline__slide">
                  <h3 className="timeline__slide-title">Digital Services</h3>
                  <div className="timeline__slide-content">
                    <p class="bullet-points">
                      <span>&bull;</span> Risk management and compliance
                      software for regulatory compliance and risk mitigation
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Anti-money laundering (AML) and know
                      your customer (KYC) compliance tools
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Cybersecurity solutions for data
                      protection and privacy
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Business continuity and disaster
                      recovery solutions
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Fraud detection and prevention
                      solutions
                    </p>
                  </div>
                </div>

                <div className="timeline__slide">
                  <h3 className="timeline__slide-title">Business Operations</h3>
                  <div className="timeline__slide-content">
                    <p class="bullet-points">
                      <span>&bull;</span> Investment management and portfolio
                      analytics software
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Financial planning and wealth
                      management tools
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span>Client reporting and communication
                      tools
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Alternative investment management
                      software
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span>Trading and execution platforms
                    </p>
                  </div>
                </div>

                <div className="timeline__slide">
                  <h3 className="timeline__slide-title">
                    Analytics and Insights
                  </h3>
                  <div className="timeline__slide-content">
                    <p class="bullet-points">
                      <span>&bull;</span> Commercial and business lending
                      management software
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Trade finance and supply chain finance
                      solutions
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span>Cash management and treasury management
                      systems
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span> Invoice financing and factoring
                      software
                    </p>
                    <p class="bullet-points">
                      <span>&bull;</span>Merchant acquiring and payment
                      processing solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelecomCoreSolution;
