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
mobileMenuButton.addEventListener('click', () => {
  // Mobil menüyü göster veya gizle
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
});

body.addEventListener('click', () => {
  // Mobil menüyü göster veya gizle
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  }
});
document.addEventListener("DOMContentLoaded", function () {

  const developers = [
    { name: "Efe Kerem EFEKAN", role: "Python Yazılımcısı" },
    { name: "Asaf Emir ÖZDEMİR", role: "Java Yazılımcısı" },
    { name: "Osman Yiğit ACIELMA", role: "C# Yazılımcısı" },

    // Diğer yazılımcılar burada eklenebilir
  ];

  const designers = [
    { name: "Ömer Efe ÇELİK", role: "İhanın Kanadından Sorumlu Kişi" },
    { name: "Kutay Berk GÜL", role: "İhanın Kurulumundan Sorumlu Kişi" },
    { name: "Yağız Batın POLAT", role: "İhanın Fiziğinden Sorumlu Kişi" },
    // Diğer tasarımcılar burada eklenebilir
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
      window.location.href = "../ekipler";
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