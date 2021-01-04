/* eslint-disable import/prefer-default-export */
/*
 * @Author: 大菠萝
 * @Date: 2020-09-20 22:06:04
 * @LastEditors: daboluo
 * @LastEditTime: 2020-11-18 11:22:38
 * @FilePath: /eth_h5/src/web3/index.js
 */
/* eslint-disable no-undef */
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import {
  getSetAbi, times10Abi, readAbi, verifyabi,
} from './abi';

export const GetQueryString = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
// 测试网;
// const readAbiAddr = '0xC9C70a3abCB461DD6766A60209DdBDF1fa96f6FB';
// const readAbiAddr = '0x51f75b0bFfe8d7C62a2A76E8aBde3a9a47C4e6b7';
// export const getSetAbiAddr = '0xaD948fA16B645088cc7543CaB5e1e983c3E4123F';
// export const times10AbiAddr = '0xF63a11c4d3E2C36B0a647B5A40D742E9c49a33f9';
// const verifyaddr = '0x25DE53B9c714AcEDcaf0B86a4be65acE11C405A8';

// 正式网;
const readAbiAddr = '0x8ac01116Bb56296ac8731CD7a840ABa6e32B85E4';
export const getSetAbiAddr = '0x0bfA3b4AB5bb54A920783aeDc46101bF4bcaD7a0';
export const times10AbiAddr = '0x5F64aD36051623beBf7362CB5c40BB6268aEB192';
const verifyaddr = '0x37e79488a39F9f91CAaa1199726Cb730eE70d42A';

const desiredNetwork = GetQueryString('nw') || 1;

if (typeof window.ethereum === 'undefined') {
  alert('Looks like you need a Dapp browser to get started.');
  alert('Consider installing MetaMask!');
} else {
  // In the case the user has MetaMask installed, you can easily ask them to sign
  /* in and reveal their accounts: */
  // eslint-disable-next-line no-undef
  ethereum.autoRefreshOnNetworkChange = false;
  ethereum
    .enable()
    // 记住处理他们拒绝请求的案例：
    .catch((reason) => {
      if (reason === 'User rejected provider access') {
        // 用户拒绝访问程序 用户不想登录
      } else {
        // This shouldn't happen, so you might want to log this...
      }
    })

    // 如果他们批准了登录请求，您将收到他们的帐户：
    .then((accounts) => {
      /* 您还应验证用户是否在正确的网络上： */
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line eqeqeq
      if (ethereum.networkVersion != desiredNetwork) {
        console.log('当前网络', ethereum.networkVersion);
        console.log('当前网络', desiredNetwork);
        // eslint-disable-next-line eqeqeq
        console.log('当前网络', ethereum.networkVersion == desiredNetwork);
        // alert('注意：当前为测试网络!');

        // We plan to provide an API to make this request in the near future.
        // https://github.com/MetaMask/metamask-extension/issues/3663
      }

      // 一旦您有了对用户帐户的引用， 您可以建议交易和签名：
      const defaultAccount = accounts[0];
      // window.location.reload();
      console.log(defaultAccount);
      // ethereum.on('networkChanged', (networkIDstring) => {
      //   console.log(networkIDstring);
      //   // if()
      //   window.location.reload();
      // });
    });
}
let web3; let floatContract; let fixContract; let readContract; let
  verifyContract;
if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
  // Web3 browser user detected. You can now use the provider.
  const provider = window.ethereum || window.web3.currentProvider;
  web3 = new Web3(provider);
  window.web33 = web3.utils;
  floatContract = new web3.eth.Contract(getSetAbi, getSetAbiAddr);
  fixContract = new web3.eth.Contract(times10Abi, times10AbiAddr);
  readContract = new web3.eth.Contract(readAbi, readAbiAddr);
  verifyContract = new web3.eth.Contract(verifyabi, verifyaddr);
}
// eslint-disable-next-line max-len
export const getAddress = () => {
  let a;
  try {
    a = ethereum.selectedAddress || web3.eth.defaultAccount || web3.currentProvider.selectedAddress;
  } catch (e) {
    // TODO handle the exception
    console.log(e);
  }
  return a;
};
export const getUserBalance = () => web3.eth.getBalance(getAddress());

///
export const powerOf = () => readContract.methods.powerOf(getAddress()).call();
export const totalPower = () => readContract.methods.totalPower().call();

export const withdraw = (value) => {
  const amount = web3.utils.toHex(web3.utils.toWei(value, 'ether'));
  return floatContract.methods.withdraw(amount).send({ from: getAddress() });
};
export const deposit = (valueText) => floatContract.methods
  .deposit()
  .send({ from: getAddress(), value: web3.utils.toWei(valueText, 'ether') });

export const setGetBalance = () => new Promise((resolve, reject) => {
  floatContract.methods
    .stakeOf(getAddress())
    .call()
    .then((res) => {
      console.log(' setGetBalance stakeOf = ', res);
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
});
export const maxWithdraw = async () => {
  const balanceOf = await setGetBalance();
  const rate = await floatContract.methods.governanceRate().call({ from: getAddress() });
  console.log(balanceOf, rate);
  const values = new BigNumber(balanceOf)
    .multipliedBy(new BigNumber(100).minus(rate))
    .div(100)
    .toString();
  return web3.utils.fromWei(values, 'ether');
};

export const setGetTotalStake = () => new Promise((resolve, reject) => {
  fixContract.methods
    .totalStake()
    .call()
    .then((res) => {
      console.log('setGetTotalStake=', res);
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
});
export const times10Balance = () => new Promise((resolve, reject) => {
  fixContract.methods
    .pureStakeOf(getAddress())
    .call()
    .then((res) => {
      console.log(' times10Balance stakeOf = ', res);
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
});

export const times10TotalStake = () => new Promise((resolve, reject) => {
  fixContract.methods
    .totalStake()
    .call()
    .then((res) => {
      console.log('times10TotalStake=', res);
      resolve(res);
    })
    .catch((error) => {
      reject(error);
    });
});
export const times10Deposit = (valueText) => fixContract.methods
  .deposit()
  .send({ from: getAddress(), value: web3.utils.toWei(valueText, 'ether') });
// eslint-disable-next-line max-len
export const times10DepositWithAdviser = (addr, value) => fixContract.methods.depositWithAdviser(addr).send({ from: getAddress(), value: web3.utils.toWei(value) });
// eslint-disable-next-line max-len
export const verifyBuyPower = (value) => verifyContract.methods
  .buyPower()
  .send({ from: getAddress(), value: web3.utils.toWei(value) });
export const verifyPowerOf = () => verifyContract.methods
  .powerOf(getAddress())
  .call();
export const profitOf = () => fixContract.methods.profitOf(getAddress()).call();
