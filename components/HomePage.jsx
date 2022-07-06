import React, { useRef, useState } from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;

    // console.log(document.body.clientHeight);
    // console.log(goingUp, currentScrollY);
    setScrollY(currentScrollY);
  };

  return (
    <Container onScroll={onScroll}>
      <Section backgroundImg="model-3.jpg" scrollY={scrollY} />
      <Section backgroundImg="model-y.jpg" scrollY={scrollY} />
      <Section backgroundImg="model-s.jpg" scrollY={scrollY} />
      <Section backgroundImg="model-x.jpg" scrollY={scrollY} />
      <Section backgroundImg="solar-panel.jpg" scrollY={scrollY} />
      <Section backgroundImg="solar-roof.jpg" scrollY={scrollY} />
      <Section backgroundImg="accessories.jpg" scrollY={scrollY} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
