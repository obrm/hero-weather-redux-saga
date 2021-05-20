import styled from 'styled-components'

const darkAndLight = (props) => (props.theme === true ? '#6e6e6e' : '#fff')
const lightAndDark = (props) => (props.theme === true ? '#fff' : '#6e6e6e')

export default styled.input`
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
