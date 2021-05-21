const mediaQueries = {
  'xlg-width': '(max-width: 1366px)',
  'lg-width': '(max-width: 1000px)',
  'md-width': '(max-width: 800px)',
  'xmd-width': '(max-width: 580px)',
  'sm-width': '(max-width: 425px)',
  'xsm-width': '(max-width: 375px)',
  'xxsm-width': '(max-width: 320px)',
  'md-height': '(max-height: 414px)',
  'sm-height': '(max-height: 375px)',
  'xsm-height': '(max-height: 320px)',
}

const Theme = {
  lightTheme: {
    text: '#222',
    background: '#E9EBEE',
    mediaQueries,
  },

  darkTheme: {
    text: '#FAFAFA',
    background: '#222',
    mediaQueries,
  },
}

export default Theme

/*
@media ${({theme}) => theme.mediaQueries['width-below-770']}
*/
