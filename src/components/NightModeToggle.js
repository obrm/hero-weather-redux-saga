import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie-player'
import parseUnit from 'parse-unit'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import animationData from './animationData.json'
import { darkModeToggle } from '../redux/darkMode/darkModeActions'

const Button = styled.button`
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
const Div = styled.div`
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

const NightModeToggle = ({ size, checked, onChange, speed, className }) => {
  const [sizeValue, sizeUnit] = parseUnit(size)
  const [isReadyToAnimate, setReadyToAnimate] = useState(false)

  const segmentsToPlay = checked ? [2, 50] : [51, 96]
  const segmentToGoTo = checked ? 51 : 2

  const dispatch = useDispatch()

  const onClickHandler = () => {
    setReadyToAnimate(true)
    onChange(!checked)
    dispatch(darkModeToggle(!checked))
  }

  return (
    <Button
      onClick={onClickHandler}
      aria-hidden='true'
      className={className}
      sizeValue={sizeValue}
      sizeUnit={sizeUnit}
    >
      <Div sizeValue={sizeValue} sizeUnit={sizeUnit}>
        <Lottie
          key='$preventGlitches'
          play={isReadyToAnimate}
          speed={speed}
          animationData={animationData}
          loop={false}
          segments={segmentsToPlay}
          goTo={segmentToGoTo}
        />
      </Div>
    </Button>
  )
}

NightModeToggle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  speed: PropTypes.number,
  className: PropTypes.string,
}

NightModeToggle.defaultProps = {
  size: 85,
  checked: false,
  onChange: (nextValue) => null,
  speed: 1.3,
  className: null,
}

const propsAreEqual = (prevProps, nextProps) =>
  prevProps.size === nextProps.size &&
  prevProps.checked === nextProps.checked &&
  prevProps.speed === nextProps.speed &&
  prevProps.className === nextProps.className

export default memo(NightModeToggle, propsAreEqual)
