// Copyright (c) 2024, Sanskar Technolab and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ride', {
    refresh: function(frm) {
        calculate_total_amount(frm);
    },
    estimated_km: function(frm) {
        calculate_total_amount(frm);
    },
    'ride_add_on': {
        amount: function(frm, cdt, cdn) {
            calculate_total_amount(frm);
        }
    }
});

function calculate_total_amount(frm) {
    let total_amount = 0;
    let estimated_km = frm.doc.estimated_km || 0;

    frm.doc.services.forEach(function(row) {
        total_amount += (row.amount || 0) * estimated_km;
    });

    frm.set_value('total_amount', total_amount);
}
