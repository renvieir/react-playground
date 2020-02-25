import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const CommentContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #4E4E4E;
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  margin: 0;
`;

const CommentText = styled.p`
  background: #f2f2f2;
  color: #636363;
  font-size: 14px;
  padding: 20px 10px;
  border-radius: 16px;
`;

const CommentAuthor = styled.strong`
  margin-right: 10px;
`;

function Comment({img}) {
  return (
    <CommentContainer>
      <Avatar img={img} />
      <CommentText><CommentAuthor>Renato Pacheco</CommentAuthor>Pessoal alguem sabe se a rocketseat tá contratando?</CommentText>
    </CommentContainer>
  );
}

export default Comment;