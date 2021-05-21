import styled from 'styled-components'

export const LargeHeading = styled.h1`
  font-size: 5rem;
  color: #e9ebee;
  font-weight: bold;
  -webkit-text-stroke: 1px black;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    font-size: 3.5rem;
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
