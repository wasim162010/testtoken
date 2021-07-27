const BouncebackTestToken = artifact.require("./BouncebackTestToken.sol");

require("chai").use(require("chai-as-promised")).should();

contract("BouncebackTestToken", ([deployer, author, tipper]) => {
  let bouncebackTestToken;
  before(async () => {
    bouncebackTestToken = await BouncebackTestToken.deployed();
  });
});
