import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    label {
      display: flex;
      flex-direction: column;
      padding: 2px;
    }
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
  button {
    width: 64px;
    margin: 0.5rem auto;
  }
  @media (max-width: 900px) {
    form {
      > div {
        flex-direction: column;
      }
    }
  }
`

const Form = () => (
  <Wrapper>
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">
          Name
          <input name="name" id="name" type="text" autoComplete="name"/>
        </label>
        <label htmlFor="email">
          Email
          <input name="email" id="email" type="email" autoComplete="email"/>
        </label>
      </div>
      <label htmlFor="subject">
        Subject
        <input name="subject" id="subject" type="text" />
      </label>
      <label htmlFor="message">
        Message
        <textarea name="message" id="message" type="text" rows="5" />
      </label>
      <button type="submit">Send</button>
    </form>
  </Wrapper>
)

export default Form
