import React from "react";
import bg from "../../../assets/Images/Services/dots.svg";
import engineering from "../../../assets/Images/Services/sectors/engineering.jpg";
import hosting from "../../../assets/Images/Services/sectors/hosting.jpg";
import development from "../../../assets/Images/Services/sectors/development.jpg";
import "../../../styles/ServicePage/CloudEngineering/CloudSectorCard.css";

const CloudSectorCard = () => {
  return (
    <section className="cloud-eng-bg">
      <div className="cloud-eng-main-section">
        <div className="cloud-eng-card">
          <div className="cloud-eng-card-image">
            <img className="cloud-eng-card-image1" src={bg} alt="" />
            <img className="cloud-eng-card-image2" src={engineering} alt="" />
          </div>
          <div className="cloud-eng-card-content">
            <h2 className="cloud-eng-card-title">
              Cloud Engineering and Migration
            </h2>
            <p className="cloud-eng-card-text">
              Transform Your Business with Expert Cloud Engineering and
              Migration: At RGS, we specialize in cloud engineering and
              migration services to help businesses embrace the power of cloud
              computing. Our experienced engineers analyze your existing
              infrastructure, design robust cloud solutions, and seamlessly
              migrate your applications, data, and systems to the cloud.
              Leverage the Scalability and Cost-Efficiency of Cloud Computing:
              Cloud engineering and migration enable businesses to scale
              resources on-demand and reduce infrastructure costs. Our experts
              guide you through the entire migration process, ensuring a smooth
              transition while maximizing the benefits of cloud computing.
              Embrace agility, flexibility, and cost savings with our cloud
              engineering and migration services.
            </p>
          </div>
        </div>
      </div>
      <div className="cloud-eng-main-section">
        <div className="cloud-eng-card">
          <div className="cloud-eng-card-image">
            <img className="cloud-eng-card-image1" src={bg} alt="" />
            <img className="cloud-eng-card-image2" src={development} alt="" />
          </div>
          <div className="cloud-eng-card-content">
            <h2 className="cloud-eng-card-title">Cloud Native Development</h2>
            <p className="cloud-eng-card-text">
              Unlock the Full Potential of Cloud Computing with Cloud-Native
              Development: At RGS, we specialize in cloud-native development,
              empowering businesses to fully leverage the capabilities of cloud
              computing. Our experienced developers create modern, scalable, and
              resilient applications that are designed specifically for cloud
              environments, enabling you to harness the true power of the cloud.
              Embrace Agility and Scalability with Cloud-Native Architecture:
              Cloud-native development follows architectural principles that
              enable agility and scalability. Our developers design applications
              using microservices, containers, and serverless technologies,
              allowing you to scale your applications effortlessly, respond
              quickly to changing business needs, and optimize resource
              utilization.
            </p>
          </div>
        </div>
      </div>
      <div className="cloud-eng-main-section">
        <div className="cloud-eng-card">
          <div className="cloud-eng-card-image">
            <img className="cloud-eng-card-image1" src={bg} alt="" />
            <img className="cloud-eng-card-image2" src={hosting} alt="" />
          </div>
          <div className="cloud-eng-card-content">
            <h2 className="cloud-eng-card-title">
              Managed Hosting and Support Services
            </h2>
            <p className="cloud-eng-card-text">
              Focus on Your Business, Leave Hosting to the Experts: At RGS, we
              offer comprehensive managed hosting and support services, allowing
              you to focus on your core business activities. Our experienced
              team takes care of your hosting infrastructure, ensuring it
              remains secure, stable, and optimized, while you can concentrate
              on driving your business forward. Hassle-Free Hosting with Expert
              Support: Our managed hosting services provide you with a
              hassle-free hosting experience. From server setup and
              configuration to ongoing maintenance and monitoring, we handle all
              the technical aspects for you. Our dedicated support team is
              available 24/7 to address any issues promptly and keep your online
              presence running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSectorCard;
