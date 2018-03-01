"use strict";

/**
 * Fail synchronously.
 */
const base = require("./webpack.config");
const fail = require("../webpack4/webpack.config.fail-sync");

module.exports = Object.assign({}, base, {
  plugins: fail.plugins
});
