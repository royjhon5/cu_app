import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Fade, Grow, useTheme } from '@mui/material'
import logo from '../../assets/images/cuLogo.png'

const CustomPreLoader = () => {
const theme = useTheme();
const circleKeys = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const dotKeys = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const outlineKeys = keyframes`
  0% {
    transform: scale(0);
    outline: solid 20px hsl(0, 0%, 87%);
    outline-offset: 0;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    outline: solid 0 transparent;
    outline-offset: 20px;
    opacity: 0;
  }
`;

const zoomInKeys = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
`;

const floatingKeys = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
`;

const waveKeys = keyframes`
    0%, 40%, 100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-10px);
    }
  `;

// Styled components
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  border: solid 2px hsl(0, 0%, 80%);
  border-radius: 50%;
  margin: 0 10px;
  background-color: transparent;
  animation: ${circleKeys} 2s ease-in-out infinite;

  &:nth-of-type(2) {
    animation-delay: 0.3s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.6s;
  }

  &:nth-of-type(4) {
    animation-delay: 0.9s;
  }

  &:nth-of-type(5) {
    animation-delay: 1.2s;
  }
`;

const Dot = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  animation: ${dotKeys} 2s ease-in-out infinite;

  &:nth-of-type(2) {
    animation-delay: 0.3s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.6s;
  }

  &:nth-of-type(4) {
    animation-delay: 0.9s;
  }

  &:nth-of-type(5) {
    animation-delay: 1.2s;
  }
`;

const Outline = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${outlineKeys} 2s ease-in-out infinite;

  &:nth-of-type(1) {
    animation-delay: 0.9s;
  }

  &:nth-of-type(2) {
    animation-delay: 1.2s;
  }

  &:nth-of-type(3) {
    animation-delay: 1.5s;
  }

  &:nth-of-type(4) {
    animation-delay: 1.8s;
  }

  &:nth-of-type(5) {
    animation-delay: 2.1s;
  }
`;

  const ZoomInImage = styled.img`
    width: 100px;
    height: auto;
    animation: ${zoomInKeys} 1s ease-in-out, ${floatingKeys} 1s ease-in-out 1s infinite;
  `;

  const LoadingText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    span {
      display: inline-block;
      animation: ${waveKeys} 1.5s ease-in-out infinite;

      &:nth-of-type(1) {
        animation-delay: 0s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.1s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.2s;
      }
      &:nth-of-type(4) {
        animation-delay: 0.3s;
      }
      &:nth-of-type(5) {
        animation-delay: 0.4s;
      }
      &:nth-of-type(6) {
        animation-delay: 0.5s;
      }
      &:nth-of-type(7) {
        animation-delay: 0.6s;
      }
    }
  `;
  return (
    <>
      <Fade in={true}>
      <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: theme.palette.appSettings.paletteMode === 'light' ? 'rgba(244, 246, 248, 0.8)' : 'rgba(22, 28, 36, 0.8)',
      backdropFilter: 'blur(20px)',
      gap: .5
    }}>
      <Grow in={true}>
        <ZoomInImage src={logo} alt="Loading" />
      </Grow>
      <Grow in={true}>
      <LoadingText>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </LoadingText>
      </Grow>
      <Grow in={true}>
      <LoaderContainer>
      <Circle>
        <Dot />
        <Outline />
      </Circle>
      <Circle>
        <Dot />
        <Outline />
      </Circle>
      <Circle>
        <Dot />
        <Outline />
      </Circle>
      <Circle>
        <Dot />
        <Outline />
      </Circle>
      </LoaderContainer>
      </Grow>
    </Box>
      </Fade>
    </>
  )
}

export default CustomPreLoader