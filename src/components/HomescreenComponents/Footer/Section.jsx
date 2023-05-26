import React from "react";
import styled from "styled-components";

import { FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
import logo from "../../../assets/Images/logo.png";

// Data for columns
const INDUSTRIES = [
  { name: "Banking, Financial Services", link: "/banking&finance" },
  {
    name: "HealthCare, Pharma & Life Science",
    link: "/healthcare&lifeScience",
  },
  {
    name: "Travel, Transportation & Hospitality ",
    link: "/travel&hospitality",
  },
  { name: "Retail & Consumer Goods", link: "/retail&consumer" },
  { name: "Industrial Goods & Manufacturing", link: "/ind&manufacturing" },
  { name: "Telecom & Media", link: "/tele&media" },
];

const SERVICES = [
  { name: "Data Engineering & Solution", link: "/dataeng" },
  { name: "Digital Engineering & Transformation", link: "/digital" },
  { name: "Cloud Engineering & Platforms", link: "/cloudeng" },
  { name: "Consultant & Advisory", link: "/consultant" },
];

const COMPANY = [
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Industries", link: "/industries" },
  { name: "Contact Us", link: "/contact" },
  { name: "Success Story", link: "/successstory" },
  { name: "Blog", link: "/healthcare" },
];

const LEGAL = [
  { name: "Term & Condition", link: "term&cond" },
  { name: "Privacy Policy", link: "privacy" },
  { name: "Cookie Policy", link: "#" },
  { name: "General Info", link: "#" },
  { name: "FAQ", link: "#" },
];

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
`;

const FooterLogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  
  
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: space-between;
`;

const FooterColumn = styled.div`
  flex-basis: 20%;
`;
const FooterColumnTitle = styled.h4`
  margin-bottom: 2rem;
`;

const FooterColumnList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterColumnListItem = styled.li`
  margin-bottom: 5px;
  align-items: center;
`;

const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const FooterIcon = styled.span`
  margin: 0 5px;
`;

const FooterLine = styled.hr`
  margin: 50px 50px;
  border-top: 1px solid #ddd;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;
const FooterMargin = styled.div`
  padding-left: 4rem;
`;

const Footer = () => {
  // Dummy data for columns
  const columns = [
    { title: "Industry", items: INDUSTRIES },
    { title: "Services", items: SERVICES },
    { title: "Company", items: COMPANY },
    { title: "Legal", items: LEGAL },
  ];

  return (
    <FooterContainer>
      <FooterLogo>
        <FooterLogoImage src={logo} alt="Logo" />
      </FooterLogo>
      <FooterMargin>
        <FooterColumns>
          {columns.map((column, columnIndex) => (
            <FooterColumn key={columnIndex}>
              <FooterColumnTitle>{column.title}</FooterColumnTitle>
              <FooterColumnList>
                {column.items.map((item, itemIndex) => (
                  <FooterColumnListItem key={itemIndex}>
                    {item.icon && (
                      <FooterIcon>
                        {React.createElement(item.icon, { size: 24 })}
                      </FooterIcon>
                    )}
                    {item.name}
                  </FooterColumnListItem>
                ))}
              </FooterColumnList>
            </FooterColumn>
          ))}
        </FooterColumns>
      </FooterMargin>
      <FooterLine />
      <FooterIconsContainer>
        <FooterIcon>
          <FiTwitter size={24} />
        </FooterIcon>
        <FooterIcon>
          <FiLinkedin size={24} />
        </FooterIcon>
        <FooterIcon>
          <FiFacebook size={24} />
        </FooterIcon>
      </FooterIconsContainer>
      <FooterText>&copy; 2023 Rhombus Global Services</FooterText>
      <FooterText>Hackettstown, New Jersey 07840, USA</FooterText>
    </FooterContainer>
  );
};

export default Footer;
