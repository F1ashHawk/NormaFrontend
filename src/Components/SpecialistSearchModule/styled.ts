import styled from'styled-components';

interface SlideProps {
  isActive: boolean;
}

export const SearchModule = styled.div<SlideProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: lightblue;
  transition: transform 0.5s ease;
  transform: translateY(${props => props.isActive ? '0' : '100%'});
`;