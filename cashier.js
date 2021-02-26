const denom = [
  { name: "ONE HUNDRED", val: 100 },
  { name: "TWENTY", val: 20 },
  { name: "TEN", val: 10 },
  { name: "FIVE", val: 5 },
  { name: "ONE", val: 1 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
]



function checkCashRegister(price, cash, cid) {
  let outPut = { status: null, change: []},
      change = cash - price,
      ttlCid = cid.reduce((acc,curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc
    },
    {total: 0}),
    outPutChange = denom.reduce(function(acc,curr) {
        let value = 0
        while (ttlCid[curr.name] > 0 && change >= curr.val) {
        ttlCid[curr.name] -= curr.val;
        value = Math.round((value + curr.val)*100)/100;
        change = Math.round((change - curr.val) * 100) / 100
      }
      if (value > 0) {
        acc.push([curr.name, value]);
      } return acc;
  }, [])
  if (ttlCid.total < change) {
    outPut.status = "INSUFFICIENT_FUNDS"
    return outPut
  }
  if (ttlCid.total === change) {
    outPut.status = "CLOSED"
    outPut.change = cid
    return outPut;
  }
 if (outPutChange.length < 1 || change > 0) {
    outPut.status = "INSUFFICIENT_FUNDS";
    return outPut;
  }
  outPut.status = "OPEN";
  outPut.change = outPutChange;
  return outPut;
}

console.log(checkCashRegister(19.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
