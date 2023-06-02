import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";


import bank from "../../../assets/Images/IndustrySection/bank.webp";
import transportation from "../../../assets/Images/IndustrySection/transportation.webp";
import pharma from "../../../assets/Images/IndustrySection/pharma.webp";
import manufacturing from "../../../assets/Images/IndustrySection/manufacturing.webp";
import retail from "../../../assets/Images/IndustrySection/retail.webp";
import telecom from "../../../assets/Images/IndustrySection/telecom.webp";

const Container = styled.div`
  margin: 4rem 4rem 0px 4rem;
  padding: 0px 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 70px;
`;

const CardWrapper = styled.div`
  width: calc(33.33% - 50px);
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  height: 450px;
  width: 350px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const CardDescription = styled.p`
  margin: 1rem;
  color: #777;
  font-size: 18px;
`;

const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    zIndex: 9999,
  },
  content: {
    width: "80%",
    height: "80%",
    margin: "auto",
    border: "none",
    borderRadius: "8px",
    padding: "0",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
  },
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const ModalImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const ModalContent = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
`;

const ModalDescription = styled.p`
  margin-top: 1rem;
  color: #777;
  font-size: 18px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
`;

const LearnMoreButton = styled.a`
  margin-left: 16px;
  padding: 1rem 1.5rem;
  color: #000;
  font-size: 18px;
  text-align: center;
  border: 3px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  width: auto;
  height: auto;
  transition: 0.1s;

  &:hover {
    background-color: #002dff;
    color: #fff;
    border: none;
  }
`;

const ContactButton = styled.a`
  display: flex;
  margin-right: 16px;
  padding: 1rem 1.5rem;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-color: #ff4500;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  width: auto;
  height: auto;
  transition: 0.1s;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #323c46;
    color: #fff;
    border: none;
  }
`;
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  color: #888;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  position: absolute;

  right: 1px;

  &:hover {
    color: #333;
  }
`;

const IndustryMainContainer = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  color: #000;
  align-items: center;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
`;

const cards = [
  {
    title: "Banking, Insurance & Financial Services",
    description:
      "RGS-Tech offers innovative technological solutions for banking, insurance, and financial services. With deep industry expertise, we empower clients to enhance efficiency.",
    largeDescription:
      "In the dynamic landscape of banking, insurance, and financial services, we understand the crucial role that trust, security, and innovation play. At RGS-Tech, we are committed to providing cutting-edge technological solutions tailored to the unique needs of the banking, insurance, and financial sectors. Our comprehensive suite of services, combined with our deep industry expertise, enables us to deliver seamless digital experiences, enhance operational efficiency, mitigate risks, and drive sustainable growth.",
    imageSrc: bank,
    link: "/industry/banking-insurance-and-financial-institution",
  },
  {
    title: "Healthcare, Pharma & Life Science",
    description:
      "Transforming healthcare, pharma & life sciences with innovative solutions for better patient care and accelerated medical advancements.",
    largeDescription:
      "In the healthcare, pharma, and life science industry, our aim is to revolutionize patient care, advance medical discoveries, and improve the overall quality of life. Through our comprehensive solutions and innovative approaches, we strive to address the complex challenges faced by healthcare providers, pharmaceutical companies, and researchers. With a focus on cutting-edge technology, data-driven insights, and collaborative partnerships, we are committed to driving breakthroughs in diagnostics, treatments, and personalized medicine. ",
    imageSrc: pharma,
    link: "/industry/healthcare-pharma-and-life-science",
  },
  {
    title: "Travel, Transportation & Hospitality",
    description:
      "Revolutionizing travel, transportation, and hospitality industries with innovative solutions, seamless experiences, and unparalleled customer service.",
    largeDescription:
      "In the fast-paced world of Travel, Transportation, and Hospitality, we understand the vital importance of seamless experiences and exceptional service. At RGS-Tech, we are committed to revolutionizing the industry by delivering cutting-edge technology solutions that enhance efficiency, optimize operations. Through our innovative software platforms, data-driven insights, and personalized customer engagement tools, we empower businesses in the Travel, Transportation, and Hospitality sector to unlock new levels of success.",
    imageSrc: transportation,
    link: "/industry/travel-transportation-and-hospitality",
  },
  {
    title: "Retail, Consumer Products & Goods",
    description:
      "Empowering retail, consumer products, and goods industries with digital innovation, personalized experiences, and sustainable solutions.",
    largeDescription:
      "In the fast-paced world of the Retail, Consumer Products & Goods industry, RGS-Tech is your trusted partner for success. With our deep understanding of the unique challenges and dynamics of this industry, we provide innovative technological solutions that help businesses thrive. From streamlining supply chain operations and optimizing inventory management to enhancing customer experiences through personalized engagement and omnichannel strategies.",
    imageSrc: retail,
    link: "/industry/retail-and-conumer-goods",
  },
  {
    title: "Industrial Goods & Manufacturing",
    description:
      "Driving industrial goods and manufacturing sectors forward with advanced technologies, efficient processes, and sustainable solutions.",
    largeDescription:
      "In the Industrial Goods & Manufacturing industry, precision, reliability, and efficiency are paramount. At RGS-Tech, we understand the unique challenges and demands faced by businesses in this sector, and we are committed to providing innovative solutions that optimize production processes, enhance operational efficiency, and drive overall competitiveness.",
    imageSrc: manufacturing,
    link: "/industry/industrial-goods-and-manufacturing",
  },

  {
    title: "Telecommunication & Media",
    description:
      "Revolutionizing the telecommunication and media industries with cutting-edge technology, seamless connectivity, and engaging content.",
    largeDescription:
      "The Telecommunication & Media industry plays a pivotal role in connecting people, facilitating global communication, and providing access to information and entertainment on a massive scale. With the rapid advancements in technology, this industry is constantly evolving to meet the ever-changing needs and demands of consumers. From telecommunications giants that enable seamless voice and data transmission across borders to media companies that deliver captivating content through various platforms, this industry fuels connectivity, creativity, and engagement. ",
    imageSrc: telecom,
    link: "/industry/telecommunication-and-media",
  },

];

const IndustryCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <IndustryMainContainer>
        RGS has deep domain expertise across a range of Industries.
      </IndustryMainContainer>
      <Container>
        {cards.map((card, i) => (
          <CardWrapper key={i}>
           
              <Card onClick={() => openModal(card)}>
                <CardImage src={card.imageSrc} alt={card.title} />
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
       
          </CardWrapper>
        ))}
      </Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Card Modal"
      >
        {selectedCard && (
          <ModalContainer>
            <ModalImage src={selectedCard.imageSrc} alt={selectedCard.title} />
            <ModalContent>
              <ModalTitle>{selectedCard.title}</ModalTitle>
              <ModalDescription>
                {selectedCard.largeDescription}
              </ModalDescription>
              <ModalButtons>
                <ContactButton href="/contact">Contact Us</ContactButton>
                <LearnMoreButton href={selectedCard.link}>
                  Learn More
                </LearnMoreButton>
              </ModalButtons>
            </ModalContent>
          </ModalContainer>
        )}
        <CloseButton onClick={closeModal}>
          <MdClose />
        </CloseButton>
      </Modal>
    </>
  );
};

export default IndustryCard;
