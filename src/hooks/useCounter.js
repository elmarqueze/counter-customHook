import { useState } from "react"

export const useCounter = (initValue = 0) => {
  
  const [counter, setCounter] = useState(initValue)
  
  const deleteCounter = (value = 1, negative) => {
    if(!negative && counter < 1) return
    setCounter(counter - value)
    // if(!negative && counter - value < 0) {
    //   setCounter(0)
    //   return
    // }
    // setCounter(counter - value)
  }

  const addCounter = (value = 1) => {
    setCounter(counter + value)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return {
    counter,
    deleteCounter,
    resetCounter,
    addCounter
  }
}
