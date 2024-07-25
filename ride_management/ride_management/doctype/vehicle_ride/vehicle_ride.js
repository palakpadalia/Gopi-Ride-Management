// Copyright (c) 2024, Sanskar Technolab and contributors
// For license information, please see license.txt
frappe.ui.form.on('Vehicle Ride', {
    refresh: function(frm) {
        // Ensure the image field is displayed in the sidebar
        if (frm.doc.image) {
            frm.sidebar.image_wrapper.find(".sidebar-image").attr("src", frm.doc.image);
        }
    }
});
