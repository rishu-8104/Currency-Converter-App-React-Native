# Currency Converter App

## Overview
This project is a simple currency converter application built using **React Native**. The app allows users to input an amount in Euros (EUR) and convert it to US Dollars (USD) using a predefined conversion rate.
![alt text](1.png)
---

## Features

### 1. Input Amount in EUR
- Users can input the amount in Euros using a numeric text input field.

### 2. Convert to USD
- The app uses a conversion rate of **1.12** to calculate the equivalent amount in USD.
- A "Convert to USD" button triggers the conversion.

### 3. Real-Time Results
- Displays the converted amount below the button once the conversion is complete.


---

## Code Explanation

### Functional Components and Hooks
- The app is built using React Native's **functional components** and the **useState** hook to manage state.

#### Key States:
1. **amount**: Stores the user-input amount in EUR.
2. **convertedAmount**: Stores the calculated amount in USD.
3. **conversionRate**: A predefined rate for EUR to USD conversion.

#### Conversion Logic:
The conversion is performed by multiplying the input amount by the conversion rate:
```javascript
const result = parseFloat(amount) * conversionRate;
```
The result is formatted to two decimal places using:
```javascript
result.toFixed(2).toString();
```

---

## User Interface

### Components Used
1. **View**: For layout and container grouping.
2. **Text**: For displaying static and dynamic text.
3. **TextInput**: For user input of the EUR amount.
4. **Button**: To trigger the conversion functionality.

### Styling
The app uses React Native's **StyleSheet** for consistent styling.

#### Key Styles:
- **Container**: Centers the layout vertically and horizontally.
- **Title**: Bold and large font for the app title.
- **Input**: Styled text input with padding and a border.
- **Result**: Styled text to display the converted amount.

---

Feel free to extend this app with additional features, such as:
- Adding multiple currency conversion options.
- Fetching real-time conversion rates from an API.
