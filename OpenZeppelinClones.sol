// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/proxy/Clones.sol";

contract Factory {
    using Clones for address;

    mapping(address => address) deployerContracts;
    address logic;

    constructor(address _logic) {
        logic = _logic;
    }

    function deploy() public {
        deployerContracts[msg.sender] = logic.clone();
    }
}
