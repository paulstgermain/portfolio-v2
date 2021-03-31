import styled from 'styled-components';

export default function NavBar() {


    return (
        <StyledNav>
            <h1>PAUL ST.GERMAIN</h1>
            <ul>
                <a href='#'>About</a>
                <a href='#'>Skills</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    height: 50px;
    color: #28A7F0;
    background: #000000;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 3.4rem;
        font-weight: 200;
        margin-left: 5%;
    }

    ul {
        width: 50%;
        display: flex;
        justify-content: space-evenly;

        a {
            text-decoration: none;
            color: #28A7F0;
            font-size: 1.6rem;
        }
    }
`