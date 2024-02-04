function convertTemperature() {
  // Get input values
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;

  // Check if temperature is a valid number
  if (isNaN(temperature)) {
      alert("Please enter a valid temperature");
      return;
  }

  // Perform temperature conversion
  var result;
  switch (unit) {
      case "celsius":
          result = {
              fahrenheit: (temperature * 9/5) + 32,
              kelvin: temperature + 273.15
          };
          break;
      case "fahrenheit":
          result = {
              celsius: (temperature - 32) * 5/9,
              kelvin: (temperature - 32) * 5/9 + 273.15
          };
          break;
      case "kelvin":
          result = {
              celsius: temperature - 273.15,
              fahrenheit: (temperature - 273.15) * 9/5 + 32
          };
          break;
      default:
          alert("Invalid unit");
          return;
  }

  // Display the result with conditions to exclude input units
  var resultString = "";
  if (result.celsius !== undefined) {
      resultString += `<p>Celsius: ${result.celsius.toFixed(2)} °C</p>`;
  }
  if (result.fahrenheit !== undefined) {
      resultString += `<p>Fahrenheit: ${result.fahrenheit.toFixed(2)} °F</p>`;
  }
  if (result.kelvin !== undefined) {
      resultString += `<p>Kelvin: ${result.kelvin.toFixed(2)} K</p>`;
  }

  // Display the result
  document.getElementById("result").innerHTML = resultString;
}
