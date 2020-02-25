import React from 'react';
import perfil from './assets/perfil.jpg';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <Header img={perfil} />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;