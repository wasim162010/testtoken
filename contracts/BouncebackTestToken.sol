// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BouncebackTestToken is ERC20, Ownable {

    mapping(address => uint256) private _balances;

  event Airdropped(address indexed from, address indexed to, uint256 tokens);  

   // address owner = msg.sender;

    constructor(uint256 _supply) ERC20("BouncebackTestToken", "BBTT") {
        _mint(msg.sender, _supply * (10 ** decimals()));
    
    }
    
  //   function getAirdrop(address from) public payable {
  //       BouncebackTestToken token = BouncebackTestToken(0x33B245F34a4708F69e4690cf31D42aBA76278296);
  //   token.transfer(msg.sender, msg.value); //18 decimals token 60000000000000000000
  //   emit Airdropped(from, msg.sender, 600000000000000000000);
  // }
    
    // function balanceOf(address account) public view virtual override returns (uint256) {
    //     return _balances[account];
    //     }
    
}
    


    //  function _transfer(
    //     address sender,
    //     address recipient,
    //     uint256 amount
    // ) internal virtual {
    //     require(sender != address(0), "ERC20: transfer from the zero address");
    //     require(recipient != address(0), "ERC20: transfer to the zero address");

    //     _beforeTokenTransfer(sender, recipient, amount);

    //     uint256 senderBalance = _balances[sender];
    //     require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");
    //     unchecked {
    //         _balances[sender] = senderBalance - amount;
    //     }
    //     _balances[recipient] += amount;

    //     emit Transfer(sender, recipient, amount);

    //     _afterTokenTransfer(sender, recipient, amount);
    // }

    // function transfer() external {
    //     BouncebackTestToken token = BouncebackTestToken(0xf813b8B8C82626A2f61274e1c23c3DB746D70A11);
    //     token.transfer(msg.sender, 707);
    // }

  // function rewardUser() public {
  //  BouncebackTestToken token = BouncebackTestToken(0xf813b8B8C82626A2f61274e1c23c3DB746D70A11);
  //  token.transfer(msg.sender, 707); 
  // }


//     function _transfer(address sender, address recipient, uint256 amount) internal virtual override {
//     require(sender != address(0), "ERC20: transfer from the zero address");
//     require(recipient != address(0), "ERC20: transfer to the zero address");
//     _beforeTokenTransfer(sender, recipient, amount);
//     _balances[sender] = _balances[sender].sub(amount);
//     _balances[recipient] = _balances[recipient].add(amount);
//     emit Transfer(sender, recipient, amount);
//  }

// function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
//         _transfer(_msgSender(), recipient, amount);
//         return true;



