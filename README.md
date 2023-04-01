# Sample Unit conversion 

This is a sample webapp to validate the unit conversions. It can be used by a teacher to check whether their students have given the correct conversions or not.

## Features

- Supports conversion between temperatures in Kelvin, Celsius, Fahrenheit, and Rankine.
- Supports conversion between volumes in liters, tablespoons, cubic inches, cups, cubic feet, and gallons.
- Rounds both the student's response and authoritative answer to the tenths place before comparison.

## Technologies Used

- React.js for the frontend user interface.
- Node.js and Express for the backend API.

## Installation and Setup (Frontend)

1. Clone this repository to your local machine.
2. Navigate into the frontend directory.
3. Run `npm install` to install all the necessary dependencies.
4. After that, run `npm start` to start the development server. The webpage will automatically run in your web browser.

## Installation and Setup (Backend)

## ** clone step already done ** 

1. Navigate into the backend directory.
2. Run `npm install` to install all the necessary dependencies.
3. After that, run `nodemon server.js` to start the node.js server. The server is now ready to listen to your client's requests.

## Usage

1. Enter the input numerical value, input unit of measure, target unit of measure, and student's numeric response in the form fields.
2. Click the "Submit" button to grade the response.
3. The application will indicate whether the response is correct, incorrect, or invalid in the "Output" column of the table.
