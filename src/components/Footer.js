import styled from 'styled-components';

export default function Footer(){

    return(
        <StyledFooter>
            <h2>Footer</h2>
            <div></div>
            <div></div>
            <div></div>
            <div>copyright</div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    width: 100%;
    height: 50vh;
    background-color: #000000;
    color: #ffffff;
`