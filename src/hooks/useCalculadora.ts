import {useState, useRef} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [lastNumber, setLastNumber] = useState('0');

  const lastOperation = useRef<Operadores>();

  const clear = () => {
    setNumero('0');
    setLastNumber('0');
  };

  const armarNumero = (textNumber: string) => {
    if (numero.includes('.') && textNumber === '.') {
      return;
    } //no aceptar doble punto
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (textNumber === '.') {
        setNumero(numero + textNumber);
      } else if (textNumber === '0' && numero.includes('.')) {
        setNumero(numero + textNumber);
      } else if (textNumber !== '0' && !numero.includes('.')) {
        setNumero(textNumber);
      } else if (textNumber === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + textNumber);
      }
    } else {
      setNumero(numero + textNumber);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const buttonDelete = () => {
    let esNegativo = '';
    let numeroTemporal = numero;
    if (numero.includes('-')) {
      esNegativo = '-';
      numeroTemporal = numero.substring(1);
    }
    if (numeroTemporal.length > 1) {
      setNumero(esNegativo + numeroTemporal.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const changeLastNumber = () => {
    if (numero.endsWith('.')) {
      setLastNumber(numero.slice(0, -1));
    } else {
      setLastNumber(numero);
    }
    setNumero('0');
  };

  const dividir = () => {
    changeLastNumber();
    lastOperation.current = Operadores.dividir;
  };
  const multiplicar = () => {
    changeLastNumber();
    lastOperation.current = Operadores.multiplicar;
  };
  const restar = () => {
    changeLastNumber();
    lastOperation.current = Operadores.restar;
  };
  const sumar = () => {
    changeLastNumber();
    lastOperation.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(lastNumber);
    switch (lastOperation.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        num1 !== 0 && setNumero(`${num2 / num1}`);
        break;

      default:
        break;
    }
    setLastNumber('0');
  };
  return {
    calcular,
    clear,
    armarNumero,
    positivoNegativo,
    buttonDelete,
    dividir,
    multiplicar,
    restar,
    sumar,
    numero,
    lastNumber,
  };
};

export default useCalculadora;
