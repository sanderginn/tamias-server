module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Budget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Budget */ "./models/Budget.js");



const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_1___default.a(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});
const Budget = Object(_models_Budget__WEBPACK_IMPORTED_MODULE_2__["default"])(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_1___default.a);
const Models = {
  Budget
};
const connection = {};
/* harmony default export */ __webpack_exports__["default"] = (async () => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.');
    return Models;
  }

  ;
  await sequelize.sync();
  await sequelize.authenticate();
  connection.isConnected = true;
  console.log('=> Created a new connection.');
  return Models;
});

/***/ }),

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! exports provided: healthCheck, createBudget, getBudget, getAllBudgets, updateBudget, deleteBudget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthCheck", function() { return healthCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBudget", function() { return createBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBudget", function() { return getBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBudgets", function() { return getAllBudgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBudget", function() { return updateBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBudget", function() { return deleteBudget; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db.js */ "./db.js");

 // simple Error constructor for handling HTTP error codes

function HTTPError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

async function healthCheck() {
  await Object(_db_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  console.log('Connection successful.');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Connection successful.'
    })
  };
}
async function createBudget(event) {
  try {
    const {
      Budget
    } = await Object(_db_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const budget = await Budget.create(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: 'Could not create budget.\nError message: ' + err.message
    };
  }
}
async function getBudget(event) {
  try {
    const {
      Budget
    } = await Object(_db_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const budget = await Budget.findByPk(event.pathParameters.id);
    if (!budget) throw new HTTPError(404, `Budget with id: ${event.pathParameters.id} was not found`);
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: err.message || 'Could not fetch budget.'
    };
  }
}
async function getAllBudgets() {
  try {
    const {
      Budget
    } = await Object(_db_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const budgets = await Budget.findAll();
    return {
      statusCode: 200,
      body: JSON.stringify(budgets)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: 'Could not fetch budgets.'
    };
  }
}
async function updateBudget(event) {
  try {
    const input = JSON.parse(event.body);
    const {
      Budget
    } = await Object(_db_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const budget = await Budget.findByPk(event.pathParameters.id);
    if (!budget) throw new HTTPError(404, `Budget with id: ${event.pathParameters.id} was not found`);
    if (input.startDate) budget.startDate = input.startDate;
    if (input.endDate) budget.endDate = input.endDate;
    await budget.save();
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: err.message || 'Could not update budget.'
    };
  }
}
async function deleteBudget(event) {
  try {
    const {
      Budget
    } = await Object(_db_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const budget = await Budget.findByPk(event.pathParameters.id);
    if (!budget) throw new HTTPError(404, `Budget with id: ${event.pathParameters.id} was not found`);
    await budget.destroy();
    return {
      statusCode: 200,
      body: JSON.stringify(budget)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: err.message || 'Could not delete budget.'
    };
  }
}

/***/ }),

/***/ "./models/Budget.js":
/*!**************************!*\
  !*** ./models/Budget.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((sequelize, type) => {
  return sequelize.define('budget', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: type.STRING,
    startDate: type.DATEONLY,
    endDate: type.DATEONLY
  });
});

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ });
//# sourceMappingURL=handler.js.map