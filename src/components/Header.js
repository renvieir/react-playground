import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header `
  height: 50px;
  background: #4A90E2;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  font-weight: 600;
`;

const LogoText = styled.p `
  font-size: 30px;
  text-transform: lowercase;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const AvatarImg = styled.img`
  margin-left: 20px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

function Header({img}) {
  return (
    <StyledHeader>
      <LogoText >Facebook</LogoText>
      <AvatarContainer>
        <p>Meu Perfil</p>
        <AvatarImg src={img} />
      </AvatarContainer>
    </StyledHeader>
  );
}

export default Header;