import styled from 'styled-components';

export default function About(){

    return (
        <StyledAbout>
            <h2>Full-Stack Development</h2>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    width: 100%;
    height: 80vh;
    background: #28A7F0;
    padding: 2%;

    h2 {
        color: white;
    }
`