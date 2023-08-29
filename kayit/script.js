const ekipler = document.querySelectorAll("#ekipler");
const mainpage = document.querySelectorAll("#mainpage"); 
const iletisim = document.querySelectorAll("#iletisim");
const SSS = document.querySelectorAll("#SSS");
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body2');
const content = document.querySelector(".header-container"); // Sayfa içeriği bölümünü seçin
const delay = 1400; // 2000 milisaniye (2 saniye) gecikme
const delay2 = 900; 
let timeout;
function hideMobileMenu() {

  mobileMenu.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
  mobileMenu.classList.add("inactive");
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.style.display = 'block';
      mobileMenu.style.animation = "slideReverse 1.5s ease-in-out";
      content.style.animationName = "slideReverse";
      mobileMenu.classList.add("inactive");
      mobileMenu.classList.remove("active");
      timeout = setTimeout(hideMobileMenu, delay);
    



  } else {
      mobileMenu.style.display = 'block';
      mobileMenu.classList.remove("inactive");
      mobileMenu.classList.add("active");
      mobileMenu.style.animation = "slideUp 1.5s ease-in-out";
      content.style.animationName = "slideUp";


  }
  });

  body.addEventListener('click', () => {
    // Mobil menüyü göster veya gizle
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.style.animation = "slideReverse 1s ease-in-out";
      content.style.animationName = "slideReverse";
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("inactive");
      timeout = setTimeout(hideMobileMenu, delay2);
    }
  });

    ekipler.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "../ekipler/";
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

  });