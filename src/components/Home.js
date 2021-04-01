import styled from 'styled-components';

import jumbo from '../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'

export default function Home() {

    return (
        <StyledHome>
            <span id='home'></span>
            <div>
                <img className='jumbo' src={jumbo} alt='An open laptop' />

                <span className='headerText'>
                Eat<br/>
                Sleep<br />
                <span>&lt;Code&gt;</span><br />
                Repeat<br />
                <a className='headerButton' href='#projects'>Explore Portfolio</a></span>
            </div>
        </StyledHome>
    )
}

const StyledHome = styled.header`
    height: 100vh;
    width: 100%;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;

    .jumbo {
        width: 700px;
        margin-bottom: -100px;
        margin-left: 50px;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .headerText {
            color: #28A7F0;
            font-family: 'Archivo Black', sans-serif;
            font-weight: blue;
            font-size: 3.6rem;
            text-align: right;
            margin: 0 50px -100px 0;
            line-height: 1.2;

            .headerButton {
                /* height: 35px;
                width: 150px; */
                padding: 6% 10%;
                background-color: #28A7F0;
                font-size: 1.6rem;
                color: white;
                text-decoration: none;
                transition: .3s ease-in-out;

                &:hover{
                    background-color: #6666FF;
                    cursor: pointer;
                }
            }
        }

        span {
            font-family: 'Archivo Black', sans-serif;
            font-size: 3.6rem;
            color: #83F00F;
        }
    }
`

// Fonts: Archivo, Archivo Black, Average Sans. 

// Colors: 

// #fff
// #000
// #83F00F
// #6666FF
// #28A7F0