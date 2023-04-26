# ecommerce-site-back-end

![License](https://img.shields.io/badge/license-MIT-green.svg)

## Description

This back end for an e-commerce site features an Express.js API to use Sequelize to interact with a MySQL database. The routes allow for retrieving, creating, updating, and deleting data for every model.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Testing](#tests)

## Installation

The following npm packages are needed to use this back end application:
    - MySQL2
    - Sequelize
    - Express
    - dotenv

## Usage

1. Run npm i on terminal to install npm packages.
2. Create database by using schema.sql (db folder) by using either MySQL Workbench or MySQL shell.
3. Create .env if you wish to store sensitive data
4. To seed the database, run "npm run seed" then "npm start" to sync the models to the database and run the server.
5. Test http://localhost:3001 for errors in endpoints on your platform of choice (Insomnia was used to test this application).


## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license. See the [LICENSE](./LICENSE) file for details.


## Testing

This application was tested with Insomnia.
