var VeritaseumToken = artifacts.require("./VeritaseumToken.sol");

contract('VeritaseumToken', function(accounts) {
  it("should have some variables setup from the initialization", () => {
    var token;
    const STARTAMOUNTS = 100000000000000000000;   //100 Ether
    const STARTTIME = 1493130600;
    const ONEDAY = 24 * 60 * 60;
    var acc2LastAmount;

    return VeritaseumToken.deployed().then(function(instance) {
      token = instance;

      acc2StartAmount = accounts[1]

      return token.owner.call();
    }).then(function(owner) {
      assert.equal(owner, accounts[0], "The owner should be set to account 1");
      return token.totalSupply.call();
    }).then(function(supply) {
      assert.equal(supply, 100000000000000000000000000, "The total supply should be 100M with 18 decimal places");
      return token.setNow(STARTTIME - ONEDAY);
    }).then(function() {
      //purchaseTokens(address _recipient)| different Eth, different times~ send direct~ test different recipient
      //1, 2ETH
      // -1, 0, 2, 3, 7, 13
      return token.purchaseTokens(accounts[1], {from: accounts[1], value: 1000000000000000000});
    }).catch(function(error) { if(error.toString().indexOf("invalid JUMP") != -1) { console.log("Got expected solidity throw. Test succeeded."); } else { assert(false, error.toString()); }
    }).then(function() {
      return token.setNow(STARTTIME+1);
    }).then(function() {
      //the purchase should work this time
      return token.purchaseTokens(accounts[1], {from: accounts[1], value: 1000000000000000000});
    });
  });
});



