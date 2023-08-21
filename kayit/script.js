const ekipler = document.querySelectorAll("#ekipler");
const mainpage = document.querySelectorAll("#mainpage"); 
const iletisim = document.querySelectorAll("#iletisim");
const SSS = document.querySelectorAll("#SSS");
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body2');
document.addEventListener("DOMContentLoaded", function() {
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