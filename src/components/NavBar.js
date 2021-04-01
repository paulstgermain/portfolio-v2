import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { debounce } from '../utils/debounce';

const scrollStyles = {
    position: 'fixed',
    width: '100%',
    transition: 'top 0.3s',
}

export default function NavBar() {
    const [oldScroll, setOldScroll] = useState(0);
    const [visible, setVisible] = useState(true);
    
    const handleScroll = debounce(() => {
        const scrollPos = window.pageYOffset;

        setVisible((oldScroll > scrollPos || scrollPos < 10));

        setOldScroll(scrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [oldScroll, visible, handleScroll])

    return (
        <div style={{...scrollStyles, top: visible ? '0' : '-70px'}}>
            <StyledNav>
                <h1>PAUL ST.GERMAIN</h1>
                <ul>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </ul>
            </StyledNav>
        </div>
    )
}

const StyledNav = styled.nav`
    /* position: sticky;
    top: 0; */
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