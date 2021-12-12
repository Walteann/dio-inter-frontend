import styled from 'styled-components';

export const Wrapper = styled.main`
    width:  100vw;
    height: 100vh;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Background = styled.div<{image: any}>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50vh;
    background-image: url(${({image}) => image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
`;

export const InputContainer = styled.div`
    margin-top: 67px;
    width: 90%;
    flex: 1;
`;

export const ButtonContainer = styled.div`
    width: 90%;
    
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        font-family: Roboto, sans-serif;
        font-size: 0.75rem;
        font-weight: 400;
        color: ${({theme}) => theme.colors.secondary};

        a {
            font-family: Roboto, sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: ${({theme}) => theme.colors.primary};
            text-decoration: none;
        }
    }
`;


