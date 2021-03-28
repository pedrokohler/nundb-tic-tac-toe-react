# Nundb tic tac toe

## Introduction

This is an example of tic tac toe game in React that uses NunDb as a real time database so that it can be played by 2 players simultaneously in the same url, each one from their own end. The game can also be watched by guests in real time.

See the [live version](https://pedrokohler.github.io/nundb-tic-tac-toe-react/).

In the home page you can choose a nickname for yourself and the room you want to join. After that you can proceed to the game page and play against any opponent that joins the same room. If you join directly from the url you join as a guest. In order to join as a player you must join the room from the home page and choose a nickname.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Join flow

```
Join room => X join => O join
```
