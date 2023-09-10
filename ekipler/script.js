const devMembers = document.getElementById("dev-members");
const designMembers = document.getElementById("design-members");
const ekipler = document.querySelectorAll("#ekipler");
const mainpage = document.querySelectorAll("#mainpage");
const basvurLinks = document.querySelectorAll("#register-link");
const iletisim = document.querySelectorAll("#iletisim");
const SSS = document.querySelectorAll("#SSS");
//mobile menus values
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body2');
const content = document.querySelector(".header-container"); // Sayfa içeriği bölümünü seçin
const delay = 980; // 2000 milisaniye (2 saniye) gecikme
const delay2 = 480; 
let timeout;
function hideMobileMenu() {

  mobileMenu.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  mobileMenu.classList.add("inactive");
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.style.display = 'block';
      mobileMenu.style.animation = "slideReverse 0.5s ease-in-out";
      content.style.animationName = "slideReverse";
      mobileMenu.classList.add("inactive");
      mobileMenu.classList.remove("active");
      timeout = setTimeout(hideMobileMenu, delay2);
    



  } else {
      mobileMenu.style.display = 'block';
      mobileMenu.classList.remove("inactive");
      mobileMenu.classList.add("active");
      mobileMenu.style.animation = "slideUp 1s ease-in-out";
      content.style.animationName = "slideUp";


  }
  });

  body.addEventListener('click', () => {
    // Mobil menüyü göster veya gizle
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.style.animation = "slideReverse 0.5s ease-in-out";
      content.style.animationName = "slideReverse";
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("inactive");
      timeout = setTimeout(hideMobileMenu, delay2);
    }
  });
  const developers = [
    { name: "Efe Kerem EFEKAN", role: "Drone Yazılım Sorumlusu" },
    { name: "Ömer Efe Çelik", role: "Görüntü İşleme Sorumlusu" },
  ];

  const designers = [
    { name: "Alperen Önder", role: "İhanın Kanadından Sorumlu Kişi" },
    { name: "Belinay Demirer", role: "İhanın Kurulumundan Sorumlu Kişi" },
  ];

  function showMembers(members, container) {
    members.forEach(member => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member");
      memberDiv.style.animation = "fadeIn 1s ease-out";

      const name = document.createElement("h3");
      name.textContent = member.name;

      const role = document.createElement("p");
      role.textContent = member.role;

      memberDiv.appendChild(name);
      memberDiv.appendChild(role);

      memberDiv.style.backgroundColor = "#3498db"; // Belirli bir renk (Mavi)

      container.appendChild(memberDiv);
    });
  }
  ekipler.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Öntanımlı davranışı engelle

      // Yeni bir siteye yönlendir
      window.location.href = "";
    });
  });
  basvurLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Öntanımlı davranışı engelle

      // Yeni bir siteye yönlendir
      window.location.href = "../kayit/";
    });
  });
  mainpage.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Öntanımlı davranışı engelle

      // Yeni bir siteye yönlendir
      window.location.href = "../";
    });
  });
  iletisim.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Öntanımlı davranışı engelle

      // Yeni bir siteye yönlendir
      window.location.href = "../iletisim/";
    });
  });
  SSS.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Öntanımlı davranışı engelle

      // Yeni bir siteye yönlendir
      window.location.href = "../SSS/";
    });
  });
  //mobile menu codes
  function setMobileMenuStyle() {
    const header = document.querySelector('header');
    mobileMenu.style.width = header.offsetWidth + 'px'; // Header genişliğine ayarlayın
    mobileMenu.style.backgroundColor = getComputedStyle(header).backgroundColor; // Header arkaplan rengine ayarlayın
  }
  function placeMobileMenuBelowHeader() {
    const header = document.querySelector('header');
    const headerHeight = header.clientHeight;

    mobileMenu.style.top = headerHeight + 'px';
  }
  window.addEventListener('DOMContentLoaded', setMobileMenuStyle);
  window.addEventListener('resize', setMobileMenuStyle);
  window.addEventListener('DOMContentLoaded', placeMobileMenuBelowHeader);
  window.addEventListener('resize', placeMobileMenuBelowHeader);

  showMembers(developers, devMembers);
  showMembers(designers, designMembers);
});
