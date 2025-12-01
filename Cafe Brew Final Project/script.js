/* ===============================
   MOBILE MENU TOGGLE
================================*/
function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("show");
}

/* Close menu when clicking a link (mobile only) */
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("show");
    });
});


/* ===============================
   SMOOTH SCROLL FOR INDEX.HTML
================================*/
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* ===============================
   MENU PAGE – TAB SWITCHING
================================*/
function showTab(id) {

    // Hide all tab content
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    // Remove active class from all buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active-btn");
    });

    // Show selected tab
    document.getElementById(id).classList.add("active");

    // Highlight clicked tab button
    event.target.classList.add("active-btn");
}


/* ===============================
   ADD TO CART (FRONT-END ONLY)
================================*/
let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(item + " added to cart!");
    console.log("Cart:", cart);
}
