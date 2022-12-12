import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonCalc from '../components/ButtonCalc';
import useCalculadora from '../hooks/useCalculadora';

const Calculadora = () => {
  const {
    calcular,
    clear,
    armarNumero,
    positivoNegativo,
    buttonDelete,
    dividir,
    multiplicar,
    restar,
    sumar,
    lastNumber,
    numero,
  } = useCalculadora();
  return (
    <View style={styles.container}>
      {lastNumber !== '0' && (
        <Text style={styles.preResultado}>{lastNumber}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.row}>
        <ButtonCalc
          text="C"
          variantColor="#9B9B9B"
          variantText="black"
          action={clear}
        />
        <ButtonCalc
          text="+/-"
          variantColor="#9B9B9B"
          variantText="black"
          action={positivoNegativo}
        />
        <ButtonCalc
          text="Del"
          variantColor="#9B9B9B"
          variantText="black"
          action={buttonDelete}
        />
        <ButtonCalc text="/" variantColor="#FF9427" action={dividir} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={armarNumero} />
        <ButtonCalc text="8" action={armarNumero} />
        <ButtonCalc text="9" action={armarNumero} />
        <ButtonCalc text="X" variantColor="#FF9427" action={multiplicar} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={armarNumero} />
        <ButtonCalc text="5" action={armarNumero} />
        <ButtonCalc text="6" action={armarNumero} />
        <ButtonCalc text="-" variantColor="#FF9427" action={restar} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={armarNumero} />
        <ButtonCalc text="2" action={armarNumero} />
        <ButtonCalc text="3" action={armarNumero} />
        <ButtonCalc text="+" variantColor="#FF9427" action={sumar} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" action={armarNumero} flatButton />
        <ButtonCalc text="." action={armarNumero} />
        <ButtonCalc text="=" variantColor="#FF9427" action={calcular} />
      </View>
    </View>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  preResultado: {
    fontSize: 25,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'right',
  },
  resultado: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
