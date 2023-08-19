document.addEventListener("DOMContentLoaded", function() {
    const ekipler = document.querySelectorAll("#ekipler");
    const mainpage = document.querySelectorAll("#mainpage"); 
    const iletisim = document.querySelectorAll("#iletisim");
    const SSS = document.querySelectorAll("#SSS");
    ekipler.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "../ekipler/index.html";
        });
      });
      mainpage.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "../index.html";
        });
      });
      iletisim.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "../iletisim/index.html";
        });
      });
      SSS.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "../SSS/index.html";
        });
    });
  });