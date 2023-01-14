const earning = require('./earnings');
const deduction = require('./deductions');

earn = earning(60400);
deduced = deduction(earn, 'old');

const net_pay = earn - deduced;

console.log('Net Pay', net_pay);