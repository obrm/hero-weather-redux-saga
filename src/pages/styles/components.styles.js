import styled from 'styled-components'

export const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media ${({ theme }) => theme.mediaQueries['xlg-width']} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    grid-template-columns: 1fr;
    margin-left: 4.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-width']} {
    margin-left: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    margin-left: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    margin-left: 0.5rem;
  }
`
