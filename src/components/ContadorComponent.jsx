import React from 'react'
import useCounter from '../hooks/useCounter'

const ContadorComponent = () => {
    const valorInicial = 0
    const {contador, incrementar, decrementar, resetear} = useCounter(valorInicial)

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button className='btn btn-warning mx-2' onClick={() => decrementar(1, false)}>-1</button>
      <button className='btn btn-danger mx-2' onClick={() => resetear(valorInicial)}>Reset</button>
      <button className='btn btn-primary mx-2' onClick={() => incrementar(1)}>+1</button>
    </>
  )
}

export default ContadorComponent
