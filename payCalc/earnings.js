const earning = function(basic){
    console.log('BASIC = ', basic)

    var da = 34*basic/100;
    console.log('DA = ' , da);

    var hra = 27*basic/100;
    console.log('HRA = ' , hra);

    var cla = 300;
    console.log('CLA = ' , cla);

    var wa = null;
    console.log('WA = ' , wa);

    var tra = 2700;
    console.log('TRA = ' , tra);

    var sp_allow = null;
    console.log('Sp. Allow. = ' , sp_allow);

    var p_pay = null;
    console.log('P. Pay = ' , p_pay);

    var da_arrears = null;
    console.log('DA Arrears = ' , da_arrears);

    var sp_pay = null;
    console.log('Sp. Pay = ' , sp_pay);

    var sp_hostel = null;
    console.log('Sp. HOSTEL = ' , sp_hostel);

    var sal_arrea = null;
    console.log('Sal. Arrea = ' , sal_arrea);

    var refund_oth = null;
    console.log('REFUND OTH = ' , refund_oth);

    var add_rem = null;
    console.log('Add. Rem. = ' , add_rem);

    var total = basic + da + hra + cla + tra;
    console.log('Total Gross = ', total)
    return total;
}

module.exports = earning;