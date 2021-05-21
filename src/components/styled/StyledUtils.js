import styled from 'styled-components'

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
