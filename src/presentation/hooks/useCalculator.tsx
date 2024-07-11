import { useEffect, useRef, useState } from "react"

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '×',
  divide = '/',
}

export const useCalculator = () => {

  const [formula, setFormula] = useState('')

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const lastOperation = useRef<Operator>()

  useEffect(() => {

    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0)
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
    } else {
      setFormula(number)
    }

  }, [number])

  useEffect(() => {
    const subResult = calculateSubResult()
    setPrevNumber(`${subResult ? subResult : ''}`)
  }, [formula])


  //Limpiar la pantalla
  const clean = () => {

    setNumber('0')
    setPrevNumber('0')
    lastOperation.current = undefined
    setFormula('')

  }

  //Borrar el último número
  const deleteOperation = () => {

    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setNumber('0')
    }

    setNumber(number.slice(0, -1))

  }

  //cambiar singo
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''))
    }

    setNumber('-' + number)
  }

  const buildNumber = (numberString: string) => {

    if (number.includes('.') && numberString === '.') return

    if (number.startsWith('0') || number.startsWith('-0')) {

      //Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString)
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString)
      }

      //Evaluar si es diferente de cero y no tiene punto, y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString)

      }

      //Evitar el 0000.0
      if (numberString === '0' && !number.includes('.')) {
        return
      }

      return setNumber(number + numberString)

    }

    setNumber(number + numberString)

  }

  const setLastNumber = () => {
    calculateResult();
    
    if ( number.endsWith( '.' ) ) {
      setPrevNumber( number.slice( 0, -1 ) );
    } else {
      setPrevNumber( number );
    }

    setNumber( '0' );
  };

  const divideOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.divide
  }

  const multiplyOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.multiply
  }

  const subtractOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.subtract
  }

  const addOperation = () => {
    setLastNumber()
    lastOperation.current = Operator.add
  }

  const calculateResult = () => {

    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPrevNumber('0')
  };

  const calculateSubResult = () => {
    const [f1, op, f2] = formula.split(' ')

    const num1 = Number(f1)
    const num2 = Number(f2)

    if (isNaN(num1) || isNaN(num2)) return


    switch (op) {
      case Operator.add:
        return `${num1 + num2}`
      case Operator.subtract:
        return `${num1 - num2}`
      case Operator.multiply:
        return `${num1 * num2}`
      case Operator.divide:
        return `${num1 / num2}`
      default:
        throw new Error('Operación no soportada')
    }
  }

  return {
    //Propiertis
    number,
    prevNumber,
    formula,

    //Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
  }
}
