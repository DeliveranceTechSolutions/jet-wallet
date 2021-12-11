 pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
 contract Validation is Initializable {
    uint256 public y;
    

    function initialize() public initializer {
        y = 42;
    }

        function guard(address _addr) 
            pure 
            public 
            returns (bool) 
        {
            require(_addr != address(0));
            return _addr != address(0) ? true : false;
        }


 }

 contract Guard is Validation {
     uint256 public x;
     function initialize(uint256 _x) public initializer {
         x = _x;
     }
 }

//      function invoiceTo(address addr) payable public {
//         //  require(addr == address(0x0));
//         //  require(msg.value != 0);
//         //  uint currentBalance = address(this).balance;
//         //  uint amountToBeTransferred;

//         // if (addr.balance == 0) {
//         //     amountToBeTransferred = msg.value;
//         // } else if (addr.balance < msg.sender.balance) {
//         //     amountToBeTransferred = msg.value + addr.balance;
//         // } else {
//         //     revert();
//         // }

//         // if (currentBalance > msg.value) {
//         //     amountToBeTransferred = msg.value;
//         // } else {
//         //     amountToBeTransferred = currentBalance;
//         // }
//      }
//  }