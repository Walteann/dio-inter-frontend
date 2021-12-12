import styled, { css } from 'styled-components';

interface ICardContainer {
    width: string;
    height: string;
    noShadow: boolean;
}

export const CardContainer = styled.div<ICardContainer>`
  
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({theme}) => theme.colors.background};



  ${(props) => !props.noShadow && css`
      box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
  `}

  border-radius: 20px;

  padding: 20px;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  z-index: 2;

`;