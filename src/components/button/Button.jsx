import React from 'react'
import styles from './Button.style'

export const Button = ({ children, isDisable, isCheck }) => {

  let style
  if (isDisable) {
    style = styles.disable
  } else if (isCheck) {
    style = styles.checked
  } else {
    style = styles.normal
  }

  return (
    <button style={styles.normal}>{children}</button>
  )
}
