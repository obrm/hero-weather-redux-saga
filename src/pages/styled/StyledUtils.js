import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
  display: inline-block;
  border: none;
  background: #b3b3b3;
  color: #000;
  margin-top: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease-in;

  &:hover {
    border: solid 1px #fff;
    background: #222222;
    color: #b3b3b3;
    text-decoration: none;
  }
`
