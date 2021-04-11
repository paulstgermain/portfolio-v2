import styled from 'styled-components';

export default function Project(props){

    const { title, details, image, skills, github, web } = props.data;

    return(
        <StyledProject>
            <div className='projectInfo'>
                <div className='projectText'>
                    <h3>{ title }</h3>
                    <p>{ details }</p>
                </div>

                <div className='projectLinks'>
                    <a href={github} target='_blank' rel='noreferrer'>Visit Repository</a>
                    <p>|</p>
                    <a href={web} target='_blank' rel='noreferrer'>View on the Web</a>
                </div>
            </div>

            <div className='projectImg'>
                <img src={image} alt='project screenshot' />
            </div>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    width: 90%;
    height: 320px;
    display: flex;
    margin: 50px auto;
    box-shadow: 2px 2px 4px 2px rgba(33, 33, 33, 0.8);

    &:nth-child(odd) {
        flex-direction: row-reverse;
    }

    .projectInfo {
        height: 100%;
        width: 35%;
        background-color: #ffffff;

        .projectText {
            height: 85%;
            width: 100%;
            padding: 5% 0 0 5%;
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 3rem;
                color: #6666FF;
                margin-bottom: 25px;
            }

            p {
                font-size: 1.6rem;
                color: rgb(99,99,99);
                width: 95%;
            }

            .projectSkills {
                text-align: center;
                font-weight: bold;
                justify-self: flex-end;
            }
        }

        .projectLinks {
            height: 15%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.6rem;

            a {
                margin: 0 2%;
                color: #28A7F0;
                transition: .3s;
                text-decoration: none;

                &:hover {
                    color: #6666FF;
                    text-decoration: underline;
                }
            }
        }
    }

    .projectImg {
        height: 100%;
        width: 65%;
        background-color: #6666FF;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 1265px) {
        .projectImg {
            display: flex;
            align-items: center;
            background: #ffffff;
            padding: 0 1%;
        }
    }

    @media screen and (max-width: 1080px) {
        .projectInfo {
            .projectText {
                h3 {
                    font-size: 2.5rem;
                }

                p {
                    font-size: 1.4rem;
                }
            }
        }
    }

    @media screen and (max-width: 890px) {
        height: 500px;
        flex-direction: column-reverse;

        &:nth-child(odd) {
            flex-direction: column-reverse;
        }

        .projectInfo {
            width: 100%;

            .projectText {
                text-align: center;
                padding: 2% 0 0 2%;

                h3 {
                    font-size: 3rem;
                }

                p {
                    font-size: 1.6rem;
                }
            }
        }

        .projectImg {
            width: 100%;
            padding: 0;
            align-items: flex-start;

            img {
                /* width: default; */
            }
        }
    }

    @media screen and (max-width: 700px) {
        height: 400px;

        .projectInfo {
            .projectText {
                h3 {
                    font-size: 2.5rem;
                }

                p {
                    font-size: 1.4rem;
                }
            }
        }
    }

    @media screen and (max-width: 426px) {
        .projectInfo {
            .projectText {
                padding: 0 0 0 2%;
            }
        }
    }
`