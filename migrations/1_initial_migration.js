const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, name, symbol, decimals) {
  deployer.deploy(Migrations);
};
