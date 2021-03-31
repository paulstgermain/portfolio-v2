import styled from 'styled-components';
import { GithubLogo } from 'phosphor-react';

export default function Contact(){

    return(
        <StyledContact>
            <h2>Get in Touch</h2>
            <GithubLogo size={44} />
        </StyledContact>
    )
}

const StyledContact = styled.div`
    width: 100%;
    height: 92vh;

`