import styled from 'styled-components';
import profile from '../assets/paul-bw.jpg';

export default function About(){

    return (
        <StyledAbout>
            <h2>Full-Stack Development</h2>
            <div className='aboutContainer'>

                <div className='aboutImg'>
                    <img src={profile} alt='Paul St.Germain profile' />
                </div>

                <div className='aboutText'>
                    <p>Hey - I'm Paul!</p> <br /><br />
                    <p>I'm a full stack developer who has a passion for building beautiful, functional web applications. <br /><br />
                    I'm always stretching my knowledge in new directions, adding more tools to my toolbelt, and working to become a better developer. <br /><br />
                    When I'm NOT coding, I can be found reading any book from my backlog or spending time in the great outdoors.</p>

                </div>
            </div>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    width: 100%;
    height: 85vh;
    background: #28A7F0;
    padding: 2%;

    h2 {
        color: white;
    }

    .aboutContainer {
        height: 90%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .aboutImg {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .aboutText {
        width: 50%;

        p {
            color: white;
            font-size: 2rem;
            margin-left: -55px;
            width: 95%;
        }
    }

    img {
        border-radius: 50%;
        width: 300px;
    }

`