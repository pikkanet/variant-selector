import React from 'react'
import styles from './Button.style'

export const Button = ({ children, isDisable, isCheck, onClick, id }) => {

  let style
  if (isDisable) {
    style = styles.disable
  } else if (isCheck) {
    style = styles.checked
  } else {
    style = styles.normal
  }


  return (
    <button style={styles.normal} value={id} onClick={onClick}>{children}</button>
  )
}
