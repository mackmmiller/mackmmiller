import React from 'react'
import styled from 'styled-components'

import Label from '../components/Label'
import Form from '../components/Contact/Form'

const Content = styled.div`
  display: flex;
  > div {
    width: 50%;
    padding: 1rem;
  }
`

const Mail = styled.a`
  font-weight: bold;
  color: #222222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Contact = () => (
  <div>
    <Label>
      <h2>Contact</h2>
      <span>Got a project you want a hand on?</span>
    </Label>
    <Content>
      <div>
        <p>
          If you're interested in working together, or simply want to say hello,
          email me at:{' '}
          <Mail href="mailto:mack@mackmmiller.com">mack@mackmmiller.com</Mail>,
          or fill out the following form.
        </p>
        <p>
          Currently, I'm looking for <strong>full-time developer roles</strong>{' '}
          on the frontend, backend, or even fullstack. I'd love to stay in the
          Chicago area, but I'm willing to relocate for the right role.
        </p>
        <p>
          Have something that doesn't match above? That's okay! Feel free to
          reach out to me anyway. I'm always interested in learning about new
          unique opportunities.
        </p>
      </div>
      <Form />
    </Content>
  </div>
)

export default Contact
