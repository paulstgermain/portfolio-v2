import styled from 'styled-components';

export default function Skills(){

    return(
        <StyledSkills>
            <span id='skills'></span>
            <div className='skillsHeader'>
                <h2>SERN Stacked</h2>
                <p className='skillSubTitle'>(With Port and Starboard Attachments)</p>
            </div>

            <div className='skills'>
                <h3>Front-End</h3>
                <hr />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Reactstrap</li>
                    <li>Vanilla JS</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>

                <h3>Back-End</h3>
                <hr />
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>PostgreSQL</li>
                    <li>JSON</li>
                </ul>

                <h3>Technologies & Extras</h3>
                <hr/>
                <ul>
                    <li>Git/GitHub</li>
                    <li>RESTful APIs</li>
                    <li>SQLite</li>
                    <li>Postman</li>
                    <li>Insomnia</li>
                    <li>GSAP</li>
                    <li>Jest</li>
                    <li>Cypress</li>
                </ul>


            </div>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    width: 100%;
    height: 92vh;
    padding: 2%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .skillSubTitle {
        font-size: 2.2rem;
        font-style: italic;
        color: #6666FF;
    }

    .skills {
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h3{
            font-size: 2rem;
            font-weight: 500;
            color: #999999;
        }

        hr {
            width: 45%;
            margin: 0 auto;
        }

        ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 25%;
            margin: 0 auto;
            text-align: center;

            li {
                font-size: 1.8rem;
                margin: 2%;
            }
        }
    }
`