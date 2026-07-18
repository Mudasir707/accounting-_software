function calculateTotal() {
    const qty = Number(document.getElementById("qty").value) || 0;
    const rate = Number(document.getElementById("rate").value) || 0;

    document.getElementById("total").value = qty * rate;
}

function saveSale() {

    const sale = {
        invoiceNo: document.getElementById("invoiceNo").value,
        date: document.getElementById("invoiceDate").value,
        customer: document.getElementById("customerName").value,
        item: document.getElementById("itemName").value,
        qty: Number(document.getElementById("qty").value),
        rate: Number(document.getElementById("rate").value),
        total: Number(document.getElementById("total").value)
    };

    console.log("Sale Saved", sale);

    alert("Invoice Saved Successfully!");
}
