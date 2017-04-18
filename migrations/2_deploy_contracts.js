var VeritaseumToken = artifacts.require("./VeritaseumToken.sol");
var TokenPurchase = artifacts.require("./TokenPurchase.sol");

module.exports = function(deployer) {
  deployer.deploy(VeritaseumToken);
  deployer.deploy(TokenPurchase);
};
