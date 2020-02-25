import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Comment from './Comment';

import perfil from '../assets/perfil.jpg';

const PostContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #4E4E4E;
  width: 500px;
  margin: 10px 0;
  padding: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AuthorTitle = styled.p`
  color: #646464;
  font-size: 12px;
  font-weight: 600;
`;

const PostDate = styled.small`
  color: #DADADA;
  font-size: 10px;
`;

const PostText = styled.p`
  color: #636363;
  font-size: 14px;
  padding: 20px 0;
`;

function Post({post}) {
  const { comments, author, date, content } = post;
  return (
    <PostContainer>
      <PostHeader>
          <Avatar size={40} img={author.avatar} />
          <div>
            <AuthorTitle>{author.date}</AuthorTitle>
            <PostDate>{date}</PostDate>
          </div>
      </PostHeader>
      <PostText>{content}</PostText>
      <hr></hr>
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </PostContainer>  
  );
}

Post.defaultProps = {
  posts: []
}

export default Post;