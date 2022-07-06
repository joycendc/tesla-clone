import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrap>
      <a href="#">Tesla © 2022</a>
      <a href="#">Privacy & Legal</a>
      <a href="#">Vehicle Recalls</a>
      <a href="#">Contact</a>
      <a href="#">Careers</a>
      <a href="#">News</a>
      <a href="#">Engage</a>
      <a href="#">Locations</a>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  padding: 30px 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: ;
    font-weight: 400;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
