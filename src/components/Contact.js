import styled from 'styled-components';

import ContactForm from './ContactForm';

export default function Contact(){

    return(
        <StyledContact>
            <span id='contact'></span>
            <h2>Get in Touch</h2>
            <ContactForm />
        </StyledContact>
    )
}

const StyledContact = styled.section`
    width: 100%;
    height: 100vh;
    padding: 2%;

    h2 {
        color: #28A7F0;
        margin-bottom: 4%;
    }

`