import styled from 'styled-components';
import Project from './Project';

import tech from '../assets/use-my-tech.png';
import pokedex from '../assets/pokedex.png';

export default function Projects(){

    return (
        <StyledProjects>
            <span id='projects'></span>
            <h2>Projects</h2>
            { projectsData.map(project => {
                return <Project data={project} />
            }) }
            {/* <button>See More</button> */}
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    width: 100%;
    padding: 2%;
    background: rgb(81,173,207);
    background: linear-gradient(43deg, rgba(81,173,207,1) 5%, rgba(12,42,116,1) 89%);

    h2 {
        color: white;
    }

    /* button {
        margin: 0 40%;
        padding: 1% 3%;
        font-size: 2.8rem;
        border: none;
        border-radius: 2px;
        background-color: #28A7F0;
        color: #ffffff;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #6666FF;
            cursor: pointer;
        } */
      }
`

const projectsData = [
    {
        title: 'Rent a Tech',
        details: 'As the senior front-end developer on the team, I was in charge of ensuring that style was implemented consistently across the page, as well as responsible for the implementation of Redux to handle both state and user interactions throughout the application.',
        image: tech,
        github: 'https://github.com/TT-33-Use-My-Tech-Stuff',
        web: 'https://rent-a-tech.herokuapp.com/'
    },
    {
        title: 'React/Redux Pokedex',
        details: `An app designed to allow a user to see every character from within the chosen generation of monsters from the franchise. This was built in the journey to expand my skills with React\'s implementation of Redux. There were a few hurdles to overcome in regards to managing so much data per generation, and I found Redux to be the perfect fit!`,
        image: pokedex,
        github: 'https://github.com/paulstgermain/react-redux-pokedex',
        web: 'https://react-redux-pokedex-eight.vercel.app/'
    },
]