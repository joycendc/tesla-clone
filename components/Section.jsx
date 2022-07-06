import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const Section = ({ backgroundImg, scrollY, scroll }) => {
  const [current, setCurrent] = useState({});
  const [h, setH] = useState(0);

  useEffect(() => {
    setH(typeof window !== "undefined" && window.document.body.clientHeight);
    displayModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  const displayModel = () => {
    if (scrollY <= 0) {
      setCurrent(data[0]);
    } else if (scrollY <= h) {
      setCurrent(data[1]);
    } else if (scrollY <= h * 2) {
      setCurrent(data[2]);
    } else if (scrollY <= h * 3) {
      setCurrent(data[3]);
    } else if (scrollY <= h * 4) {
      setCurrent(data[4]);
    } else if (scrollY <= h * 5) {
      setCurrent(data[5]);
    } else if (scrollY <= h * 6) {
      setCurrent(data[6]);
    } else {
      setCurrent(data[0]);
    }
  };

  return (
    <Wrap bgImage={backgroundImg}>
      <Inner>
        <Fade when={scrollY % h == 0 && h !== 0}>
          <ItemText>
            <h1>{current?.title}</h1>
            <p>{current?.description}</p>
          </ItemText>
        </Fade>

        <Buttons>
          <Fade when={scrollY % h == 0 && h !== 0}>
            <ButtonGroup>
              <LeftButton>{current?.leftBtn}</LeftButton>
              {current?.rightBtn ? (
                <RightButton>{current?.rightBtn}</RightButton>
              ) : null}
            </ButtonGroup>
          </Fade>
          {scrollY < h ? (
            <Fade when={scrollY % h == 0 && h !== 0}>
              <DownArrow
                src="/images/down-arrow.svg"
                onClick={() => scroll()}
              />
            </Fade>
          ) : null}
        </Buttons>
        {scrollY >= h * 6 ? <Footer /> : null}
      </Inner>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Inner = styled.div`
  pointer-events: none;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 260px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  margin: 8px;
  pointer-events: auto;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  font-weight: 500;
  color: #111;
`;

const DownArrow = styled.img`
  opacity: 0.65;
  height: 40px;
  margin-bottom: 10px;
  filter: brightness(0%);
  /* animation: animateDown infinite 1.5s; */
  overflow-x: hidden;
  z-index: 10;
  cursor: pointer;
  pointer-events: auto;
`;

const Buttons = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const data = [
  {
    id: 1,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    id: 2,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    id: 3,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    id: 4,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    id: 5,
    title: "Solar Panels",
    description: "Lowest Cost Solar Panels in America",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    id: 6,
    title: "Solar Roof",
    description: "Order Online for Touchless Delivery",
    leftBtn: "Custom Order",
    rightBtn: "Existing Inventory",
  },
  {
    id: 7,
    title: "Accessories",
    leftBtn: "Shop Now",
  },
];
