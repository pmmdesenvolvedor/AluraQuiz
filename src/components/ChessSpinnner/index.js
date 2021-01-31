import styled, { keyframes } from 'styled-components';

const cubeGridScaleDelay = keyframes`
  0%,
  70%,
  100% { transform: scale3D(1, 1, 1); }
  35% { transform: scale3D(0, 0, 1); } 
`;

const colorWhite = '#BF5E0A' //'#D97D0D';
const colorBlack = '#000000' //'#8C3604';

const ChessSpinnerBase = styled.div`
  width: 120px;
  height: 120px;
  margin: 100px auto;

  > .cube {
    width: 25%;
    height: 25%;
    background-color: #333;
    float: left;
    animation: ${cubeGridScaleDelay} 1.3s infinite ease-in-out;

    &.cube1 { animation-delay: 0.3s; background-color: ${colorWhite}; }
    &.cube2 { animation-delay: 0.4s; background-color: ${colorBlack}; }
    &.cube3 { animation-delay: 0.5s; background-color: ${colorWhite}; }
    &.cube4 { animation-delay: 0.6s; background-color: ${colorBlack}; }
    &.cube5 { animation-delay: 0.2s; background-color: ${colorBlack}; }
    &.cube6 { animation-delay: 0.3s; background-color: ${colorWhite}; }
    &.cube7 { animation-delay: 0.4s; background-color: ${colorBlack}; }
    &.cube8 { animation-delay: 0.5s; background-color: ${colorWhite}; }
    &.cube9 { animation-delay: 0.1s; background-color: ${colorWhite}; }
    &.cube10 { animation-delay: 0.2s; background-color: ${colorBlack}; }
    &.cube11 { animation-delay: 0.3s; background-color: ${colorWhite}; }
    &.cube12 { animation-delay: 0.4s; background-color: ${colorBlack}; }
    &.cube13 { animation-delay: 0.0s; background-color: ${colorBlack}; }
    &.cube14 { animation-delay: 0.1s; background-color: ${colorWhite}; }
    &.cube15 { animation-delay: 0.2s; background-color: ${colorBlack}; }
    &.cube16 { animation-delay: 0.3s; background-color: ${colorWhite}; }    
  }
`;


const ChessSpinner = props => {
  return (
    <ChessSpinnerBase>
      <div className="cube cube1"></div>
      <div className="cube cube2"></div>
      <div className="cube cube3"></div>
      <div className="cube cube4"></div>
      <div className="cube cube5"></div>
      <div className="cube cube6"></div>
      <div className="cube cube7"></div>
      <div className="cube cube8"></div>
      <div className="cube cube9"></div>
      <div className="cube cube10"></div>
      <div className="cube cube11"></div>
      <div className="cube cube12"></div>
      <div className="cube cube13"></div>
      <div className="cube cube14"></div>
      <div className="cube cube15"></div>
      <div className="cube cube16"></div>
    </ChessSpinnerBase>
  );
};

export default ChessSpinner;
