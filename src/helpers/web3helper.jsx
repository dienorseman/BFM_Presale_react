
async function loadPresaleData(address,contract,setUserBalanceInfo) {
    const userBalanceInfo1 = await contract.call("getUserBalanceInfo",[address,0])
    const userBalanceInfo2 = await contract.call("getUserBalanceInfo",[address,1])
    const userBalanceInfo3 = await contract.call("getUserBalanceInfo",[address,2])
    let tempArray = []
    tempArray.push(userBalanceInfo1,userBalanceInfo2,userBalanceInfo3);
    setUserBalanceInfo(tempArray)
}
async function ClaimTokens(contract,phase){
    if(phase === 1){
        try{
            console.log("Claim function called on phase",phase)
            console.log(contract)
            await contract.call("releaseTokens",[0])
            }
            catch(err){
                alert(err.reason)
            }
    }
    else if(phase === 2){
        try{
            await contract.call("releaseTokens",[1])
            }
            catch(err){
                alert(err.reason)
            }
    }
    else if(phase === 3){
        try{
        await contract.call("releaseTokens",[2])
        }
        catch(err){
            alert(err.reason)
        }
    }
    else{
        return "Invalid Phase";
    }
    
}
async function loadTokenHolding(address,tokenContract,setTokenHolding){
    const tokens = await tokenContract.call('balanceOf',[address])
    setTokenHolding(tokens)
}

export {loadPresaleData,ClaimTokens,loadTokenHolding}