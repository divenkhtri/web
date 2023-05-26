import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import LazyLoad from "react-lazyload";

import bank from "../../../assets/Images/IndustrySection/bank.jpg";
import transportation from "../../../assets/Images/IndustrySection/transportation.jpg";
import pharma from "../../../assets/Images/IndustrySection/pharma.jpg";
import manufacturing from "../../../assets/Images/IndustrySection/manufacturing.jpg";
import retail from "../../../assets/Images/IndustrySection/retail.jpg";
import telecom from "../../../assets/Images/IndustrySection/telecom.jpg";

const Container = styled.div`
  margin: 4rem;
  padding: 2rem;
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
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.....",
    largeDescription:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    imageSrc: bank,
    link: "/banking-insurance-and-financial-institution",
  },
  {
    title: "Healthcare, Pharma & Life Science",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.....",
    largeDescription:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    imageSrc: pharma,
    link: "/healthcare-pharma-and-life-science",
  },
  {
    title: "Travel, Transportation & Hospitality",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.....",
    largeDescription:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    imageSrc: transportation,
    link: "/travel-transportation-and-hospitality",
  },
  {
    title: "Retail, Consumer Products & Goods",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.....",
    largeDescription:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    imageSrc: retail,
    link: "/retail-and-conumer-goods",
  },
  {
    title: "Industrial Goods & Manufacturing",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.....",
    largeDescription:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    imageSrc: manufacturing,
    link: "/industrial-goods-and-manufacturing",
  },

  {
    title: "Telecommunication & Media",
    description:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.....",
    largeDescription:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit",
    imageSrc: telecom,
    link: "/telecommunication-and-media",
  },
  // Add more card objects for remaining cards
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
            <LazyLoad height={200}>
              <Card onClick={() => openModal(card)}>
                <CardImage src={card.imageSrc} alt={card.title} />
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            </LazyLoad>
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
