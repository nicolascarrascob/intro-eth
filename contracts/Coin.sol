//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "./Ownable.sol"

contract Coin is ERC20 {
    constructor(uint256 initialSupply) ERC20("Coin", "COIN") {
        _mint(msg.sender, initialSupply);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
