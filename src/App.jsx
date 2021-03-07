import React from 'react'
import variants from './mocks/variants'
import { Button } from './components/button/Button'

const App = () => {

  console.log('variants', variants)
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

      <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}> Choose color:</div>
      <Button style={{ border: '2px solid #d3d3d3', padding: 16, borderRadius: 12, backgroundColor: '#fff' }}>Foam</Button>

      <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}> Choose size:</div>
      <Button style={{ border: '2px solid #d3d3d3', padding: 16, borderRadius: 12, backgroundColor: '#fff' }}>Foam</Button>

      <div style={{ fontSize: 22, marginTop: 24, marginBottom: 8 }}> Choose sleeve style:</div>
      <Button style={{ border: '2px solid #d3d3d3', padding: 16, borderRadius: 12, backgroundColor: '#fff' }}>Foam</Button>
    </div>
  )
}

export default App
