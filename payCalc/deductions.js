const deduction = function(basic, scheme){

    var pt = 200;
    console.log('PT = ', pt);

    var tax;
    yearly = basic *13;

    if (scheme == 'new'){
        if (yearly <= 250000) 
            tax = 0;

        else if (yearly <= 500000) 
            tax = 5*yearly/100;

        else if (yearly <= 750000)
            tax = 12500 + 10*(yearly - 500000)/100;

        else if (yearly <= 1000000)
            tax = 37500 + 15*(yearly - 750000)/100;

        else if (yearly <= 1250000)
            tax = 75000 + 20*(yearly - 1000000)/100;

        else if (yearly <= 1500000)
            tax = 125000 + 25*(yearly - 1250000)/100;

        else
            tax = 187500 + 30*(yearly - 1500000)/100;

        tax += tax*0.4;
        var tds_rate = tax/yearly;
        var monthly_tds = tds_rate*yearly/13;
        console.log('TDS (new regime) = ', monthly_tds)
    }
    else{
        if (yearly <= 250000) 
            tax = 0;

        else if (yearly <= 500000) 
            tax = 5*yearly/100;

        else if (yearly <= 750000)
            tax = 12500 + 20*(yearly - 500000)/100;

        else if (yearly <= 1000000)
            tax = 62500 + 20*(yearly - 750000)/100;

        else if (yearly <= 1250000)
            tax = 112500 + 30*(yearly - 1000000)/100;

        else if (yearly <= 1500000)
            tax = 187500 + 30*(yearly - 1250000)/100;

        else
            tax = 262500 + 30*(yearly - 1500000)/100;

        tax += tax*0.4;
        var tds_rate = tax/yearly;
        var monthly_tds = tds_rate*yearly/13;
        console.log('TDS (old regime) = ', monthly_tds)
    }

    var gis = null;
    console.log('GIS = ', gis);

    var society = null;
    console.log('Society = ', society);

    var gpf = null;
    console.log('GPF = ', gpf);

    var elect = null;
    console.log('Elect. = ', elect);

    var inst_loan = null;
    console.log('Inst. Loan = ', inst_loan);

    var bank_loan = null;
    console.log('Bank Loan = ', bank_loan);

    var fest_adv = null;
    console.log('Fest Adv = ', fest_adv);

    var dcps = null;
    console.log('DCPS = ', dcps);

    var recovery = null;
    console.log('Recovery = ', recovery);

    var mediclaim = null;
    console.log('Mediclaim = ', mediclaim);

    var donation = null;
    console.log('Donation = ', donation);

    var other_reco = null;
    console.log('Other Reco = ', other_reco);

    var epf = null;
    console.log('EPF = ', epf);

    var tra_rec = null;
    console.log('TRA REC = ', tra_rec);

    var dcps_delay = null;
    console.log('DCPS DELAY = ', dcps_delay);

    var vol_pf = null;
    console.log('VOL PF = ', vol_pf);

    var gis_ao = 480;
    console.log('GIS (AO) = ', gis_ao);

    var gpf_ao = 25000;
    console.log('GPF (AO) = ', gpf_ao);

    var gpf_dir = null;
    console.log('GPF (DIR) = ', gpf_dir);

    var licence_fe = null;
    console.log('Licence FE = ', licence_fe);

    var gpf_dir = null;
    console.log('GPF (DIR) = ', gpf_dir);

    var service = null;
    console.log('Service = ', service);

    var parking = null;
    console.log('Parking = ', parking);

    var total = pt + monthly_tds + gis + gpf;
    console.log('Total deduction = ', total)
    return total;
}

module.exports = deduction;