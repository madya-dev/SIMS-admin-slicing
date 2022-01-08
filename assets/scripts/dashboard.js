const btnSidebar = document.getElementById("btn-sidebar");
const sidebar = document.getElementById("sidebar");

btnSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});
