function forwardSeconds(seconds) {
  var req = {
    jsonrpc: "2.0",
    method: "evm_increaseTime",
    params: [reconds],  
    id: new Date().getTime()
  }

  return new Promise((resolve, reject) => {
    web3.currentProvider.sendAsync(req, (err, result) => {
      if (err) return reject(err)
      if (result && result.error) {
        return reject(new Error("RPC Error: " + (result.error.message || result.error)))
      }
      resolve(result)
    })
  })
}