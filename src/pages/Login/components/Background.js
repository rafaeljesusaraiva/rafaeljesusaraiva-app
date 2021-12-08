import styled from "styled-components";

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: scale(1.1);
    transform-origin: center;
    z-index: -1;
    background-image: url('https://i.imgur.com/dsmeQqU.jpg');
    background-position: center;
    background-size: cover;
    filter: blur(3px) brightness(0.8);
`;

export default Background;