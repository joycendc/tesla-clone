import React, { useRef, useState } from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const wrap = useRef(null);

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

  const scroll = () => {
    typeof window !== "undefined" &&
      wrap.current.scrollBy({
        top: window.document.body.clientHeight,
        behavior: "smooth",
      });
  };

  return (
    <Container onScroll={onScroll} ref={wrap}>
      <Section backgroundImg="model-3.jpg" scrollY={scrollY} scroll={scroll} />
      <Section backgroundImg="model-y.jpg" scrollY={scrollY} scroll={scroll} />
      <Section backgroundImg="model-s.jpg" scrollY={scrollY} scroll={scroll} />
      <Section backgroundImg="model-x.jpg" scrollY={scrollY} scroll={scroll} />
      <Section
        backgroundImg="solar-panel.jpg"
        scrollY={scrollY}
        scroll={scroll}
      />
      <Section
        backgroundImg="solar-roof.jpg"
        scrollY={scrollY}
        scroll={scroll}
      />
      <Section
        backgroundImg="accessories.jpg"
        scrollY={scrollY}
        scroll={scroll}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
