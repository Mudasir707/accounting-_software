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
function calculateTotal() {
    const qty = Number(document.getElementById("qty").value) || 0;
    const rate = Number(document.getElementById("rate").value) || 0;

    document.getElementById("total").value = qty * rate;
}

window.calculateTotal = calculateTotal;

function saveSale() {
    const invoiceNo = document.getElementById("invoiceNo").value;
    const invoiceDate = document.getElementById("invoiceDate").value;
    const customerName = document.getElementById("customerName").value;
    const itemName = document.getElementById("itemName").value;
    const qty = Number(document.getElementById("qty").value);
    const rate = Number(document.getElementById("rate").value);
    const total = Number(document.getElementById("total").value);

    if (!customerName || !itemName || !invoiceDate) {
        alert("Please fill all required fields.");
        return;
    }

    alert(
        "Invoice Saved!\n\n" +
        "Invoice: " + invoiceNo +
        "\nCustomer: " + customerName +
        "\nTotal: ₹" + total
    );

    console.log({
        invoiceNo,
        invoiceDate,
        customerName,
        itemName,
        qty,
        rate,
        total
    });
}

window.saveSale = saveSale;

// Set today's date automatically
document.getElementById("invoiceDate").value =
    new Date().toISOString().split("T")[0];
