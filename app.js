const toggle = document.querySelector(".toggle");
const kartica1 = document.querySelector(".kartica1");
const kartica2 = document.querySelector(".kartica2");
const kartica3 = document.querySelector(".kartica3");

toggle.addEventListener("change", () => {
  kartica1.classList.toggle("show-monthly");
  kartica2.classList.toggle("show-monthly");
  kartica3.classList.toggle("show-monthly");
});
