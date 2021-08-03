const BBTToken = artifacts.require("BouncebackTestToken.sol");

module.exports = function (deployer) {
  deployer.deploy(BBTToken, 7000000);
};
// const BouncebackTestToken = artifacts.require("BouncebackTestToken");

// module.exports = function (deployer) {
//   deployer.deploy(
//     BouncebackTestToken,
//     "0xA276066C9557C0614ea49fDD351f4C1bab816410"
//     // "BouncebackTestToken",
//     // "BBTT",
//     // 7000000,
//     // 10
//   );
// };
