const { assert } = require("chai");

const Token = artifacts.require('BouncebackTestToken.sol');

contract('Token', accounts=> {
  let token;
  const [admin, _] = accounts;
  const TOTAL_SUPPLY = web3.utils.toWei("7000000");

  before(async () => {
    token = await Token.deployed();
  });

  it('admin should have total supply', async () => {
    let balance = await token.balanceOf(accounts[0])
    const totalSupply = await token.totalSupply();
    const balanceAdmin = await token.balanceOf(admin);
    balance = web3.utils.fromWei(balanceAdmin, "ether");
    assert.equal(balance, "7000000", "balance should be 7M tokens for contract creator")
    assert(totalSupply.toString() === TOTAL_SUPPLY);
    assert(balanceAdmin.toString() === TOTAL_SUPPLY);
  });

  it("can transfer tokens between accounts", async () => {

    let amount = web3.utils.toWei("1000", "ether")
    await token.transfer(accounts[1], amount, { from: accounts[0] })

    let balance = await token.balanceOf(accounts[1])
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(balance, "1000", "balance should be 1k tokens for contract creator")
  })
});
