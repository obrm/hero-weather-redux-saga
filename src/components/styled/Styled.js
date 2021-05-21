import { Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const darkAndLight = (props) => (props.theme === true ? '#6e6e6e' : '#fff')
const lightAndDark = (props) => (props.theme === true ? '#fff' : '#6e6e6e')

export const StyledSearchBoxInput = styled.input`
  background-color: ${darkAndLight};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${lightAndDark};
  }
  :-ms-input-placeholder {
    color: ${lightAndDark};
  }

  &:focus {
    background-color: ${darkAndLight};
    color: ${lightAndDark};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${darkAndLight};
    }
    :-ms-input-placeholder {
      color: ${darkAndLight};
    }
  }
`
export const StyledSearchBoxDiv = styled.div`
  position: relative;
  display: inline-block;
`
export const StyledSearchResultsDiv = styled.div`
  position: absolute;
`
export const StyledSearchDiv = styled.div`
  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    width: 80%;
    margin-right: 0.5rem;
    margin-left: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    width: 70%;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    width: 80%;
  }
`

export const StyledFavoriteText = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
  margin-left: 0.5rem;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    display: none;
  }
`
export const StyledFavoriteItemCard = styled(Card)`
  width: 15rem;
  height: 160px;
  cursor: pointer;
`
export const StyledHeading3 = styled.h3`
  font-size: 1.5rem;
`

export const StyledFavoriteCardText = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  color: #fff;

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    font-size: 1.5rem !important;
  }
`

export const StyledWeatherForecast = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  width: 80%;
  z-index: 1;
  position: absolute;
  top: 520px;
  left: 35px;

  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    top: 460px;
    left: 35px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    grid-template-columns: 1fr;
    top: 500px;
    left: 75px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    top: 450px;
    left: 25px;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    top: 340px;
    left: 55px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-width']} {
    left: 30px;
    top: 330px;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    top: 300px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    top: 420px;
    left: -50px;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-height']} {
    left: 35px;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    grid-template-columns: 1fr;
    top: 450px;
    left: 95px;
  }
`

export const StyledNightModeButton = styled.button`
  cursor: pointer;
  overflow: hidden;
  width: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue}${props.sizeUnit}`
      : `${props.sizeValue}px`};
  height: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * 0.47}${props.sizeUnit}`
      : `${props.sizeValue * 0.47}px`};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
`

export const StyledNightModeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * -0.575}${props.sizeUnit}`
      : `${props.sizeValue * -0.575}px`};
  margin-left: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * -0.32}${props.sizeUnit}`
      : `${props.sizeValue * -0.32}px`};
  width: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * 1.65}${props.sizeUnit}`
      : `${props.sizeValue * 1.65}px`};
  height: ${(props) =>
    props.sizeUnit
      ? `${props.sizeValue * 1.65}${props.sizeUnit}`
      : `${props.sizeValue * 1.65}px`};
`
export const StyledSuggestions = styled(Col)`
  z-index: 99;
  top: 100%;
  left: 16px;
  right: 0;
  width: 196px;
  padding: 10px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-right: 1px solid #333;
  border-left: 1px solid #333;
  border-bottom: 1px solid #333;

  &:hover {
    background-color: #e9e9e9;
  }
`

export const StyledCardForecast = styled(Card)`
  width: 10rem;

  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    width: 8.8rem;
    height: 90px;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    width: 30rem;
    height: 200px;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    height: 250px;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-width']} {
    margin-left: 0.5rem;
    width: 18rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xxsm-width']} {
    width: 15rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    width: 7.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xsm-height']} {
    margin-left: 0.5rem;
    width: 22rem;
    height: 9rem;
  }
`
export const StyledCardIcon = styled.img`
  @media ${({ theme }) => theme.mediaQueries['lg-width']} {
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    width: 30%;
  }
`

export const StyledCardText = styled.p`
  margin-bottom: 0;
  color: #fff;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    font-size: 1.5rem;
  }
`
export const StyledCardTitle = styled.h5`
  margin-bottom: 0;
  color: #fff;

  @media ${({ theme }) => theme.mediaQueries['md-width']} {
    font-size: 2rem;
    margin-bottom: 0.2rem;
    margin-top: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries['xmd-width']} {
    margin-top: 2.3rem;
  }

  @media ${({ theme }) => theme.mediaQueries['md-height']} {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries['sm-height']} {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }
`
