module.exports = {
    C: (temperature) => {
        return {
            Celsius: temperature,
            Fahrenheit: (temperature * 9 / 5) + 32,
            Kelvin: (temperature + 273.15)
        }
    },
    F: (temperature) => {
        return {
            Fahrenheit: temperature,
            Celsius: (temperature - 32) * 5 / 9,
            Kelvin: (temperature - 32) * 5 / 9 + 273.15
        }
    },
    K: (temperature) => {
        return {
            Kelvin: temperature,
            Celsius: temperature - 273.15,
            Fahrenheit: (temperature - 273.15) * 9 / 5 + 32
        }
    }
};