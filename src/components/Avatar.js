import React from 'react';
import styled from 'styled-components';

const AvatarImg = styled.img`
  margin-right: 10px;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
  border-radius: 50%;
`;

function Avatar({img, size}) {
  return (
    <AvatarImg size={size} src={img} />
  );
}

Avatar.defaultProps = {
  size: 30
}

export default Avatar;