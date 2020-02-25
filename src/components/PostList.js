import React, { Component } from 'react';
import styled from 'styled-components';
import Post from './Post';
import perfil from '../assets/perfil'
const PostListContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #4E4E4E;
  width: 500px;
  margin: 10px 0;
  padding: 20px;
`;

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: perfil
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render () {
    return (
      <PostListContainer>
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </PostListContainer>
    );
  }
}

export default PostList;