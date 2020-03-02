import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';

import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    error: false,
    loading: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({
      error: false,
      newRepo: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    const { newRepo, repositories } = this.state;

    try {
      const repoExists = repositories.filter(repo => repo.name === newRepo);

      if (repoExists) {
        throw new Error('Repository alread exists');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
        description: response.data.description,
        owner: {
          login: response.data.owner.login,
          avatar_url: response.data.owner.avatar_url,
        },
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        error: false,
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });

      console.warn(err);
    }
  };

  render() {
    const { newRepo, error, loading, repositories } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositorio"
            onChange={this.handleInputChange}
            value={newRepo}
          />
          <SubmitButton loading={loading}>
            {loading ? <FaSpinner /> : <FaPlus color="#fff" size={14} />}
          </SubmitButton>
        </Form>

        <List>
          {repositories &&
            repositories.map(repo => (
              <li key={repo.name}>
                <span>{repo.name}</span>
                <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                  Detalhes
                </Link>
              </li>
            ))}
        </List>
      </Container>
    );
  }
}

export default Main;
