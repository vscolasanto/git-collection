import styled from 'styled-components'

export const Main = styled.main`
  max-width: 750px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  color: #3a3a3a;
  line-height: 56px;
  font-weight: 100;
  text-transform: uppercase;
`

export const RepositoryInfo = styled.section`
  margin-top: 5rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin: 0 1rem;
      flex: 1;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.5rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1rem;
        color: #737380;
        margin-top: 0.5rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 3rem;
    column-gap: 2rem;

    li {
      display: flex;
      flex: 1;
      flex-direction: column;
      border: 1px solid #aaa;
      border-radius: 0.5rem;
      padding: 1rem 0;
      text-align: center;

      strong {
        font-size: 2rem;
        font-weight: 700;
        color: #3d3d4d;
      }

      span {
        font-size: 1.5rem;
        margin-top: 0.5rem;
        color: #737380;
      }
    }
  }
`

export const Issues = styled.section`
  margin-top: 3rem;
  width: 100%;

  a {
    background-color: #fff;
    border-radius: 0.5rem;
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
    transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    }

    & + a {
      margin-top: 1rem;
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 1rem;
      flex: 1;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.5rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1rem;
        color: #a8a8b3;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;

        span {
          display: flex;
          align-items: center;

          svg {
            margin-left: 0.5rem;
          }
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`
