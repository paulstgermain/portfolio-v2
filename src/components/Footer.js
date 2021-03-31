import styled from 'styled-components';
import { Envelope, GithubLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

const date = new Date();

export default function Footer(){

    return(
        <StyledFooter>
            <div className='footerOrganizer'>
                <div className='footerContact'>
                    <h4>PAUL ST.GERMAIN</h4>
                    <p>Full-Stack Engineer</p>
                    <div className='icons'>
                        <a href='mailto:paulg.stgermain@gmail.com'><Envelope size={30} /></a>
                        <a href='https://github.com/paulstgermain' target='_blank' rel='noreferrer'><GithubLogo size={30} /></a>
                        <a href='https://twitter.com/PaulStG1' target='_blank' rel='noreferrer'><TwitterLogo size={30} /></a>
                        <a href='https://www.linkedin.com/in/paul-stgermain/' target='_blank' rel='noreferrer'><LinkedinLogo size={30} /></a>
                        <a href='https://www.instagram.com/paulst.g/' target='_blank' rel='noreferrer'><InstagramLogo size={30} /></a>
                    </div>
                </div>

                <div className='footerCta'>
                    <p>Specializing in extraordinary web applications, APIs, databases, and more.</p>
                    <p>Recruiting?</p>
                    <button>Hire Me!</button>
                </div>

                <div className='footerNav'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className='copyright'>
                <p>&copy; {date.getFullYear()} Paul St.Germain</p>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    width: 100%;
    height: 50vh;
    display: flex;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    flex-direction: column;

    .footerOrganizer {
        display: flex;
        height: 90%;
    }

    .footerContact, .footerCta, .footerNav {
        width: 34%;
        /* border: 1px solid white; */
    }

    .footerContact {
        padding: 2% 0 0 4%;
        h4 {
            font-size: 2.8rem;
            font-weight: 500;
            color: #28A7F0
        }

        p {
            font-size: 2rem;
            font-family: 'Baumans', cursive;
            color: #83F00F;
            margin: 5px 0;
        }

        .icons {
            height: 45px;
            width: 200px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            a {
                color: white;
                transition: .3s;
    
                &:hover {
                    color: #28A7F0;
                }
            }
        }
    }

    .footerCta {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2%;
        font-size: 3rem;

        p {
            width: 65%;

            &:nth-child(odd){
                margin-bottom: 25px;
            }

        }

        button {
            padding: 2%;
            border: none;
            border-radius: 2px;
            margin-top: 35px;
            background-color: #28A7F0;
            color: #ffffff;
            transition: .3s ease-in-out;

            &:hover {
                background-color: #6666FF;
                padding: 2.5%;
                cursor: pointer;
            }
        }
    }

    .footerNav {
        padding-left: 8%;
        ul {
            list-style: none;

            li {
                margin: 25px 0;

                a {
                    font-size: 2.2rem;
                    text-decoration: none;
                    color: #ffffff;
                    transition: .3s;

                    &:hover {
                        color: #28A7F0;
                    }
                }
            }
        }
    }

    .copyright {
        font-size: 2rem;
        margin: auto;
    }
`