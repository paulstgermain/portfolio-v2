import styled from 'styled-components';

export default function Project(props){

    const { title, details, image, github, web } = props.data;

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
    height: 400px;
    display: flex;
    margin: 50px auto;
    box-shadow: 2px 2px 4px 2px rgba(33, 33, 33, 0.8);

    &:nth-child(odd) {
        flex-direction: row-reverse;
    }

    .projectInfo {
        height: 100%;
        width: 65%;
        background-color: #ffffff;

        .projectText {
            height: 85%;
            width: 100%;
            padding: 5% 0 0 5%;

            h3 {
                font-size: 4rem;
                color: #6666FF;
                margin-bottom: 30px;
            }

            p {
                font-size: 2rem;
                color: rgb(99,99,99);
                width: 95%;
            }
        }

        .projectLinks {
            height: 15%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.4rem;

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
        width: 45%;
        background-color: #6666FF;
        overflow: hidden;

        img {
            width: 200%;
            margin-left: -220px;
        }
    }
`