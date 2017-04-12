var VeritaseumToken = artifacts.require("./VeritaseumToken.sol");
var BigNumber = require('bignumber.js');

contract('VeritaseumToken', function(accounts) {
  it("should have some variables setup from the initialization", () => {
    var token;
    const STARTTIME = 1493130600;
    const TOTALSUPLY = 100000000000000000000000000; 
    const ONEDAY = 24 * 60 * 60;
    var totalTokens; 

    return VeritaseumToken.deployed().then(function(instance) {
      token = instance;

      acc2StartAmount = accounts[1]

      return token.owner.call();
    }).then(function(owner) {
      assert.equal(owner, accounts[0], "The owner should be set to account 1");
      return token.totalSupply.call();
    }).then(function(supply) {
      assert.equal(supply, TOTALSUPLY, "The total supply should be 100M with 18 decimal places");
      return token.setNow(STARTTIME - ONEDAY);
    }).then(function() {
      // 
      return token.purchaseTokens(accounts[1], {from: accounts[1], value: 1000000000000000000});
    }).catch(function(error) { if(error.toString().indexOf("invalid JUMP") != -1) { console.log("Got expected solidity throw. Test succeeded."); } else { assert(false, error.toString()); }
    }).then(function() {
      return token.setNow(STARTTIME + Math.round(ONEDAY*0));
    }).then(function() {
      return token.purchaseTokens.call(accounts[1], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 37500000000000000000);
      return token.purchaseTokens.call(accounts[1], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 56250000000000000000);
      return token.purchaseTokens.call(accounts[1], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 138750000000000000000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*1));
    }).then(function() {
      return token.purchaseTokens.call(accounts[2], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 33333333333333336000);
      return token.purchaseTokens.call(accounts[2], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 50000000000000004000);
      return token.purchaseTokens.call(accounts[2], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 123333333333333343200);
      return token.setNow(STARTTIME + Math.round(ONEDAY*2.1));
    }).then(function() {
      return token.purchaseTokens.call(accounts[2], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 33296337402885680000);
      return token.purchaseTokens.call(accounts[2], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 49944506104328520000);
      return token.purchaseTokens.call(accounts[2], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 123196448390677016000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*2.9));
    }).then(function() {
      return token.purchaseTokens.call(accounts[3], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 33003300330033005000);
      return token.purchaseTokens.call(accounts[3], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 49504950495049507500);
      return token.purchaseTokens.call(accounts[3], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 122112211221122100000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*3.7));
    }).then(function() {
      return token.purchaseTokens.call(accounts[3], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 32715376226826610000);
      return token.purchaseTokens.call(accounts[3], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 49073064340239910000);
      return token.purchaseTokens.call(accounts[3], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 121046892039258457000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*4));
    }).then(function() {
      return token.purchaseTokens.call(accounts[3], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 32608695652173914000);
      return token.purchaseTokens.call(accounts[3], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 48913043478260871000);
      return token.purchaseTokens.call(accounts[3], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 120652173913043481800);
      return token.setNow(STARTTIME + Math.round(ONEDAY*5));
    }).then(function() {
      return token.purchaseTokens.call(accounts[1], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 32258064516129034000);
      return token.purchaseTokens.call(accounts[1], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 48387096774193545000);
      return token.purchaseTokens.call(accounts[1], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 119354838709677425800);
      return token.setNow(STARTTIME + Math.round(ONEDAY*9));
    }).then(function() {
      return token.purchaseTokens.call(accounts[1], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 30927835051546390000);
      return token.purchaseTokens.call(accounts[1], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 46391752577319585000);
      return token.purchaseTokens.call(accounts[1], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 114432989690721643000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*11));
    }).then(function() {
      return token.purchaseTokens.call(accounts[1], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 30303030303030305000);
      return token.purchaseTokens.call(accounts[1], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 45454545454545450000);
      return token.purchaseTokens.call(accounts[1], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 112121212121212128500);
      return token.setNow(STARTTIME + Math.round(ONEDAY*12));
    }).then(function() {
      return token.purchaseTokens.call(accounts[1], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 30000000000000000000);
      return token.purchaseTokens.call(accounts[1], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 45000000000000000000);
      return token.purchaseTokens.call(accounts[1], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 111000000000000000000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*13));
    }).then(function() {
      return token.purchaseTokens.call(accounts[1], {value: 1000000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 30000000000000000000);
      return token.purchaseTokens.call(accounts[1], {value: 1500000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 45000000000000000000);
      return token.purchaseTokens.call(accounts[1], {value: 3700000000000000000});
    }).then(function(current) {
      assert.equal(current.toNumber(), 111000000000000000000);
      return token.setNow(STARTTIME + Math.round(ONEDAY*1));
    }).then(function() {
      return token.purchaseTokens(accounts[1], {value: 1000000000000000000});
    }).then(function(tx) {
      return token.purchaseTokens(accounts[1], {value: 1500000000000000000});
    }).then(function(tx) {
      return token.purchaseTokens(accounts[1], {value: 3700000000000000000});
    }).then(function(tx) {
      return token.balanceOf.call(accounts[1]);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), 206666666666666683200);
      return token.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      bn1 = new BigNumber(TOTALSUPLY);
      bn2 = new BigNumber("206666666666666683200");
      assert.equal(balance.toNumber(), bn1.minus(bn2).toNumber());

    });
  });
});


