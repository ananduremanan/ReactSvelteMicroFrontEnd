# How to create Micro Front Ends With React and Svelte Using Webpack Module Federation.

This repository provides a minimal setup for a micro frontend architecture using React and Svelte, bundled with Webpack. The aim is to demonstrate how to integrate two different frameworks into a single application, leveraging Webpack's module federation to ensure a smooth and efficient build process.

## Features

- React and Svelte Integration: Combines the strengths of React and Svelte within a single application.
- Webpack Module Federation: Allows independent deployment and loading of micro frontends.
- Hot Module Replacement (HMR): Enables live reloading during development for a smooth developer experience.
- Minimal Configuration: Focuses on simplicity and ease of understanding for beginners and experts alike.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn (>= 1.x)

## Getting Started

Clone the Repository

```bash
git clone git@github.com:ananduremanan/ReactSvelteMicroFrontEnd.git
cd react-svelte-micro-frontend
```

Install Dependencies

```bash
npm install
```

or

```
yarn install
```

Start the Development Server

```
npm run start
```

or

```
yarn start
```

## Project Structure

```
react-svelte-micro-frontend/
├── react-app/                # React micro frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── webpack.config.js
├── svelte-app/               # Svelte micro frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── webpack.config.js
├── package.json
└── README.md
```

## Configuration Details

Webpack Module Federation : This uses a simplified version of webpack configuration and details regarding that can be found at [Here](https://gramfederation.vercel.app/).

### Minimal Reproduction

Sevelte Remote

```
const generateWebpackConfig = require("@grampro/svelte-mf-remote");

module.exports = generateWebpackConfig({
  mode: process.env.NODE_ENV,
  publicPath: "http://localhost:8080/",
  federationConfig: {
    name: "header",
    filename: "remoteEntry.js",
    exposes: {
      "./Dash": "./src/Dash.svelte",
      "./Header": "./src/Header.svelte",
    },
  },
});
```

React Consumer

```
const webpackConfig = require("@grampro/react-mf-consumer");

module.exports = webpackConfig({
  mode: "production",
  publicPath: "http://localhost:8082/",
  port: 8082,
  federationConfig: {
    name: "consumer",
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {},
  },
});
```

## Importing Components From Remote

```
<html>
  <head>
    <script src="http://localhost:8080/remoteEntry.js"></script>
    <link rel="stylesheet" href="./index.css" type="css" />
  </head>
  <body class="">
    <div id="app"></div>
  </body>
</html>
```

```
import { useEffect } from "react";

const DashBoard = () => {
  useEffect(() => {
    window.header.get("./Dash").then((module: any) => {
      const AwesomeDash = module().default;
      new AwesomeDash({
        target: document.getElementById("dash"),
      });
    });
  }, []);

  return <div id="dash" className="text-xs m-4"></div>;
};

export default DashBoard;
```

## Running the Apps

Start the React App:

```
cd react-app
npm start
```

or

```
yarn start
```

The React app will be available at http://localhost:8082.

Start the Svelte App:

```
cd svelte-app
npm start
```

or

```
yarn start
```

The Svelte app will be available at http://localhost:8080.

## Credits

Heavily Inspired By [Jack Herrington](https://github.com/jherr)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
