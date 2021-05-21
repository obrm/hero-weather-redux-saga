import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'

export const JumbotronStyled = styled(Jumbotron)`
  width: 870px;

  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    width: 770px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    width: 600px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    width: 500px;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    width: 350px;
    margin-bottom: 0;
    margin-left: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-width']} {
    margin-left: 0.5rem;
    width: 330px;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    margin-left: 0;
    width: 290px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    width: 680px;
    margin-left: -5.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    width: 510px;
    margin-bottom: 0;
    margin-left: 1rem;
  }
`
export const WeatherImage = styled.img`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
`

export const WeatherIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 30%;
  z-index: 1;
  position: absolute;
  top: 140px;
  left: 60px;

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    width: 50%;
    top: 120px;
    left: 35px;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    font-size: 80%;
    top: 100px;
    left: 15px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    top: 110px;
    left: -45px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    width: 50%;
    top: 120px;
    left: 35px;

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`

export const FavoriteButton = styled.div`
  z-index: 1;
  position: absolute;
  top: 140px;
  right: 40px;

  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    top: 150px !important;
    right: -35px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    top: 150px !important;
    left: 530px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    top: 120px !important;
    left: 430px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    top: 120px !important;
    left: 276px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    left: 240px !important;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-height']} {
    top: 110px;
    right: 40px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    top: 115px;
  }
`

export const WeatherText = styled.div`
  text-align: center;
  width: 80%;
  z-index: 1;
  position: absolute;
  top: 300px;
  left: 95px;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    top: 250px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    top: 230px !important;
    left: 55px;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    top: 200px !important;
    left: 45px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-width']} {
    top: 195px !important;
    left: 40px;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    top: 170px !important;
    left: 35px;
  }

  @media ${({ theme }) => theme.mediaQueries['height-below-375']} {
    top: 250px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    top: 240px;
    left: 65px;
  }
`

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
