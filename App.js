import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [conversionRate, setConversionRate] = useState(1.12); 

  const convertCurrency = () => {
    if (!amount) {
      return;
    }
    const result = parseFloat(amount) * conversionRate;
    setConvertedAmount(result.toFixed(2).toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount in EUR:</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
        />
      </View>
      <Button title="Convert to USD" onPress={convertCurrency} />

      {convertedAmount && (
        <Text style={styles.result}>
          {amount} EUR is equal to {convertedAmount} USD
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default CurrencyConverter;
