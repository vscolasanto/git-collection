import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Title, Main, Form, Repositories, Error } from './styles'

export interface GithubRepository {
  id: number
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = React.useState('')
  const [inputError, setInputError] = React.useState('')
  const [repositories, setRepositories] = React.useState<GithubRepository[]>(
    () => {
      const storageRepositories = localStorage.getItem('@GC:repositories')
      return storageRepositories ? JSON.parse(storageRepositories) : []
    }
  )
  const formElement = React.useRef<HTMLFormElement | null>(null)

  React.useEffect(() => {
    localStorage.setItem('@GC:repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleAddRepository = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!newRepository.includes('/')) {
      return setInputError(
        `Para buscar é necessário passar o formato "usuário/repositório"`
      )
    }

    setInputError('')

    try {
      const response = await api.get<GithubRepository>(
        `/repos/${newRepository}`
      )
      const repository = response.data

      const repoAddedBefore = repositories.some(
        repo => repo.full_name === repository.full_name
      )

      if (repoAddedBefore) {
        setNewRepository('')
        return setInputError(
          `Repositório ${repository.full_name} já adicionado anteriormente`
        )
      }

      setRepositories([...repositories, repository])
      formElement.current?.reset()
      setNewRepository('')
    } catch (e) {
      if (e.message.includes(403)) {
        return setInputError(
          `O limite de requisições feitas ao GITHUB foi atingido!`
        )
      } else if (e.message.includes(404)) {
        return setInputError(
          `Repositório ${newRepository} não encontrado no GITHUB!`
        )
      }
    }
  }

  return (
    <>
      <Main>
        <Title>Catálogos de repositórios do Github</Title>
        <Form
          ref={formElement}
          hasError={Boolean(inputError)}
          onSubmit={handleAddRepository}
        >
          <input
            placeholder="username/repository_name"
            onChange={event => setNewRepository(event?.target.value)}
            value={newRepository}
          />
          <button type="submit" disabled={!newRepository}>
            Buscar
          </button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
        <Repositories>
          {repositories.map(repo => (
            <Link to={`/repositories/${repo.full_name}`} key={repo.id}>
              <img src={repo.owner.avatar_url} alt={repo.full_name} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronsRight size={'2rem'}></FiChevronsRight>
            </Link>
          ))}
        </Repositories>
      </Main>
    </>
  )
}

export default Dashboard
