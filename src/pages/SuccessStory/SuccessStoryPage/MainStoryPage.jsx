import React from "react";
import "../../../styles/SuccessStory/SuccessStoryPage/MainStroyPage.scss";
import main from "../../../assets/Images/SuccessStory/couching.jpg";
const MainStoryPage = () => {
  return (
    <>
      <div className="main-story-page-body">
        <main className="main-story-page-body-main">
          <header className="main-story-page-body-header">
            <h1 className="main-story-page-h1">
              A CENTRALIZED LEARNING AND COACHING PLATFORM FOR RISING
              PROFESSIONALS
            </h1>
          </header>
          <article>
            <figure
              className="main-story-page-figure"
              class="main-story-page-aside"
            >
              {/* <div class="main-story-page-module">
                <header className="main-story-page-body-header">
                  <h4>Activities</h4>
                </header>
                <ul className="main-story-page-tag-ul">
                  <li className="main-story-page-body-tag-li">Conducted User Interviews</li>
                  <li className="main-story-page-body-tag-li">Constructed Personas</li>
                  <li className="main-story-page-body-tag-li">Drafted Wireframes</li>
                  <li className="main-story-page-body-tag-li">Built a Prototype</li>
                  <li className="main-story-page-body-tag-li">Delivered a Design Brief</li>
                </ul>
              </div> */}
            </figure>
            <h2 className="main-story-page-h2">Overview</h2>
            <p className="main-story-page-tag-p">
              The organization aims to implement a centralized Identity Provider
              (IDP) solution that connects all the application personas used by
              their consumers with Single Sign-On (SSO). The solution covers
              several use cases, including automatically creating new users from
              HubSpot, propagating users to Higher Logic, providing a single
              login in the IDP, and role mapping across different applications.
              The problem statement involves selecting the right IDP that can
              accommodate the requirements of multiple applications and
              dynamically handle attribute mappings.
            </p>
            {/* <dl className="main-story-page-body-tag-dl">
              <dt className="main-story-page-body-tag-dt">Roles</dt>
              <dd className="main-story-page-body-tag-dd">User Research, UX Design, Visual Design</dd>
              <dt className="main-story-page-body-tag-dt">Team</dt>
              <dd className="main-story-page-body-tag-dd">Cindy Lee, James Masterson, Aditi Sharma</dd>
            </dl> */}
            <figure
              className="main-story-page-figure"
              class="main-story-page-full"
            >
              <img className=".main-story-page-img" src={main} alt="" />
              <figcaption className="main-story-page-figcaption"></figcaption>
            </figure>
            <h2 className="main-story-page-h2">Brief</h2>
            <p className="main-story-page-tag-p">
              The organization implemented a centralized Identity Provider (IDP)
              solution to connect various application personas used by their
              consumers with Single Sign-On (SSO). The solution involved
              automatically creating users from HubSpot, propagating them to
              Higher Logic, providing a single login experience in the IDP, and
              mapping roles across different applications. The challenges
              included selecting the right IDP, handling dynamic attribute
              mappings, and integrating applications with different data
              structures and formats. The research process involved evaluating
              IDP options, understanding integration requirements, and assessing
              compatibility. The implemented solution successfully addressed the
              challenges and improved user experience and data integration
              capabilities.
            </p>
            <h2 className="main-story-page-h2">Research</h2>
            <p className="main-story-page-tag-p">
              To address the challenges and find a suitable solution, a thorough
              research process was undertaken. This involved evaluating various
              IDP options available in the market, assessing their capabilities,
              compatibility with the existing applications, and their ability to
              handle dynamic attribute mappings. The research process also
              involved understanding the integration requirements of HubSpot,
              Higher Logic, and Elevate, along with their data structures and
              formats..
            </p>
            <figure className="main-story-page-figure">
              {/* <img
                className="main-story-page-img"
                src="http://placehold.it/900X500"
                alt=""
              /> */}
              <figcaption className="main-story-page-figcaption"></figcaption>
            </figure>

            
            {/* <p className="main-story-page-tag-p">
              Here I am continuing to discuss the project by going into greater
              detail. Ideally this paragraph should be a bit longer than this.
              However, I’m simply making it up at the moment, so for now this
              will have to suffice.
            </p>
            <ul className="main-story-page-tag-ul">
              <li className="main-story-page-body-tag-li">This is an example of a list.</li>
              <li className="main-story-page-body-tag-li">
                It might be useful if you want to call out a few main points.
              </li>
              <li className="main-story-page-body-tag-li">After all, it is a list.</li>
            </ul>
            <p className="main-story-page-tag-p">
              Here I am continuing to discuss the project by going into greater
              detail. Ideally this paragraph should be a bit longer than this.
              However, I’m simply making it up at the moment, so for now this
              will have to suffice.
            </p> */}
            <h2 className="main-story-page-h2">Process</h2>
            <p className="main-story-page-tag-p">
              Here I am continuing to discuss the project by going into greater
              detail. Ideally this paragraph should be a bit longer than this.
              However, I’m simply making it up at the moment, so for now this
              will have to suffice.
            </p>
            <ul className="main-story-page-tag-ul">
              <li className="main-story-page-body-tag-li">
              Identify the Requirements: Understand the organization's needs and requirements for a centralized IDP solution. Identify the applications to be integrated, such as HubSpot, Higher Logic, and Elevate, along with the desired use cases and functionalities.
              </li>
              <li className="main-story-page-body-tag-li">
              Conduct Market Research: Explore different IDP solutions available in the market and assess their features, capabilities, and compatibility with the organization's requirements. Consider factors such as support for dynamic attribute mappings, integration options, and security features.  
              </li>
              <li className="main-story-page-body-tag-li">
              Evaluate Integration Requirements: Analyze the integration requirements of each application, including data structures, formats, and authentication mechanisms. Determine the necessary integration points and identify any specific challenges or complexities.
              </li>
              <li className="main-story-page-body-tag-li">
              Select the IDP Solution: Based on the research and evaluation, choose the most suitable IDP solution that can meet the organization's requirements. Consider factors such as flexibility, scalability, ease of integration, and support for SSO.
              </li>
              <li className="main-story-page-body-tag-li">
              Design the System Architecture: Plan the architecture of the centralized IDP solution, considering the integration points with HubSpot, Higher Logic, and Elevate. Determine the necessary APIs, protocols (such as SAML), and data mappings for seamless data exchange.
              </li>
              <li className="main-story-page-body-tag-li">
              Develop Dynamic Attribute Handling: Build a dynamic attribute handling system that can cater to the diverse needs of the integrated applications. This involves designing a flexible attribute mapping mechanism that can accommodate different data formats, such as SAML, JSON, or others.
              </li>
              <li className="main-story-page-body-tag-li">
              Implement SSO and User Creation: Set up Single Sign-On (SSO) capabilities within the IDP to provide a unified login experience for users. Implement the necessary APIs and workflows to automatically create users from HubSpot and propagate them to Higher Logic.
              </li>
              <li className="main-story-page-body-tag-li">
              Test and Validate: Conduct rigorous testing to ensure the functionality, security, and performance of the centralized IDP solution. Verify that user creation, role mapping, SSO, and data integration processes are working as intended.
              </li>
              <li className="main-story-page-body-tag-li">
              Deploy and Support: Deploy the centralized IDP solution in the production environment and provide ongoing support for infrastructure, hosting, and engagement with other vendors. Continuously monitor and maintain the system to ensure its smooth operation.
              </li>
            </ul>
            <p className="main-story-page-tag-p">
            By following this process, the organization successfully implemented a centralized IDP solution that streamlined authentication, integrated multiple applications, and improved the user experience for their consumers.
            </p>
            <div class="main-story-page-row">
              <div class="main-story-page-column one third">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                    alt=""
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
              <div class="main-story-page-column one third">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                    alt=""
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
              <div class="main-story-page-column one third">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                    alt=""
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
            </div>
            <h2 className="main-story-page-h2">Solution</h2>
            <p className="main-story-page-tag-p">
              The chosen solution involved implementing a robust and flexible
              IDP system that could cater to the unique needs of the
              organization's multiple applications. The solution required
              building dynamic attributes to accommodate various requirements
              from HubSpot, Higher Logic, and Elevate. It also involved setting
              up SSO from the IDP for seamless authentication across all the
              integrated applications. The IDP system was designed to handle
              different data formats such as SAML and JSON, ensuring smooth
              integration with the various applications.
            </p>
            <div class="main-story-page-row">
              <div class="main-story-page-column one sixth">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                    alt=""
                  />
                  */}
                </figure>
              </div>
              <div class="main-story-page-column one sixth">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                    alt=""
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
              <div class="main-story-page-column one sixth">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
              <div class="main-story-page-column one sixth">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
              <div class="main-story-page-column one sixth">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
              <div class="main-story-page-column one sixth">
                <figure className="main-story-page-figure">
                  {/* <img
                    className="main-story-page-img"
                    src="http://placehold.it/600X500"
                  /> */}
                  <figcaption className="main-story-page-figcaption"></figcaption>
                </figure>
              </div>
            </div>
            <h2 className="main-story-page-h2">Results</h2>
            <p className="main-story-page-tag-p">
              The implemented centralized IDP solution successfully addressed
              the challenges faced by the organization. It provided a unified
              login experience for customers through SSO, eliminating the need
              for separate credentials for each application. The automation of
              user creation from HubSpot and propagation to Higher Logic ensured
              seamless user management. The dynamic attribute mapping capability
              allowed for flexibility in handling the diverse requirements of
              the integrated applications. Overall, the centralized IDP solution
              improved user experience, streamlined authentication processes,
              and enhanced the organization's data integration capabilities.
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default MainStoryPage;
