import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LargeHeading = styled.h1`
  font-size: 6rem;
  color: #fff;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    font-size: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    font-size: 3.5rem;
  }
`

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
