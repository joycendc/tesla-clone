import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Image from "next/dist/client/image";
import { faTimes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const [click, setClick] = useState(false);

  const handleMenuBar = () => setClick(!click);
  const handleMenuX = () => setClick(false);

  return (
    <Container>
      <div
        style={{
          flex: 1,
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Tesla-Logo"
          width={100}
          height={15}
        />
      </div>
      <Menu>
        <a href="#" data-tooltip="Model S">
          Model S
        </a>
        <a href="#" data-tooltip="Model 3">
          Model 3
        </a>
        <a href="#" data-tooltip="Model X">
          Model X
        </a>
        <a href="#" data-tooltip="Model Y">
          Model Y
        </a>
        <a href="#" data-tooltip="Solar Roof">
          Solar Roof
        </a>
        <a href="#" data-tooltip="Solar Panels">
          Solar Panels
        </a>
      </Menu>
      <RightMenu>
        <a href="#" data-tooltip="Shop">
          Shop
        </a>
        <a href="#" data-tooltip="Account">
          Account
        </a>
        <a href="#" data-tooltip="Menu" onClick={handleMenuBar}>
          Menu
        </a>
      </RightMenu>
      {click && (
        <Wrap onClick={handleMenuX}>
          <MenuItems>
            <Fade>
              <i>
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ margin: "15px", width: "30px", height: "30px" }}
                  onClick={handleMenuX}
                />
              </i>

              <li>
                <a href="#">Model S</a>
              </li>
              <li>
                <a href="#">Model 3</a>
              </li>
              <li>
                <a href="#">Model X</a>
              </li>
              <li>
                <a href="#">Model Y</a>
              </li>
              <li>
                <a href="#">Solar Roof</a>
              </li>
              <li>
                <a href="#">Solar Panels</a>
              </li>
              <li>
                <a href="#">Existing Inventory</a>
              </li>
              <li>
                <a href="#">Used Inventory</a>
              </li>
              <li>
                <a href="#">Trade-In</a>
              </li>
              <li>
                <a href="#">Test Drive</a>
              </li>
              <li>
                <a href="#">Powerwall</a>
              </li>
              <li>
                <a href="#">Comercial Energy</a>
              </li>
              <li>
                <a href="#">Utilities</a>
              </li>
              <li>
                <a href="#">Charging</a>
              </li>
              <li>
                <a href="#">Find Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "20px",
                  }}
                >
                  <i
                    style={{
                      paddingRight: "7px",
                      paddingTop: "30px",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{ width: "20px", height: "20px" }}
                      icon={faGlobe}
                    />
                  </i>
                  <p>United States</p>
                </a>
                <p
                  style={{
                    height: "20px",
                    margin: "0px",
                    padding: "0px",
                    paddingLeft: "28px",
                    borderBottom: "none",
                    cursor: "pointer",
                  }}
                >
                  English
                </p>
              </li>
            </Fade>
          </MenuItems>
        </Wrap>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;

  a {
    position: relative;
    font-weight: 600;
    padding: 5px 15px;
    flex-wrap: no-wrap;
  }

  a:hover {
    background-color: rgba(23, 26, 32, 0.07);
    border-radius: 10px;
  }

  a:after {
    content: "";
    opacity: 0;
    transition: all 0s;
  }

  a:hover:after {
    content: attr(data-tooltip);
    font-size: 12px;
    font-weight: 400;
    position: absolute;
    bottom: -2.5em;
    right: -1em;
    background-color: #fff;
    padding: 5px;
    margin-left: -5px;
    border: 0.5px solid #ddd;
    z-index: 999;
    opacity: 1;
    transition-delay: 0.8s;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;

  justify-content: flex-end;
  a {
    position: relative;
    font-weight: 600;
    margin-right: 10px;
    padding: 5px 10px;
  }

  a:hover {
    background-color: rgba(23, 26, 32, 0.07);
    border-radius: 10px;
  }

  a:after {
    content: "";
    opacity: 0;
    transition: all 0s;
  }

  a:hover:after {
    content: attr(data-tooltip);
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    bottom: -2.5em;
    right: -1em;
    background-color: #fff;
    padding: 5px;
    margin-left: -5px;
    border: 0.5px solid #ddd;
    z-index: 999;
    opacity: 1;
    transition-delay: 2s;
  }

  a:first-child,
  a:nth-child(2) {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  a:nth-child(3) {
    @media (max-width: 1200px) {
      background-color: rgba(23, 26, 32, 0.07);
      border-radius: 10px;
    }
  }
`;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  -webkit-backdrop-filter: blur(3.5px);
  backdrop-filter: blur(3.5px);
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  background-color: #fff;
  width: 320px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  z-index: 100;
  overflow: scroll;
  overflow-x: hidden;
  padding-bottom: 100px;
  li {
    padding: 10px;
    margin-left: 20px;
  }

  li:nth-child(-n + 7) {
    display: none;

    @media (max-width: 1200px) {
      display: block;
    }
  }
  a {
    font-weight: 600;
  }

  i {
    display: flex;
    align-items: right;
    justify-content: right;
    cursor: pointer;
    margin-bottom: 20px;
  }

  li:hover {
    background-color: rgba(23, 26, 32, 0.07);
    border-radius: 20px;
  }
`;
