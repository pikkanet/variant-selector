import React, { useState } from 'react'
import variants from './mocks/variants'
import { Button } from './components/button/Button'

const App = () => {

  const [result, setResult] = useState()

  const options = variants.options
  const skus = variants.skus

  console.log('options', options)
  console.log('skus', skus)

  const renderColors = () => {
    const colors = options[0].values.map((color) => {
      return <Button id={color.id} onClick={onClickColor}>{color.value}</Button>
    })
    return (
      <>
        <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}>{options[0].title}</div>
        {colors}
      </>
    )
  }
  const onClickColor = (e) => {
    console.log('e', e.currentTarget.value)
  }

  const renderSizes = () => {
    const sizes = options[1].values.map((size) => {
      return <Button id={size.id} onClick={onClickSize}>{size.value}</Button>
    })
    return (
      <>
        <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}>{options[1].title}</div>
        {sizes}
      </>
    )
  }
  const onClickSize = (e) => {
    console.log('e', e.currentTarget.value)
  }

  const renderSleeves = () => {
    const sleeves = options[2].values.map((sleeve) => {
      return <Button id={sleeve.id} onClick={onClickSleeve}>{sleeve.value}</Button>
    })
    return (
      <>
        <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}>{options[2].title}</div>
        {sleeves}
      </>
    )
  }
  const onClickSleeve = (e) => {
    console.log('e', e.currentTarget.value)
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
    </div>
  )
}

export default App
