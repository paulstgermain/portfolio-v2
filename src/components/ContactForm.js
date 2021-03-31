import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styled from 'styled-components';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqpkroj");
  if (state.succeeded) {
      return <p style={{fontSize: '3.2rem', textAlign: 'center', marginTop: '180px'}}>Thanks for reaching out - I'll be in touch!</p>;
  }
  return (
      <StyledForm onSubmit={handleSubmit}>
      {/* <label htmlFor="name">
          Name
      </label> */}
      <input
      id="name"
      type="text"
      name="name"
      placeholder="Name" />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      {/* <label htmlFor="email">
        Email Address
      </label> */}
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email Address'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      {/* <label htmlFor="phone">
          Phone Number
      </label> */}
      <input
      id="phone"
      type="text"
      name="phone"
      placeholder='Phone Number' 
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      {/* <label htmlFor='message'>
          Message
      </label> */}
      <textarea
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send Message
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
    font-size: 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .success {
        font-size: 3.2rem!important;
    }

    label {
        margin-bottom: 10px;
    }

    input, textarea {
        width: 400px;
        margin-bottom: 25px;
        border: none;
        border-radius: 5px;
        background-color: lightgrey;
        padding: 5px;
    }

    input {
        height: 30px;
    }

    textarea {
        height: 150px;
    }

    button {
        padding: 1% 3%;
        border: none;
        border-radius: 2px;
        background-color: #28A7F0;
        color: #ffffff;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #6666FF;
            cursor: pointer;
        }

`