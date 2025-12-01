/* ===============================
   MOBILE NAVIGATION
================================*/
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show");
}

/* ===============================
   TABS FUNCTION
================================*/
function showTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");

    // Hide all tab contents
    tabs.forEach(tab => tab.classList.remove("active"));

    // Remove active button highlight
    buttons.forEach(btn => btn.classList.remove("active-btn"));

    // Show selected tab
    document.getElementById(tabName).classList.add("active");

    // Highlight clicked button
    event.target.classList.add("active-btn");
}
