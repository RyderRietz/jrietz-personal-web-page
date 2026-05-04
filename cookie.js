document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-cookie");

  if (!popup || !acceptBtn) return;

  const hasAccepted = localStorage.getItem("cookieAccepted");

  if (!hasAccepted) {
    popup.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    popup.style.display = "none";
  });
});
