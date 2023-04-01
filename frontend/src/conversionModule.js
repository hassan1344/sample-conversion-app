import React, { useState } from "react";
import axios from "axios";

function UnitConversion() {
  const [rows, setRows] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = new RegExp("^[0-9]*\\.?[0-9]+$");

    if (e.target.inputNum.value === "" || e.target.studentResp.value === "") {
      alert("Please enter the required fields");
      return;
    } else if (
      !regex.test(e.target.studentResp.value) ||
      !regex.test(e.target.inputNum.value)
    ) {
      alert("Please enter numeric values");
      return;
    } else if (e.target.inputUnit.value === e.target.targetUnit.value) {
      alert("Input unit and target unit cannot be same");
      return;
    } else {
      const { data } = await axios.post("http://localhost:3001/convert", {
        value: e.target.inputNum.value,
        fromUnit: e.target.inputUnit.value,
        toUnit: e.target.targetUnit.value,
        studentResponse: e.target.studentResp.value,
      });

      setRows((prevRows) => [...prevRows, data.data]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input Numerical Value:
          <input type="text" name="inputNum" required />
        </label>
        <label>
          Input Unit of Measure:
          <select name="inputUnit" required>
            <option value="kelvin">Kelvin</option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="rankine">Rankine</option>
            <option value="liters">Liters</option>
            <option value="tablespoons">Tablespoons</option>
            <option value="cubicInches">Cubic Inches</option>
            <option value="cups">Cups</option>
            <option value="cubicFeet">Cubic Feet</option>
            <option value="gallons">Gallons</option>
          </select>
        </label>
        <label>
          Target Unit of Measure:
          <select name="targetUnit" required>
            <option value="kelvin">Kelvin</option>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="rankine">Rankine</option>
            <option value="liters">Liters</option>
            <option value="tablespoons">Tablespoons</option>
            <option value="cubicInches">Cubic Inches</option>
            <option value="cups">Cups</option>
            <option value="cubicFeet">Cubic Feet</option>
            <option value="gallons">Gallons</option>
          </select>
        </label>
        <label>
          Student Response:
          <input type="text" name="studentResp" required />
        </label>
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Input Numerical Value</th>
            <th>Input Unit of Measure</th>
            <th>Target Unit of Measure</th>
            <th>Student Response</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index}>
              <td>{row.value}</td>
              <td>{row.fromUnit}</td>
              <td>{row.toUnit}</td>
              <td>{row.studentResponse}</td>
              <td>{row.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UnitConversion;
