import styled from 'styled-components';
import Project from './Project';

export default function Projects(){

    return (
        <StyledProjects>
            <h2>Projects</h2>
            <Project />
            <Project />
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    width: 100%;
    padding: 2%;
    background: rgb(81,173,207);
    background: linear-gradient(43deg, rgba(81,173,207,1) 5%, rgba(12,42,116,1) 89%);

    h2 {
        color: white;
    }
`