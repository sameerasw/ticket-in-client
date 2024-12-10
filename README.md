# ticket-in-frontend

This project is the front-end for the Ticket-In application, a ticket booking system with real time ticket information. It is built using React and Material-UI for the user interface, and Axios for API requests. [Backend repository →](https://github.com/sameerasw/ticket-in-server/tree/main)

## Table of Contents

- [Description](#description)
- [Setup Guide](#setup-guide)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [Learn More](#learn-more)

## Description

Ticket-In is a ticket booking system that allows users to browse events, book tickets, and manage their profiles. The front-end is built using React and Material-UI, providing a responsive and modern user interface. The application interacts with a backend API to fetch and manage data. Both APIs and WebSocokets are used in the app to display static data as well as dynamic data in real time such as the ticket count of an event and alerts for the vendor to get notified of recent logs of an event.

## Setup Guide

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sameerasw/ticket-in-frontend.git
   cd ticket-in-frontend
   ```

2. **Install dependencies:**

   Using npm:
   ```sh
   npm install
   ```

3. **Start the development server:**

   Using npm:
   ```sh
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## API Documentation

### Base URL

The base URL for the API is defined in the 

config.ts

 file:

```typescript
const config = {
  API_BASE_URL: 'http://localhost:1245'
};

export default config;
```

### Endpoints

WIP

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Previews

<img width="1762" alt="image" src="https://github.com/user-attachments/assets/cb3be7af-a49e-4e15-a0eb-c4de84d19ae3"> <img width="1762" alt="image" src="https://github.com/user-attachments/assets/84cce1b9-ba3d-4b1b-a238-4a166d4616e0">

<img width="1762" alt="image" src="https://github.com/user-attachments/assets/872951cf-d4b0-4854-912b-6be8f883cbfa"> <img width="1762" alt="image" src="https://github.com/user-attachments/assets/1b9e82a1-15ae-4947-b44f-6743ca4d2855">

<img width="1762" alt="image" src="https://github.com/user-attachments/assets/f59f2969-1540-4bab-925f-fdfb50a468a0">
<img width="1762" alt="image" src="https://github.com/user-attachments/assets/a1df1b82-1b51-4e62-98d4-d9666f3f9047">
<img width="1762" alt="CleanShot 2024-12-01 at 7  59 35@2x" src="https://github.com/user-attachments/assets/79ae9412-d2d3-46fe-96ee-71500466934c">

---
<img width="611" alt="image" src="https://github.com/user-attachments/assets/16321e5d-c69a-411f-a53f-9b00e43f25f8">
<img width="611" alt="image" src="https://github.com/user-attachments/assets/36fa01b9-a241-4b61-84e6-d4c2b48a7b54">


---
This project was developed by [@sameerasw](https://github.com/sameerasw) as part of my coursework at University of Westminster, OOP module. 

