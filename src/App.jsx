import React, { useState } from 'react'
import variants from './mocks/variants'
import { Button } from './components/button/Button'
import styles from './App.style'

const App = () => {
  const [filterWithColor, setFilterWithColor] = useState()
  const [filterWithSize, setFilterWithSize] = useState()
  const [result, setResult] = useState()
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [selectedSleeve, setSelectedSleeve] = useState()

  const options = variants.options
  const skus = variants.skus

  const renderColors = () => {
    const colors = options[0].values.map((color) => {
      return <Button id={color.id} onClick={onClickColor} isChecked={selectedColor == color.id}>{color.value}</Button>
    })
    return (
      <>
        <div style={styles.varuantTitle}>{options[0].title}</div>
        {colors}
      </>
    )
  }
  const onClickColor = (e) => {
    const colorResult = skus.filter((skus) => {
      return skus.variants.color == e.currentTarget.value
    })
    setFilterWithColor(colorResult)
    setSelectedColor(e.currentTarget.value)
    setFilterWithSize()
    setSelectedSize()
    setSelectedSleeve()
    setResult()
  }

  const renderSizes = () => {
    const sizes = options[1].values.map((size) => {
      let haveSize = filterWithColor && filterWithColor.find((item) => {
        return item.variants.size == size.id
      })
      return <Button id={size.id} onClick={onClickSize} isDisable={!selectedColor || !haveSize} isChecked={selectedSize == size.id} >{size.value}</Button>
    })
    return (
      <>
        <div style={styles.varuantTitle}>{options[1].title}</div>
        {sizes}
      </>
    )
  }
  const onClickSize = (e) => {
    const sizeResult = filterWithColor && filterWithColor.filter((size) => {
      return size.variants.size == e.currentTarget.value
    })
    setFilterWithSize(sizeResult)
    setSelectedSize(e.currentTarget.value)
    setSelectedSleeve()
    setResult()
  }

  const renderSleeves = () => {
    const sleeves = options[2].values.map((sleeve) => {
      let haveSleeve = filterWithSize && filterWithSize.find((item) => {
        return item.variants.sleeve == sleeve.id
      })
      return <Button id={sleeve.id} onClick={onClickSleeve} isDisable={!selectedSize || !haveSleeve} isChecked={selectedSleeve == sleeve.id}>{sleeve.value}</Button>
    })
    return (
      <>
        <div style={styles.varuantTitle}>{options[2].title}</div>
        {sleeves}
      </>
    )
  }
  const onClickSleeve = (e) => {
    const sleeveResult = filterWithSize && filterWithSize.filter((sleeve) => {
      return sleeve.variants.sleeve == e.currentTarget.value
    })
    setResult(sleeveResult)
    setSelectedSleeve(e.currentTarget.value)
  }

  return (
    <div style={styles.container}>
      <div style={styles.title}>MAQE Shirt</div>
      <div
        style={styles.divider}
      ></div>

      {renderColors()}

      {renderSizes()}

      {renderSleeves()}

      {result &&
        <>
          <div style={styles.varuantTitle}>
            Selecting SKU
        </div>
          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        </>
      }

    </div>
  )
}

export default App
