!function(){var e=document.querySelectorAll(".navigation a"),t=document.querySelector(".menu-burger-link"),c=document.querySelector(".menu-close-link"),l=document.querySelector(".dropdown-menu"),n=document.getElementById("switch-theme"),o=localStorage.getItem("ui-theme");e.forEach((function(e){e.href===window.location.href?e.classList.add("active"):e.classList.remove("active")})),n.classList.toggle("checked","dark"===o),t.addEventListener("click",(function(e){e.preventDefault(),l.classList.toggle("visually-hidden"),t.classList.toggle("visually-hidden"),c.classList.toggle("visually-hidden"),document.body.classList.toggle("no-scroll")})),n.addEventListener("change",(function(){n.classList.toggle("checked"),localStorage.setItem("ui-theme",n.classList.contains("checked")?"dark":"light")}))}();
//# sourceMappingURL=shoplist.b00652b3.js.map