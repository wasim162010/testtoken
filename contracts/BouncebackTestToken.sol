// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./safemath.sol";




contract BouncebackTestToken is ERC20, Ownable {
    using SafeMath for uint256;

    mapping(address => uint256) private _balances;

  struct Reward{
   address account;
   uint tokenReward;
   }

   function decimals() public view virtual override returns (uint8) {
        return 18;
    }
    constructor() ERC20("BouncebackTestToken", "BBTT") {
        _mint(msg.sender, 7000000000000000000000000);
        decimals();
    }

    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
        }

  function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
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

  function rewardUser() public {
   BouncebackTestToken token = BouncebackTestToken(0xf813b8B8C82626A2f61274e1c23c3DB746D70A11);
   token.transfer(msg.sender, 707); 
  }

}

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
//     }