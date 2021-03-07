import React from 'react'
import styles from './Button.style'

export const Button = ({ children, isDisable = false, isChecked, onClick, id }) => {

  let style
  if (isDisable) {
    style = styles.disable
  } else if (isChecked) {
    style = styles.checked
  } else {
    style = styles.normal
  }

  return (
    <button style={style} value={id} disabled={isDisable} onClick={onClick}>{children}</button>
  )
}
