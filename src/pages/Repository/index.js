import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaFilter } from 'react-icons/fa';

import Container from '../../components/Container';
import { Form, SubmitButton } from '../../components/Form';
import { Loading, Owner, IssuesList, Footer } from './styles';

import api from '../../services/api';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    filterText: '',
    repository: {},
    issues: [],
    loading: true,
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { repository, filterText } = this.state;
    const issues = await api.get(`/repos/${repository.name}/issues`, {
      params: {
        labels: filterText,
      },
    });

    this.setState({ issues: issues.data });
  };

  handleInputChange = e => {
    this.setState({ filterText: e.target.value });
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const repositories = localStorage.getItem('repositories');
    let repository = {};
    let issues;

    if (repositories) {
      console.log('got repo info from local storage');
      repository.data = JSON.parse(repositories).filter(
        repo => repo.name === repoName
      )[0];

      issues = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      });
    } else {
      [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}/`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);
    }

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading, filterText } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositorios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="filtrar por estado"
            onChange={this.handleInputChange}
            value={filterText}
          />
          <SubmitButton>
            <FaFilter color="#fff" size={14} />
          </SubmitButton>
        </Form>

        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>

        <Footer>
          <button disabled>anterior</button>
          <button>próximo</button>
        </Footer>
      </Container>
    );
  }
}

export default Repository;
