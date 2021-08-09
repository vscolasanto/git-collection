import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

export const Main = styled.main`
  max-width: 750px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 80px;
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
`

export const Form = styled.form<FormProps>`
  margin-top: 5rem;
  width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
    color: #3a3a3a;
    border: 2px solid #fff;
    font-size: 1.5rem;
    outline: none;

    &::placeholder {
      color: #a8a8a0;
    }

    ${props =>
      props.hasError &&
      css`
        border-color: #d83b3d;
      `}
  }

  button {
    padding: 1rem 2rem;
    background-color: #04b361;
    border-radius: 0 0.5rem 0.5rem 0;
    border: 0;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 100;
    transition: background-color ease-in 0.2s;

    &:disabled {
      background-color: #bbb;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${shade(0.2, '#04b361')};
    }
  }
`

export const Repositories = styled.section`
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
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`

export const Error = styled.div`
  display: flex;
  align-items: center;
  color: #d83b3d;
  margin-top: 0.5rem;
`
