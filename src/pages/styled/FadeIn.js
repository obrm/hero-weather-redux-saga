import { keyFrames } from 'styled-components'

export const FadeIn = keyFrames`
0%{
  opacity: 0;
}

100% {
  opacity: 1;
}
`

/*
animation: 2s ${FadeIn} ease-in;
*/
