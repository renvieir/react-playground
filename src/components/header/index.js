import React from 'react';
// import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Logo } from './styles';
import logo from '../../assets/images/cat.svg';

export default function header() {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Purrrfect Match" />
        <h2>Purrrfect Match</h2>
      </Logo>

      <div>
        <input type="text" placeholder="Search cats" />

        <button>
          <MdAddCircleOutline size={20} color="#5452F6" />
          add new cat
        </button>
      </div>
    </Container>
  );
}
