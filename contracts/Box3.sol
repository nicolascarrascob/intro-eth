// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Box3 {
    uint256 private _value;
    uint256 private _otherValue;

    event ValueChanged(uint256 value);

    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }

    function retrieveOtherValue() public view returns (uint256) {
        return _otherValue;
    }

    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}