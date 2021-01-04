/*
 * @Author: daboluo
 * @Date: 2020-09-20 22:06:03
 * @LastEditors: daboluo
 * @LastEditTime: 2020-10-22 01:05:01
 * @FilePath: /eth_h5/src/web3/abi.js
 */
// eslint-disable-next-line import/prefer-default-export
export const depositAndWithdrawAbi = [{
  inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
  }],
  name: 'Deposit',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'value', type: 'uint256',
  }],
  name: 'GovWithdraw',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'previousOwner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'newOwner', type: 'address',
  }],
  name: 'OwnershipTransferred',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'value', type: 'uint256',
  }],
  name: 'Withdraw',
  type: 'event',
}, {
  constant: false, inputs: [{ internalType: 'uint8', name: '_rate', type: 'uint8' }], name: 'changeRate', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [], name: 'deposit', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }], name: 'govWithdraw', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [], name: 'governanceRate', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'stakeOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [], name: 'totalStake', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [], name: 'vipMaxStake', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'uint256', name: '_newMax', type: 'uint256' }], name: 'vitailk', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }], name: 'withdraw', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}];
