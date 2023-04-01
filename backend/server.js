const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post("/convert", (req, res) => {
  console.log(req.body);
  const { studentResponse } = req.body;
  const value = parseFloat(req.body.value);
  const fromUnit = req.body.fromUnit.toLowerCase();
  const toUnit = req.body.toUnit.toLowerCase();
  let authoritativeAnswer;

  // Temperature conversions

  //--------------celcius-----------------------------------
  if (fromUnit === "celsius" && toUnit === "kelvin") {
    authoritativeAnswer = value + 273.15;
  } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    authoritativeAnswer = (value * 9) / 5 + 32;
  } else if (fromUnit === "celsius" && toUnit === "rankine") {
    authoritativeAnswer = ((value + 273.15) * 9) / 5;
  }
  //--------------------------------------------------------------

  //--------------kelvin-----------------------------------
  else if (fromUnit === "kelvin" && toUnit === "celsius") {
    authoritativeAnswer = value - 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    authoritativeAnswer = ((value - 273.15) * 9) / 5 + 32;
  } else if (fromUnit === "kelvin" && toUnit === "rankine") {
    authoritativeAnswer = (value * 9) / 5;
  }
  //----------------------------------------------------------

  //--------------fahrenheit-----------------------------------
  else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    authoritativeAnswer = ((value - 32) * 5) / 9;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    authoritativeAnswer = ((value - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "fahrenheit" && toUnit === "rankine") {
    authoritativeAnswer = value + 459.67;
  }
  //----------------------------------------------------------

  //--------------rankine---------------------------------------
  else if (fromUnit === "rankine" && toUnit === "celsius") {
    authoritativeAnswer = ((value - 491.67) * 5) / 9;
  } else if (fromUnit === "rankine" && toUnit === "kelvin") {
    authoritativeAnswer = (value * 5) / 9;
  } else if (fromUnit === "rankine" && toUnit === "fahrenheit") {
    authoritativeAnswer = value - 459.67;
  }
  //-------------------------------------------------------------

  // Volume conversions

  //-------------------liters------------------------------------------
  else if (fromUnit === "liters" && toUnit === "tablespoons") {
    authoritativeAnswer = value * 67.628;
  } else if (fromUnit === "liters" && toUnit === "cubicinches") {
    authoritativeAnswer = value * 61.024;
  } else if (fromUnit === "liters" && toUnit === "cups") {
    authoritativeAnswer = value * 4.227;
  } else if (fromUnit === "liters" && toUnit === "cubicfeet") {
    authoritativeAnswer = value / 28.317;
  } else if (fromUnit === "liters" && toUnit === "gallons") {
    authoritativeAnswer = value / 3.785;
  }
  //------------------------------------------------------------------

  //------------------------cups-------------------------------------
  else if (fromUnit === "cups" && toUnit === "tablespoons") {
    authoritativeAnswer = value * 16;
  } else if (fromUnit === "cups" && toUnit === "liters") {
    authoritativeAnswer = value / 4.227;
  } else if (fromUnit === "cups" && toUnit === "cubicinches") {
    authoritativeAnswer = value * 14.438;
  } else if (fromUnit === "cups" && toUnit === "cubicfeet") {
    authoritativeAnswer = value / 119.7;
  } else if (fromUnit === "cups" && toUnit === "gallons") {
    authoritativeAnswer = value / 16;
  }
  //-----------------------------------------------------------------

  //-----------------------tablespoons--------------------------------------
  else if (fromUnit === "tablespoons" && toUnit === "liters") {
    authoritativeAnswer = value / 67.628;
  } else if (fromUnit === "tablespoons" && toUnit === "cubicinches") {
    authoritativeAnswer = value * 0.902;
  } else if (fromUnit === "tablespoons" && toUnit === "cups") {
    authoritativeAnswer = value / 16.231;
  } else if (fromUnit === "tablespoons" && toUnit === "cubicfeet") {
    authoritativeAnswer = value / 1915;
  } else if (fromUnit === "tablespoons" && toUnit === "gallons") {
    authoritativeAnswer = value / 256;
  }

  //---------------------------------------------------------------------------

  //-----------------------cubic inches----------------------------------------
  else if (fromUnit === "cubicinches" && toUnit === "liters") {
    authoritativeAnswer = value / 61.024;
  } else if (fromUnit === "cubicinches" && toUnit === "tablespoons") {
    authoritativeAnswer = value * 1.108;
  } else if (fromUnit === "cubicinches" && toUnit === "cups") {
    authoritativeAnswer = value / 14.438;
  } else if (fromUnit === "cubicinches" && toUnit === "cubicfeet") {
    authoritativeAnswer = value / 1728;
  } else if (fromUnit === "cubicinches" && toUnit === "gallons") {
    authoritativeAnswer = value / 231;
  }

  //-------------------------------------------------------------------------

  //-----------------------cubic feet----------------------------------------
  else if (fromUnit === "cubicfeet" && toUnit === "liters") {
    authoritativeAnswer = value * 28.317;
  } else if (fromUnit === "cubicfeet" && toUnit === "tablespoons") {
    authoritativeAnswer = value * 1915;
  } else if (fromUnit === "cubicfeet" && toUnit === "cups") {
    authoritativeAnswer = value * 119.7;
  } else if (fromUnit === "cubicfeet" && toUnit === "cubicinches") {
    authoritativeAnswer = value * 1728;
  } else if (fromUnit === "cubicfeet" && toUnit === "gallons") {
    authoritativeAnswer = value * 7.481;
  }

  //-------------------------------------------------------------------------

  //-----------------------gallons----------------------------------------
  else if (fromUnit === "gallons" && toUnit === "liters") {
    authoritativeAnswer = value * 3.785;
  } else if (fromUnit === "gallons" && toUnit === "tablespoons") {
    authoritativeAnswer = value * 256;
  } else if (fromUnit === "gallons" && toUnit === "cups") {
    authoritativeAnswer = value * 16;
  } else if (fromUnit === "gallons" && toUnit === "cubicinches") {
    authoritativeAnswer = value * 231;
  } else if (fromUnit === "gallons" && toUnit === "cubicfeet") {
    authoritativeAnswer = value / 7.48;
  }

  //-------------------------------------------------------------------------

  const roundedStudentResponse = Math.round(studentResponse * 10) / 10;
  const roundedAuthoritativeAnswer = Math.round(authoritativeAnswer * 10) / 10;

  if (roundedStudentResponse === roundedAuthoritativeAnswer) {
    res.status(200).json({
      data: { value, fromUnit, toUnit, studentResponse, message: "correct" },
    });
  } else {
    res.status(200).json({
      data: { value, fromUnit, toUnit, studentResponse, message: "incorrect" },
    });
  }
});
app.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});
