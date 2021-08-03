const { assert } = require("chai");

const Token = artifacts.require('BouncebackTestToken.sol');
const Airdrop = artifacts.require("Airdrop.sol");

// contract('Token', accounts=> {
//     let token, airdrop
//     const [admin, _] = accounts;
//     const TOTAL_SUPPLY = web3.utils.toWei("7000000");
  
//     before(async () => {
//       token = await Token.deployed();
//     });