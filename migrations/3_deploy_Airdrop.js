const BBTToken = artifacts.require("BounceBackTestToken.sol");
const Airdrop = artifacts.require("Airdrop.sol");

module.exports = function (deployer) {
    deployer.deploy(BBTToken, 7000000);
  };