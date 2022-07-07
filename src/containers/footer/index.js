import React from "react";
import {
  FooterContainer,
  Section,
  FooterEmailSection,
  SectionContainer,
  Title,
  Divider,
  FooterForm,
} from "./FooterElements";
import { Link } from "react-router-dom";
import Icons from "../../components/icons";

function Footer() {
  const footerContents = [
    {
      title: "Customer Care",
      links: [
        "Help & Faqs",
        "Returns",
        "Size Guide",
        "Store Locator",
        "Careers",
        "Privacy",
        "Contact Us",
      ],
    },
    {
      title: "About Us",
      links: [
        "About Poveria",
        "Gift Cards",
        "Discount + Promo Codes",
        "Memberships",
      ],
    },
    {
      title: "Customer Service",
      links: ["Help & Faqs", "Store Locator", "Careers", "Privacy"],
    },
  ];

  const handleSubmitForm = (e) => {
    e.preventDefault()
  }
  return (
    <FooterContainer>
      <FooterEmailSection>
        <Title>Don't miss out</Title>
        <Divider />
        <p>
          Get 50% off your first online order! Plus, earn daily points, bonus
          rewards, and access exclusive offers.
        </p>
        <FooterForm onSubmit={handleSubmitForm}>
          <input placeholder="Enter your email" type="email" />
          <button type="submit">Sign Up</button>
        </FooterForm>
        <Title>Stay connected</Title>

        <Divider />
        <Icons color="white" />
      </FooterEmailSection>
      <SectionContainer>
        {footerContents.map((column, index) => (
          <Section key={index}>
            <Title>{column.title}</Title>
            <Divider />
            {column.links.map((each, index) => (
              <Link to="#" key={index}>
                {each}
              </Link>
            ))}
          </Section>
        ))}
      </SectionContainer>
    </FooterContainer>
  );
}

export default Footer;
