// eslint-disable-next-line import/prefer-default-export
export const currencyAbi = [{
  inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'down', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'up', type: 'address',
  }],
  name: 'AddAdviser',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'value', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
  }],
  name: 'BuyVip',
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
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint8', name: 'level', type: 'uint8',
  }],
  name: 'VipLevelPro',
  type: 'event',
}, {
  constant: true, inputs: [{ internalType: 'address', name: '_addr', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'address', name: '_addr', type: 'address' }, { internalType: 'uint256', name: '_amount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [], name: 'buyVip', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'address', name: '_adviser', type: 'address' }], name: 'buyVipWithAdviser', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }], name: 'govWithdraw', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'isVip', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'powerStakeOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [], name: 'totalPowerStake', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'totalVipCount', outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'address', name: '_addr', type: 'address' }, { internalType: 'uint256', name: '_amount', type: 'uint256' }], name: 'transferFromAllowance', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'vipBuyProfit', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'vipBuyProfitOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'vipBuySubCountOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'uint256', name: '', type: 'uint256' }], name: 'vipLevelToDown', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'vipLevelToUp', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'vipPower', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'vipPowerMap', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
}];
