import React from 'react';
import styled from 'styled-components';

import Label from '../components/Label';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Contact = () => (
  <div>
    <Label>
      <h2>Contact</h2>
      <span>Got a project you want a hand on? Get in touch with me</span>
    </Label>
    <div>
      <span>
        Feel free to email me at{' '}
        <a href="mailto:mack@mackmmiller.com">mack@mackmmiller.com</a>, or fill
        out the following form
      </span>
      <Form action="">
        <input type="text" />
        <input type="text" />
        <textarea type="text" />
      </Form>
    </div>
  </div>
)

export default Contact
