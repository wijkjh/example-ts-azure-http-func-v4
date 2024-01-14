# Example Azure function using Typescript

This example Azure function is built using Typescript v5.3 and uses the function programming model v4.

The example also includes unittests using vitest with code coverage.
And the example adds conventional commit linting using husky.

## Typescript notes

### Types vs interfaces

Beware of the fact that interfaces can be merged, which can have impredictable results.

Interfaces can extend other interfaces and types not (except using intersections).

While almost all interface features are available in types or have equivalents, one exception is declaration merging. Interfaces should generally be used when declaration merging is necessary, such as extending an existing library or authoring a new one. Additionally, if you prefer the object-oriented inheritance style, using the extends keyword with an interface is often more readable than using the intersection with type aliases.

## Getting started

### Prequisites

- nvm
- Node v18 (use `nvm install` to install correct Node version or `nvm use` to switch to correct Node version)
- To run locally you need the Azurite vscode extension (azurite.azurite).

### Initial setup

Run `npm install` to get all modules installed
As last part of the installation the pre-commit hooks are installed using Husky.

### Run function locally

Start the local storage emulator (azurite).
Use either the F5 or ctrl+F5 keys to start the function locally.
Or run `npm start`.

### Typescript

Run `npm run watch` to start the Typescript transpiler in watch mode.
Run `npm run build` to start the Typescript transpiler once.
