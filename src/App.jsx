import React, { useState, useEffect } from 'react'
import variants from './mocks/variants'
import { Button } from './components/button/Button'

const App = () => {

  const [filterWithColor, setFilterWithColor] = useState()
  const [filterWithSize, setFilterWithSize] = useState()
  const [result, setResult] = useState()
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [selectedSleeve, setSelectedSleeve] = useState()

  const options = variants.options
  const skus = variants.skus

  // console.log('options', options)
  // console.log('skus', skus)

  useEffect(() => {
    // console.log('filterWithColor', filterWithColor)
    // console.log('filterWithSize', filterWithSize)
    // console.log('result', result)
  }, [filterWithColor, filterWithSize, result])

  const renderColors = () => {
    const colors = options[0].values.map((color) => {
      return <Button id={color.id} onClick={onClickColor} isChecked={selectedColor == color.id}>{color.value}</Button>
    })
    return (
      <>
        <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}>{options[0].title}</div>
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
        <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}>{options[1].title}</div>
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
        <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}>{options[2].title}</div>
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
    <div style={{ paddingTop: 24, paddingLeft: 24, width: 387 }}>
      <div style={{ fontSize: 36, fontWeight: 'bold' }}>MAQE Shirt</div>
      <div
        style={{
          height: 1,
          backgroundColor: '#d3d3d3',
          width: '100%',
          marginTop: 8
        }}
      ></div>

      {renderColors()}

      {renderSizes()}

      {renderSleeves()}

      {result && result[0] && <pre>
        {JSON.stringify(result[0], null, 2)}
      </pre>}
    </div>
  )
}

export default App
