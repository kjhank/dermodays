# DOZ Dermo Days

## Pre-requisites

* [Node.js](https://nodejs.org/en/) version 18 or higher
* [pnpm](https://pnpm.io/)
* [nvm](https://github.com/nvm-sh/nvm) (optional, helpful for managing multiple Node.js versions)

## Build instructions

1. Install Node.js: <https://nodejs.org/en/download/>
2. Install pnpm: <https://pnpm.io/install>
3. Install nvm (optional): <https://github.com/nvm-sh/nvm>
4. Clone the repository: `git clone git@github.com:kjhank/dermodays.git`
5. Run `pnpm install`
6. Run `pnpm build`

The `build` command will build the production version of the page in the `dist` folder.
For development, use `pnpm dev`, this will start the development server with hot-reloading of any changes.
