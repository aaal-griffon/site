document.addEventListener("DOMContentLoaded", function() {
    const devMembers = document.getElementById("dev-members");
    const designMembers = document.getElementById("design-members");
    const ekipler = document.querySelectorAll("#ekipler");
    const mainpage = document.querySelectorAll("#mainpage");
    const basvurLinks = document.querySelectorAll("#register-link");
    const iletisim = document.querySelectorAll("#iletisim");
    const SSS = document.querySelectorAll("#SSS");
    const developers = [
        { name: "Efe Kerem EFEKAN", role: "Python Yazılımcısı" },
        { name: "Asaf Emir ÖZDEMİR", role: "Java Yazılımcısı" },
        // Diğer yazılımcılar burada eklenebilir
    ];

    const designers = [
        { name: "Ömer Efe ÇELİK", role: "İhanın Kanadından Sorumlu Kişi" },
      
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
          window.location.href = "index.html";
        });
      });
      basvurLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "../kayit/index.html";
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
    showMembers(developers, devMembers);
    showMembers(designers, designMembers);
});
