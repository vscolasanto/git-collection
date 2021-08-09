import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiMessageSquare
} from 'react-icons/fi'

import { api } from '../../services/api'

import { Main, Header, Title, RepositoryInfo, Issues } from './styles'
import { GithubRepository } from '../Dashboard'

interface RepositoryParams {
  repository: string
}

interface GithubRepositoryIssues extends GithubRepository {
  forks_count: number
  open_issues_count: number
  stargazers_count: number
}

interface GithubIssueDetail {
  id: number
  title: string
  comments: number
  html_url: string
  user: {
    login: string
    avatar_url: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [
    repository,
    setRepository
  ] = React.useState<GithubRepositoryIssues | null>()
  const [issues, setIssues] = React.useState<GithubIssueDetail[]>([])

  React.useEffect(() => {
    api
      .get(`/repos/${params.repository}`)
      .then(response => setRepository(response.data))

    api
      .get(`/repos/${params.repository}/issues`)
      .then(response => setIssues(response.data))
  }, [params.repository])

  return (
    <Main>
      <Header>
        <Title>Repositório</Title>
        <Link to="/">
          <FiChevronsLeft size={'2rem'} />
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count.toLocaleString()}</strong>
              <span>Start</span>
            </li>
            <li>
              <strong>{repository.forks_count.toLocaleString()}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count.toLocaleString()}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>{issue.title}</strong>
              <p>
                <span>{issue.user.login}</span>
                <span>
                  {issue.comments} <FiMessageSquare size={'1rem'} />
                </span>
              </p>
            </div>
            <FiChevronsRight size={'2rem'} />
          </a>
        ))}
      </Issues>
    </Main>
  )
}

export default Repository
