// Product array
const products = [
    { id: "p1", name: "Product A" },
    { id: "p2", name: "Product B" },
    { id: "p3", name: "Product C" },
    { id: "p4", name: "Product D" }
];

// Populate the product dropdown
window.onload = function () {
    let select = document.getElementById("product");
    if (select) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
};

// Update review count in localStorage
function updateReviewCount() {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
}
