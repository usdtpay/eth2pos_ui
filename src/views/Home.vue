<!--  -->
<template>
  <div class="home">

    <div class="shareLayer"  id='tp'
     style=" position: fixed;display:block;top:0;left:0;z-index:-1000">
        <div class="layui-m-layercont" style="margin-top:0">
           <div >
              <div class='content'>
                <div class="title">
                  <img width="25" src="/favicon.ico" alt="">

                  <font style="color: #f0b90c">ETH2</font> 质押挖矿
                </div>

                <div style="display: flex;">
                  <div class="qrcode-left">
                    <h4>全网已质押</h4>
                    <p class="number-text">{{this.eth2info.balance}}eth</p>
                    <h4>节点数</h4>
                    <p class="number-text">{{this.eth2info.count}}eth</p>
                    <h4>ETH2POS价格（USDT）</h4>
                    <p class="number-text">{{this.currentPrice.toFixed(2)}}/枚</p>
                  </div>
                  <div class="qrcode-right">
                    <img class="logoIcon" src="../assets/bannerniu.png" alt="">
                    <img  :src="this.qrcodeUrl" alt="" />
                  </div>
                </div>
              </div>
              <div class="img-box">
                <div>
                  <p><font style="color:#fff">建立去中心化自治社区</font> 支持钱包：metamask imtoken</p>
                </div>
              </div>
            </div>
        </div>
    </div>

    <dl class="font-box color-yellow">
      <dd>ETH余额</dd>
      <dt>{{ userBalance }}eth</dt>
    </dl>
    <!--     <dl class="copy-box">
      <dd>
        <p>
          ETH2D/W合约
          <span class="ex">(随存随取，拥有算力获得eth2)</span>
        </p>
        <span v-copy="getSetAbiAddr" class="color-yellow"> 复制 </span>
      </dd>
      <dt>{{ getSetAbiAddr }}</dt>
    </dl> -->
    <dl class="copy-box">
      <dd>
        <p>
          ETH2POS合约
          <span class="ex">(10倍算力，10倍收益)</span>
        </p>
        <span class="color-yellow" v-copy="'0x00000000219ab540356cBB839Cbe05303d7705Fa'"> 复制 </span>
      </dd>
      <dt>{{ "0x00000000219ab540356cBB839Cbe05303d7705Fa" }}</dt>
    </dl>
    <dl class="font-box color-yellow">
      <dd>ETH2D/W：</dd>
      <dt>{{ setGetBalanceValue }}eth</dt>
    </dl>
    <dl class="font-box color-yellow">
      <dd>ETH2POS：</dd>
      <dt>{{ times10BalanceValue }}eth</dt>
    </dl>
    <!--     <dl class="font-box color-yellow">
      <dd>预期收益：</dd>
      <dt>xxx.eth</dt>
    </dl> -->
    <dl class="font-box color-yellow">
      <dd>验证器：</dd>
      <dt>{{ vipPower }} eth</dt>
    </dl>
    <dl class="font-box color-yellow">
      <dd>社区自治奖励：</dd>
      <dt>{{ profitOfPower }}</dt>
    </dl>
    <dl class="font-box color-yellow">
      <dd>算力/总算力：</dd>
      <dt>{{ power }}/{{ totalPowNumber }}</dt>
    </dl>

    <!--     <div class="get-income">
      <div class="content">
        <p>群主获得总算力奖励：</p>
        <span> 3% </span>
      </div>
    </div> -->
    <div class="card-box">
      <div class="card-body">
        <div class="card-left">
          <div style="text-align: center">
            <img src="../assets/logo.png" alt="" />
            <!-- <span > ETH2 <span> -->
            <span class="logo-title">ETH2</span>
          </div>

          <div class="box-yellow">{{ eth2info.balance }}eth</div>
          <div class="box-yellow">{{ eth2info.count }}/16384</div>
        </div>
        <div class="card-right">
          <img src="../assets/bannerniu.png" alt="" />
        </div>
      </div>
      <div class="slider">
        <div class="progress">
          <div class="in" :style="[{ width: progress }]">
            <div class="point"></div>
          </div>

          <span>{{ progress }}</span>
          <div class="auto"></div>
        </div>
      </div>
      <p class="progress-text">当达到16384个节点后ETH2将启动</p>
    </div>

    <div class="card">
      <dl class="font-box">
        <dd style="color: #fff; text-align: center; width: 100%">
          <h2>ETH2D/W</h2>
        </dd>
      </dl>

      <div class="max-prompt">流动性挖矿，随存随取</div>
      <div class="jss42">
        <input type="text" v-model="pledgeValue" placeholder="输入金额" />
        <p @click="pledgeMaxClick">最大值</p>
        <div class="inbtn" @click="handlePledgeGetSet">存款ETH</div>
      </div>
      <div class="jss42 my-t-40">
        <input type="text" v-model="withdrawValue" placeholder="输入金额" />
        <p @click="withdrawMaxClick">最大值</p>
        <div class="inbtn" @click="handleWithdraw">取出ETH</div>
      </div>
    </div>

    <div class="card my-t-50">
      <dl class="font-box">

        <dd style="color: #fff; text-align: center; width: 100%">
          <h2>ETH2 POS</h2>
        </dd>
      </dl>
      <div class="max-prompt">10倍算力，10倍收益</div>
      <div class="jss42">
        <input type="text" v-model="eth2PosValue" placeholder="输入金额" />
        <p @click="eth2MaxClick">最大值</p>
        <div class="inbtn" @click="pledgeEth2">质押ETH</div>
      </div>
    </div>
    <div class="card my-t-50">
      <dl class="font-box">
        <dd style="color: #fff; text-align: center; width: 100%">
          <h2>ETH2 验证器</h2>
        </dd>
      </dl>
      <div class="max-prompt">成为节点，加速挖矿</div>

      <div class="select-box">
        <input
          type="text"
          style="position: absolute; z-index: -1"
          v-model="buypowerValue"
          placeholder="输入金额"
        />
        <!--   <p @click="verifyMaxClick">最大值</p> -->
        <select v-model="buypowerValue" placeholder="请选择金额">
          <option
            v-if="buypowerValue <= 0"
            :value="0"
            disabled
            selected
            style="dispaly: none; color: #ccc"
            hidden
          >
            请选择金额
          </option>
          <option v-show="10 - vipPower >= 1" :value="1">
            1枚ETH 验证器加速10% 有效期1年
          </option>
          <option v-show="10 - vipPower >= 2" :value="2">
            2枚ETH 验证器加速20% 有效期1年
          </option>
          <option v-show="10 - vipPower >= 3" :value="3">
            3枚ETH 验证器加速30% 有效期1年
          </option>
          <option v-show="10 - vipPower >= 4" :value="4">
            4枚ETH 验证器加速40% 有效期2年
          </option>
          <option v-show="10 - vipPower >= 5" :value="5">
            5枚ETH 验证器加速50% 有效期2年
          </option>
          <option v-show="10 - vipPower >= 6" :value="6">
            6枚ETH 验证器加速60% 有效期2年
          </option>
          <option v-show="10 - vipPower >= 7" :value="7">
            7枚ETH 验证器加速70% 有效期3年
          </option>
          <option v-show="10 - vipPower >= 8" :value="8">
            8枚ETH 验证器加速80% 有效期3年
          </option>
          <option v-show="10 - vipPower >= 9" :value="9">
            9枚ETH 验证器加速90% 有效期4年
          </option>
          <option v-show="10 - vipPower >= 10" :value="10">
            10枚ETH 验证器加速100% 有效期4年
          </option>
        </select>
        <div class="select-btn" @click="buyPower">质押ETH</div>
      </div>

    </div>
    <div class="Inquire my-t-50">

      <dl class="font-box">
        <dd style="color: #fff; text-align: center; width: 100%">
          <h2>ETH2 社区自治</h2>
        </dd>
      </dl>
      <div class="max-prompt">分享该DAPP可获得ETH2算力</div>
      <div class="url-box my-t-50">
        <h2 class="ellipsis">{{ url }}</h2>
        <div>
          <span class="color-yellow" v-copy="`${url}`"> 复制 </span>
          <span class="color-yellow" @click="handleShareIt"> 分享 </span>
        </div>
      </div>
    </div>
    <div class="card-ETH2">
      <h2>ETH2</h2>
      <div class="lien-text">
        <h4>官网地址：</h4>
        <p>https://ethereum.org/en/eth2/</p>
        <span class="color-yellow" v-copy="'https://ethereum.org/en/'">
          复制
        </span>
      </div>
      <div class="lien-text">
        <h4>GITHUB：</h4>
        <p>https://github.com/ethereum/eth2.0-specs</p>
        <span
          class="color-yellow"
          v-copy="'https://github.com/ethereum/eth2.0-specs'"
        >
          复制
        </span>
      </div>
      <div class="lien-text">
        <h4>VitaLik：</h4>
        <p>https://www.chainnews.com/articles/257680823918.htm</p>
        <span
          class="color-yellow"
          v-copy="' https://www.chainnews.com/articles/257680823918.htm'"
        >
          复制
        </span>
      </div>
      <!-- <div class="lien-text">
        <h4>发行总量：</h4>
        <p>(未知)</p>
      </div>
      <div class="lien-text">
        <h4>持币地址：</h4>
        <p>0</p>
      </div>
      <div class="lien-text">
        <h4>转账次数：</h4>
        <p>0</p>
      </div>
      <div class="lien-text">
        <h4>上线价格：</h4>
        <p>1：1eth</p>
      </div> -->
    </div>

    <div class="pool-box">
      <p class="pool-title">信标链资金池</p>
      <h3>$ {{ eth2info.balance * ETH_PRICE }}</h3>
      <div class="cion-box">
        <div>
          <img src="../assets/logo.png" class="cion-img" alt="" />
        </div>
        <h3>{{ this.eth2Amount }} ETH2</h3>
      </div>

      <div class="cion-box">
        <div>
          <img src="../assets/eth.png" class="cion-img" alt="" />
        </div>
        <h3>{{ eth2info.balance }} ETH</h3>
      </div>
      <div class="price-box">
        <p class="pool-title">ETH2:ETH</p>
        <h3>{{  (ETH22ETH).toFixed(9) }}</h3>
        <!--          <p class="price">≈ $96.1486</p>-->
      </div>
      <div style="height: 210px; width: 100%; margin: 20px 0">
        <p class="pool-title">价格走势</p>
        <vuLine style="height: 95%; width: 100%" v-bind="[...priceLine]" />
      </div>
      <div class="price-box">
        <p class="pool-title">ETH2:USD</p>
        <h3>$ {{ this.currentPrice.toFixed(9) }}</h3>
        <!--          <p class="price">≈ $96.1486</p>-->
      </div>
    </div>
    <div class="whitelist my-t-40">
      <h3 style="text-align: center">
        BEC Announcement Poster
        <!-- <a
          style="float: right"
          href="/lizswap.pdf"
          download="lizswap.pdf"
          class="color-yellow"
          >下载</a
        > -->
      </h3>
      <div class="font-box1">
        <!-- <p class="font-box-title"></p> -->
        <h3>ETH2 "Out of Block"</h3>
        <p>Congratulations to all of you on your first mining concession</p>
        <h3>0 phase</h3>
        <p>
          1. Install and configure 24,000 node validators <br />
          2. Plan to drop 2100ETH as a reward for community autonomy <br />
          3. Plan to drop 2100ETH2POS community autonomy token Price ETH2POS =
          ETH2 (1:1)<br />
        </p>
        <h3>Phase 1</h3>
        <p>
          1. Open ETH2 to withdraw money <br />
          2. Open up the ETH2SWAP (defi2 era) The exchange rate can be equaled
          by ETH2POS: ETH2 Start the ETH2:ETH trade pair <br />
          (All tokens in SWAP) <br />
          3. Plan to drop 8900ETH as an autonomous reward <br />
          4. Plan to drop 8900ETH2POS as community autonomy award <br />
        </p>
        <h3>Stage 1.5</h3>
        <p>
          ETH standardized international trade stability currency <br />
          100 million USD-2 as an award for community autonomy <br />
          10 billion JPY-2 as a reward for community autonomy <br />
          Eighty-four million EUR-2 as a community autonomy award <br />
        </p>
        <h3>Phase 2</h3>
        <p>
          ETH2VOTE is a $1 billion community block <br />
          Reward community autonomy contributors! <br />
          Quadrennial, DEFI elections <br />
          Let the world choose a better system and usher in an era of voting
          autonomy. <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  // totalPower,
  powerOf,
  times10DepositWithAdviser,
  times10Deposit,
  GetQueryString,
  getAddress,
  maxWithdraw,
  withdraw,
  setGetBalance,
  deposit,
  getUserBalance,
  times10Balance,
  // times10TotalStake,
  // setGetTotalStake,
  profitOf,
  verifyPowerOf,
  verifyBuyPower,
  getSetAbiAddr,
  times10AbiAddr,
} from '@/web3';

import { utils } from 'web3';
import vuLine from '@/components/vu-line.vue';
import QRCode from 'qrcodejs2';
import { ajax } from '@/libs/util';
import html2canvas from 'html2canvas';
// import BN from 'bignumber.js';

const MAXWITHDRAW = 32;
const LIZ_TOTAL = 16384;
const ETH_PRICE = 370;
const ETH22ETH = 1;

window.utils = utils;
const currencUrl = window.location.origin + window.location.pathname;

export default {
  name: 'Home',
  data() {
    return {
      ETH_PRICE,
      ETH22ETH,
      LIZ_TOTAL,
      MAXWITHDRAW,
      value: 8,
      progress: '19.37%',
      userBalance: 0,
      getSetAbiAddr,
      times10AbiAddr,
      setGetBalanceValue: 0,
      times10BalanceValue: 0,
      power: 0,
      totalPowNumber: 0,
      eth2PosValue: 0,
      url: `${currencUrl}?addr=${getAddress()}`,
      qrcodeUrl: '',
      adviser: GetQueryString('addr') || null,
      pledgeValue: null, // 质押
      withdrawValue: null,
      buypowerValue: null,
      // income: 0,
      vipPower: 0,
      profitOfPower: 0,
      vipBuyPool: '108800',
      eth2info: {
        balance: 105408,
        count: 3299,
      },
      changeRate: 0,
      currentPrice: 0,
      eth2Amount: 0,
      priceLine: {
        xAxis: [],
        series: [
          {
            data: [],
          },
          {
            data: [],
          },
        ],
      },
    };
  },

  methods: {
    sliderChange(value) {
      console.log(value);
      if (value <= 0) {
        this.value = 1;
      }
      if (value >= 32) {
        this.value = 32;
      }
    },
    // async  verifyMaxClick() {
    //   const userValue = await getUserBalance().then((res) => utils.fromWei(res, 'ether'));
    //   const powerOfValue = await verifyPowerOf();
    //   if (powerOfValue < 10) {
    //     const difference = 10 - powerOfValue;
    //     if (difference > userValue) {
    //       this.buypowerValue = userValue;
    //     } else {
    //       this.buypowerValue = difference;
    //     }
    //   } else {
    //     alert(`ETH2 验证器 最大值${10}枚ETH`);
    //   }
    // },
    buyPower() {
      if (!this.buypowerValue) {
        return;
      }
      const value = `${this.buypowerValue}`;
      verifyBuyPower(value)
        .on('transactionHash', (hash) => {
          console.log('transactionHash, BuyPower:', hash);
          this.$layer('open', { type: 2 });
        })
        .on('receipt', (e) => {
          console.log('BuyPower,receipt:', e);
          this.$layer('close');
          this.buypowerValue = null;
          this._reloadData();
        })
        .on('error', (error) => {
          this.$layer('close');
          console.log('BuyPower:', JSON.stringify(error));
          if (error.errorCode !== 1001) {
            this.$layer('open', {
              content: `BuyPower${JSON.stringify(error)}`,
              skin: 'msg',
              time: 3, // 2秒后自动关闭
            });
          }
        });
    },
    pledgeEth2() {
      if (!this.eth2PosValue) return;
      if (this.eth2PosValue > 33) {
        alert('最多质押32枚');
        return;
      }
      const eth2Value = `${this.eth2PosValue}`; // utils.toWei(String(this.eth2PosValue), 'ether');
      if (this.adviser && utils.isAddress(this.adviser)) {
        times10DepositWithAdviser(this.adviser, eth2Value)
          .on('transactionHash', (hash) => {
            console.log('transactionHash, DepositWithAdviser:', hash);
            this.$layer('open', { type: 2 });
          })
          .on('receipt', (e) => {
            console.log('DepositWithAdviser,receipt:', e);
            this.$layer('close');
            this._reloadData();
          })
          .on('error', (error) => {
            this.$layer('close');
            console.log('DepositWithAdviser:', JSON.stringify(error));
            if (error.errorCode !== 1001) {
              this.$layer('open', {
                content: `质押错误${JSON.stringify(error)}`,
                skin: 'msg',
                time: 3, // 2秒后自动关闭
              });
            }
          });
      } else {
        times10Deposit(eth2Value)
          .on('transactionHash', (hash) => {
            console.log('transactionHash');
            console.log(hash);
            this.$layer('open', { type: 2 });
          })
          .on('receipt', (e) => {
            console.log(e);
            this.$layer('close');
            this._reloadData();
          })
          .on('error', (error) => {
            this.$layer('close');
            console.log(JSON.stringify(error));
            if (error.errorCode !== 1001) {
              this.$layer('open', {
                content: `质押错误${JSON.stringify(error)}`,
                skin: 'msg',
                time: 3, // 2秒后自动关闭
              });
            }
          });
      }
    },
    async eth2MaxClick() {
      const userValue = await getUserBalance().then((res) => utils.fromWei(res, 'ether'));
      const withdrawValue = await times10Balance().then((res) => utils.fromWei(res, 'ether'));
      console.log(withdrawValue);
      if (withdrawValue < MAXWITHDRAW) {
        const difference = MAXWITHDRAW - withdrawValue;
        if (difference > userValue) {
          this.eth2PosValue = userValue;
        } else {
          this.eth2PosValue = difference;
        }
      } else {
        alert(`质押挖矿投注最大值${MAXWITHDRAW}枚ETH`);
      }
    },
    async pledgeMaxClick() {
      const userValue = await getUserBalance().then((res) => utils.fromWei(res, 'ether'));
      this.pledgeValue = userValue;
    },
    async withdrawMaxClick() {
      this.withdrawValue = await maxWithdraw();
    },
    async handleWithdraw() {
      if (!this.withdrawValue) return;
      withdraw(this.withdrawValue)
        .on('transactionHash', (hash) => {
          console.log('transactionHash, withdraw:', hash);
          this.$layer('open', { type: 2 });
        })
        .on('receipt', (e) => {
          console.log('提取质押receipt:', e);
          this.$layer('close');
          this._reloadData();
          // this.$forceUpdate();
        })
        .on('error', (error) => {
          this.$layer('close');
          console.log('提取质押:', JSON.stringify(error));
          if (error.errorCode !== 1001) {
            this.$layer('open', {
              content: `提取质押错误：${JSON.stringify(error)}`,
              skin: 'msg',
              time: 3, // 2秒后自动关闭
            });
          }
        });
    },
    handlePledgeGetSet() {
      // todo 当用户输入的值超过最大值是否拦截？
      if (!this.pledgeValue) {
        return;
      }
      if (this.pledgeValue < 0.01) {
        alert('最小投注0.01ETH！');
        return;
      }
      deposit(this.pledgeValue)
        .on('transactionHash', (hash) => {
          console.log('transactionHash');
          console.log(hash);
          this.$layer('open', { type: 2 });
        })
        .on('receipt', (e) => {
          console.log(e);
          this.$layer('close');
          this._reloadData();
        })
        .on('error', (error) => {
          this.$layer('close');
          console.log(JSON.stringify(error));
          if (error.errorCode !== 1001) {
            this.$layer('open', {
              content: `质押错误${JSON.stringify(error)}`,
              skin: 'msg',
              time: 3, // 2秒后自动关闭
            });
          }
        });
    },
    _torm(value) {
      // eslint-disable-next-line no-param-reassign
      value = Number(value);
      if (value >= 1000) {
        // eslint-disable-next-line no-mixed-operators
        return `${(value / 1000).toFixed(2)} mb`;
      }
      return `${value.toFixed(2)}kb`;
    },
    _getEth2info() {
      ajax({
        // url: 'http://localhost:8086/lizswap/getEth2Info',
        url: 'https://eth2.app/lizswap/getEth2Info',
        success: (data) => {
          if (data.success) {
            this.eth2info = data.data;

            this.totalPowNumber = this._torm(this.eth2info.balance * 1000);
            // eslint-disable-next-line no-mixed-operators
            this.progress = `${((this.eth2info.count / 16384) * 100).toFixed(
              2,
            )}%`;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    },
    _getPriceHistory() {
      ajax({
        url: 'https://eth2.app/lizswap/getPriceHistory',
        data: {
          limit: 24,
        },
        success: (data) => {
          if (data.success) {
            this.changeRate = data.data.changeRate;
            this.currentPrice = data.data.currentPrice;
            this.ETH_PRICE = data.data.eth2Usd;
            this.ETH22ETH = data.data.eth2eth;
            this.eth2Amount = data.data.eth2Amount;
            this.priceLine.xAxis = data.data.history.map(
              (item) => item.createTime.split('.')[0],
            );
            this.priceLine.series[0].data = data.data.history.map(
              (item) => item.priceUsd,
            );
            // this.priceLine.series[1].data = data.data.history.map(
            //   (item) => item.priceCny,
            // );
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    },
    async _reloadData() {
      await window.ethereum.enable();
      this.url = `${currencUrl}?addr=${getAddress()}`;
      const powerOfValue = await verifyPowerOf();
      this.vipPower = powerOfValue;
      getUserBalance().then((res) => {
        this.userBalance = utils.fromWei(res, 'ether');
      });
      const setGetBalanceValue = await setGetBalance().then((res) => utils.fromWei(res, 'ether'));
      const times10BalanceValue = await times10Balance().then((res) => utils.fromWei(res, 'ether'));
      this.setGetBalanceValue = setGetBalanceValue;
      this.times10BalanceValue = times10BalanceValue;
      const power = await powerOf();
      console.log(power);

      this.power = this._torm(power);
      // const totalPowNumber = await totalPower();
      // this.totalPowNumber = this._torm(totalPowNumber);

      // profitOf
      const profitOfValue = await profitOf().then((res) => utils.fromWei(res, 'ether'));
      this.profitOfPower = `${this._torm(profitOfValue * 1000)}/s`;

      this.url = `${currencUrl}?addr=${getAddress()}`;
      this.qrcodeUrl = this._qrcode(this.url);
    },
    getBlob(base64) {
      const mimeString = base64.split(',')[0].split(':')[1].split(';')[0]; // mime类型
      const byteString = atob(base64.split(',')[1]); // base64 解码
      const arrayBuffer = new ArrayBuffer(byteString.length); // 创建缓冲数组
      const intArray = new Uint8Array(arrayBuffer); // 创建视图
      for (let i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
      }
      return new Blob([intArray], {
        type: mimeString,
      });
    },
    savePicture(Url = this.qrcodeUrl) {
      const blob = new Blob([''], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = Url;
      // eslint-disable-next-line prefer-destructuring
      a.download = Url.replace(/(.*\/)*([^.]+.*)/gi, '$2').split('?')[0];
      const e = document.createEvent('MouseEvents');
      e.initMouseEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
      );
      a.dispatchEvent(e);
      URL.revokeObjectURL(url);
    },
    _qrcode(url) {
      const div = document.createElement('div');
      // eslint-disable-next-line new-cap
      const code = new QRCode(div, {
        text: url,
        width: 500,
        height: 500,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.L,
      });
      // 这里如果需要在页面上展示的话，就将div节点给添加到dom树上去；node.appendChild(div)
      const canvas = code._el.querySelector('canvas'); // 获取生成二维码中的canvas，并将canvas转换成base64
      const base64Text = canvas.toDataURL('image/png');
      const blob = this.getBlob(base64Text); // 将base64转换成blob对象
      return window.URL.createObjectURL(blob);
    },
    _downLoadImg() {
      const _this = this;
      // 获取想要转换的dom节点
      // var dom = document.querySelector('body');
      const dom = document.getElementById('tp');
      html2canvas(dom, {
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
      }).then((canvas) => {
        // 将canvas转换成图片渲染到页面上
        const url = canvas.toDataURL('image/png');// base64数据
        const image = new Image();
        image.src = url;
        _this.savePicture(url);
      });
    },
    handleShareIt() {
      // eslint-disable-next-line global-require
      const bannerniu = require('../assets/bannerniu.png');
      // eslint-disable-next-line global-require

      // eslint-disable-next-line no-undef
      layer.open({
        content: `
              <div>
              <div class='content'>
                <div class="title">
                  <img width="25" src="/favicon.ico" alt="">

                  <font style="color: #f0b90c">ETH2</font> 质押挖矿
                </div>

                <div style="display: flex;">
                  <div class="qrcode-left">
                    <h4>全网已质押</h4>
                    <p class="number-text">${this.eth2info.balance}ETH</p>
                    <h4>节点数</h4>
                    <p class="number-text">${this.eth2info.count}</p>
                    <h4>ETH2POS价格（USDT）</h4>
                    <p class="number-text">${this.currentPrice.toFixed(2)}/枚</p>
                  </div>
                  <div class="qrcode-right">
                    <img class="logoIcon" :src="${bannerniu}" alt="">
                    <img  src="${this.qrcodeUrl}" alt="" />
                  </div>
                </div>
              </div>
              <div class="img-box">
                <div>
                  <p><font style="color:#fff">建立去中心化自治社区</font> 支持钱包：metamask imtoken</p>
                </div>
              </div>
            </div>
              `,
        // shade: 'background-color: rgba(0,0,0,1)',
        className: 'shareLayer',
        anim: 'up',
        style: 'background-color: rgba(0,0,0,1);position:fixed; left:0; top:0; width:100%; height:100%; border: none; -webkit-animation-duration: .5s; animation-duration: .5s;',
        btn: '点击下载',
        yes: () => {
          this._downLoadImg();
          // document.getElementById('btn').click();
          // eslint-disable-next-line no-undef
          layer.closeAll();
        },
        // time: 3,
      });
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    vuLine,
    // eslint-disable-next-line vue/no-unused-components
  },

  mounted() {
    this._reloadData();
    this.qrcodeUrl = this._qrcode(this.url);
    window.ethereum.on('accountsChanged', () => {
      this._reloadData();
    });
  },

  created() {
    this._getPriceHistory();
    this._getEth2info();
  },
};
</script>
<style lang='scss' >
.select-box {
  margin: 0 0.8rem;
  height: 1.06667rem;
  border: 2px solid #f6db0c;
  border-radius: 0.08rem;
  // padding: 0 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  input {
    // height: 100%;
    padding-left: 20px;
    flex: 1;
    background: #02040f;
    min-width: 200px;
    font-size: 28px;
    outline: none;
    border: none;
    color: #fff;
  }
  select {
    flex: 1;
    outline: none;
    font-size: 0px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    width: 70%;
    padding: 0 20%; //左右一定要设置
    background: transparent;

    text-align: center;
    text-align-last: center;
    option {
      text-align: center;

      display: inline-block;
    }

    height: 90px;
    line-height: 90px;
  }
  .select-btn {
    font-size: 30px;
    background: #f6db0c;
    color: #fff;
    width: 30%;
    text-align: center;
    height: 90px;
    line-height: 90px;
  }
}
.Inquire {
  margin: 25px;
  border-radius: 20px;
  /* width: 100%; */
  padding-bottom: 35px;
  background-image: linear-gradient(to bottom, #000, #070d36 120%);
  .url-box {
    h2 {
      color: #fff;
      font-size: 20px;
    }
    display: flex;
    justify-content: space-around;
    > div {
      width: 40%;
      display: flex;
      justify-content: space-around;
    }
  }
}
.btn {
  position: relative;
  z-index: 1;
  margin: 20px;
  margin-top: 60px;
  line-height: 95px;
  background: #f6db0c;
  color: #fff;
  font-size: 33px;
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
}
.home {
  overflow: hidden;
  background-color: #02040f;
  min-width: 100vw;
  min-height: 100%;
  .color-yellow {
    color: #f6db0c !important;
  }
  .copy-box {
    padding: 0 80px;
    dd {
      display: flex;

      justify-content: space-between;
    }
    p,
    span {
      font-size: 30px;
      color: #ccc;
      line-height: 50px;
    }
    span.ex {
      display: block;
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    dt {
      overflow: hidden;
      line-height: 50px;
      color: #ccc;
      margin-bottom: 10px;
    }
  }
  .font-box {
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    line-height: 80px;
    font-size: 30px;
  }
  .get-income {
    line-height: 80px;
    padding: 0 25px;
    .content {
      span {
        color: #f6007c;
      }
      color: #fff;
      font-size: 30px;
      padding: 0 55px;
      display: flex;
      justify-content: space-between;
    }
  }
  .card-box {
    /* width: 100%; */
    border-radius: 20px;
    margin: 25px;
    min-height: 400px;
    padding: 40px 0;
    background-image: linear-gradient(to bottom, #000, #070d36 120%);
    .card-body {
      display: flex;
      .card-left {
        display: flex;
        flex-direction: column;
        width: 60%;
        justify-content: center;
        img {
          height: 67px;
          margin-right: 30px;
          vertical-align: middle;
        }
        .logo-title {
          font-weight: bold;
          color: #f6007c;
          font-size: 25px;
        }
      }
      .card-right {
        img {
          height: 4.06667rem;
        }
      }
      .text-link {
        font-size: 30px;
        color: #1b92ff;
        text-align: center;
      }
      .box-yellow {
        /* max-width: 300px; */
        font-size: 25px;
        color: #fff;
        font-weight: bold;
        margin: 30px auto;
      }
    }
    .progress-text {
      font-size: 20px;
      text-align: center;
      color: #ccc;
      margin-top: 20px;
    }
  }
}
.card-ETH2 {
  background-image: linear-gradient(to bottom, #070d36, #000 120%);
  margin: 30px;
  border-radius: 20px;
  margin-top: 50px;
  padding: 35px 20px;
  h2 {
    font-size: 40px;
    color: #fff;
    padding-bottom: 10px;
  }
  .lien-text {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    word-break: break-all;
    color: #ccc;
    p {
      flex: 1;
    }
  }
}
.max-prompt {
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin: 0 60px;
  margin-bottom: 33px;
}
.card {
  box-shadow: 0px 0px 35px 0px rgba(94, 85, 126, 0.15);
  border-radius: 20px;
  position: relative;
  z-index: 1;
  border: 2px solid #f6db0c;
  margin: 0 20px;
  /* margin-top: 50px; */
  /* margin-bottom: 40px; */
  // min-height: 355px;
  padding-top: 32px;
  padding-bottom: 50px;

  .jss42 {
    &:nth-last-child(2) {
      margin-bottom: 40px;
    }
    height: 80px;
    align-items: center;
    border: 2px solid #f6db0c;

    margin: 0 60px;

    border-radius: 6px;
    display: flex;
    color: #f6db0c;
    input {
      // height: 100%;
      padding-left: 20px;
      flex: 1;
      background: #02040f;
      min-width: 200px;
      font-size: 28px;
      outline: none;
      border: none;
      color: #fff;
    }
    p {
      font-size: 28px;
      min-width: 120px;
      /* flex: 2; */
      padding: 10px;
    }
    .inbtn {
      min-width: 160px;
      font-size: 28px;
      height: 100%;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #f6db0c;
    }
  }
}
.pos-select {
  padding: 0 78px;
  margin-top: 50px;
  position: relative;
  z-index: 9;
  display: flex;
  width: 100%;
  .jss42 {
    &:nth-last-child(2) {
      margin-bottom: 40px;
    }
    height: 80px;
    align-items: center;
    border: 2px solid #f6db0c;
    width: 100%;
    border-radius: 6px;
    display: flex;
    color: #f6db0c;
    input {
      // height: 100%;
      padding-left: 20px;
      flex: 1;

      background: #02040f;
      min-width: 200px;
      font-size: 28px;
      outline: none;
      border: none;
      color: #fff;
    }
    p {
      font-size: 28px;
      min-width: 120px;
      /* flex: 2; */
      padding: 10px;
    }
    .inbtn {
      min-width: 160px;
      font-size: 28px;
      height: 100%;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #f6db0c;
    }
  }
}
.slider {
  position: relative;
  padding: 0 60px;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 26px;
  img {
    position: absolute;
    top: -210px;
    z-index: 1;
  }
  .progress {
    height: 28px;
    width: 100%;
    display: flex;
    border: 1px solid #e3c814;
    border-radius: 14px;
    overflow: hidden;
    span {
      /* margin-left: -60px; */
      color: #fff;
    }
    .in {
      height: 100%;
      background: rgba(246, 219, 12, 0.5);
    }
    .point {
      width: 13px;
      height: 100%;
      float: right;
      border-radius: 10px;
      background: #e3c814;
    }
    .auto {
      flex: 1;
    }
  }
}
.whitelist {
  margin: 0 20px;
  margin-bottom: 100px;
  border: 2px solid #e3c814;
  border-radius: 10px;
  min-height: 535px;
  h3 {
    height: 78px;
    line-height: 78px;
    font-size: 28px;
    color: #fff;
    /* padding-left: 50px; */
    padding-right: 50px;
  }
  .font-box1 {
    padding: 25px 20px;
    color: #d5d5d5;
    p {
      font-size: 28px;
      line-height: 1.5;
    }
  }
}
.my-t-40 {
  margin-top: 40px !important;
}
.my-t-50 {
  margin-top: 50px !important;
}
.pool-box {
  background: #000;
  margin: 30px;
  border-radius: 10px;
  min-height: 400px;
  padding: 30px 20px;

  .pool-title {
    margin-bottom: 10px;
    word-break: break-all;
    font-size: 23px;
    color: #999;
  }
  h3 {
    color: #fff;
    font-size: 32px;
    line-height: 3;
  }
  .cion-box {
    margin: 20px 0;
    display: flex;
    & > div {
      width: 92px;
      height: 92px;
      text-align: center;
      margin-right: 25px;
    }
    .cion-img {
      /* width: 92px; */
      max-height: 100%;
    }
    h4 {
      color: #fff;
      font-size: 75px;
      line-height: 138px;
    }
  }
  .price-box {
    margin-top: 30px;
  }
  .price {
    font-size: 25px;
    font-weight: bold;
    color: #999;
  }
}
.ellipsis {
  display: inline-block;
  overflow: hidden;
  -webkit-line-clamp: 1;
  // width: 100%
  text-overflow: ellipsis;
  white-space: nowrap;
}
.layui-m-layerbtn, .layui-m-layerbtn span{
  border-radius:0 !important;
}
.shareLayer {
  background: #000;
  border: none;
  .layui-m-layerbtn{
    position: fixed;
     z-index: 1;
    bottom: 0;
    span{
      border-radius:0 !important;
    }
  }
  .layui-m-layercont {
    margin-top: 55%;
      z-index: 1;
    padding: 0;
    text-align: left;
    .content{
      color: #fff;
       /* padding-top: 76px; */
       width: 100% !important;
  max-height: 681px;
  background: url("../assets/qrurl.png");
  background-size: 100% 100%;
         padding:30px;
    }
    .title {
      line-height: 60px;
      font-size: 35px;
      margin-bottom: 60px;
      > img{
        vertical-align: middle;
         margin-right: 10px;
      }
    }
    .qrcode-left{
       h4 {
      font-size: 25px;
      color: #fff;
    }
    .number-text {
      font-size: 45px;
      line-height: 1.8;
      color: #19b18c;
    }
    }
     .qrcode-right{
        width: 300px;
            margin: 0 auto;
      align-self: center;
        background: #fff;
        padding: 5px;
        position: relative;
         z-index: 1;
        .logoIcon{
          z-index: 1;
          display: none;
          position: absolute;
          top:50%;
          left: 50%;
          margin-top: -25PX;
          margin-left: -25PX;
          background: #fff;
          border-radius: 10PX;
          width: 50PX;
        }
          img{
            vertical-align: middle;
            width: 100%;
          }
        }
    .img-box {
      margin-top: 10px;
      /* position: absolute; */
      display: flex;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        p {
          color: #f0b90c;
        }
      }
    }

    .logo {
      max-width: 200px;
      height: 200px;
      margin-right: 100px;
      vertical-align: bottom;
    }
  }
}
</style>
