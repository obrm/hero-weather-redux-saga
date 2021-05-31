import React, { memo, useState } from 'react'
import Lottie from 'react-lottie-player'
import parseUnit from 'parse-unit'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import animationData from './animationData.json'
import { darkModeToggle } from '../redux/theme/themeActions'
import { NightModeButton, NightModeDiv } from './styles/components.styles'

const NightModeToggle = ({ size, checked, onChange, speed, className }) => {
  const [sizeValue, sizeUnit] = parseUnit(size)
  const [isReadyToAnimate, setReadyToAnimate] = useState(false)

  const segmentsToPlay = checked ? [2, 50] : [51, 96]
  const segmentToGoTo = checked ? 51 : 2

  const dispatch = useDispatch()

  const onClickHandler = () => {
    setReadyToAnimate(true)
    onChange(!checked)
    dispatch(darkModeToggle())
  }

  return (
    <NightModeButton
      onClick={onClickHandler}
      aria-hidden='true'
      className={className}
      sizeValue={sizeValue}
      sizeUnit={sizeUnit}
    >
      <NightModeDiv sizeValue={sizeValue} sizeUnit={sizeUnit}>
        <Lottie
          key='$preventGlitches'
          play={isReadyToAnimate}
          speed={speed}
          animationData={animationData}
          loop={false}
          segments={segmentsToPlay}
          goTo={segmentToGoTo}
        />
      </NightModeDiv>
    </NightModeButton>
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
