import React, { useState, useEffect, useRef } from 'react';
import { animated } from 'react-spring';
import styled from '@emotion/styled';
import ExpandButton from '../images/ExpandButton.svg';
import NextButton from '../images/Arrow.svg';
import ExpandContainer from './ExpandContainer';

const Carousel = ({ data }) => {
  const imgRef = useRef();
  const docRef = useRef();
  const length = data.length;
  const [imgSize, setImgSize] = useState(0);
  const [CarouselWidth, setCarouselWidth] = useState(0);
  const [docWidth, setDocWidth] = useState(0);
  const [moreThanOne, setMoreThanOne] = useState(false);

  const handleResize = () => {
    console.log('in handleResize');
    setImgSize(imgRef.current.getBoundingClientRect().width);
    setDocWidth(docRef.current.getBoundingClientRect().width);
    setCarouselWidth(imgRef.current.getBoundingClientRect().width * length);
  };

  useEffect(() => {
    console.log('img Size = ', imgSize);
    console.log('carousel length = ', CarouselWidth);
    console.log('doc width = ', docWidth);
  }, [imgSize, CarouselWidth, docWidth]);

  useEffect(() => {
    CarouselWidth === '316' || '416'
      ? setMoreThanOne(false)
      : setMoreThanOne(true);
    console.log('IS THERE MORE THAN ONE? ', moreThanOne);
  }, [CarouselWidth, moreThanOne]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setImgSize(imgRef.current.getBoundingClientRect().width);
    setDocWidth(docRef.current.getBoundingClientRect().width);
    setCarouselWidth(imgRef.current.getBoundingClientRect().width * length);
  }, [imgRef.current]);

  const [x, setX] = useState(0);

  const moveRight = () => {
    console.log('in move right');
    setX(x - 100);
  };

  return (
    <ImageContainer ref={docRef}>
      <Next visibility={CarouselWidth} onClick={moveRight}>
        <Arrow src={NextButton} />
      </Next>
      {data.map((img, i) => (
        <animated.div
          key={i}
          style={{
            transform: `translateX(${x}%)`,
          }}
          ref={imgRef}
        >
          <Expand
            src={ExpandButton}
            onClick={() => {
              <ExpandButton />;
            }}
          />
          <Image src={img} />
        </animated.div>
      ))}
    </ImageContainer>
  );
};

export default Carousel;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const Expand = styled(animated.div)`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  margin-top: 8px;
  margin-left: 24px;
  cursor: pointer;
  
`;

const Arrow = styled(animated.div)`
  height: 48px;
  width: 48px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  align-items: center;
  cursor: pointer;
  
`;

const Next = styled.button`
  background-color: #191324;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cbe763;
  position: absolute;
  height: 100%;
  border: none;
  outline: none;
  right: 0;
  width: 64px;
  cursor: pointer;
  z-index: 1;
  font-size: 48px;
  padding: 0;
`;

const Image = styled.img`
  height: auto;
  max-width: 300px;
  padding-left: 16px;
  vertical-align: middle;
  @media (min-width: 850px) {
    max-width: 400px;
  }
`;
