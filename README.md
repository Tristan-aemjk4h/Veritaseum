# Veritaseum
The VeritaseumToken & Veritaseum Crowd-sale TokenPurchase Smart Contracts

The VeritaseumToken is an ERC20 compliant Ethereum token. The TokenPurchase contract has features to enable users to purchase *VERI* tokens during a Initial Coin Offer (ICO).
The code-base makes use of Zeppelin and its standard templates, Safemath and other standard solidity best practices.
All non-standard functions are unit tested.

There are some initialization steps to be done to setup the two contracts to work with each other. When doing truffle test this is done inside of the tests. 
1. Upload both contracts to Ethereum. 
2. Call the **approve** function on the **VeritaseumToken** contract [with the address of the TokenPurchase contract and the value amount of the tokens to be allocated towards the ICO]. In the case of the Veritaseum ICO this is set to 51000000000000000000000000 (this number is the amount of token units allocated towards the ICO). The TokenPurchase contract now has access to these tokens (may *spend* them) in the event of someone buying them, but itself does not yet know where the tokens are located, next....
3. Call the **setToken** function on the **TokenPurchase** contract [with the address of the VeritaseumToken on the Ethereum network] (this will tell the TokenPurchase contract where to find the VeritaseumToken contract tokens, that it will use to allocate to users who buy these VERI tokens).

For more information about the ICO and usage of the TokenPurchase contract read the [tutorial here](https://github.com/RFVenter/Veritaseum/blob/master/tutorial/Veritaseum%20Tutorial.pdf)

Tokens are non-refundable, even if the minimum target is not reached.

[![Veritaseum](https://blog.veritaseum.com/images/logo/latest_logo.png)](https://blog.veritaseum.com/) 

[![RFVenter](https://rfventer.github.io/images/g01.png)](www.rfv.io)
