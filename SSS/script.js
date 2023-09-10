const faqList = document.querySelector('.faq-list');
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
const faqs = [
  {
    question: "Takıma katılmak için herhangi bir yazılım bilgisine ihtiyacım var mı?",
    answer: "Hayır, gerekmiyor. Takıma tasarım alanından katılarak da önemli katkılar sağlayabilirsiniz."
  },
  {
    question: 'Takıma kaç kişi alınacak?',
    answer: "Takıma toplam 3 kişi alınacak. Bu kişilerden 2'si tasarımcı ve 1'i yazılımcı olarak alınacak."
  },
  {
    question: 'Takıma alınan kişileri kim seçecek?',
    answer: " Takım kaptanının liderliğinde, mevcut üyeler tarafından seçilecektir."
  },
  {
    question: 'Takıma kaç kişi alınacak?',
    answer: "Takıma toplam 3 kişi alınacak. Bu kişilerden 2'si tasarımcı ve 1'i yazılımcı olarak alınacak."
  },
  {
    question: 'Takıma alınan kişileri kim seçecek?',
    answer: " Takım kaptanının liderliğinde, mevcut üyeler tarafından seçilecektir."
  },
  {
    question: 'Takıma kaç kişi alınacak?',
    answer: "Takıma toplam 3 kişi alınacak. Bu kişilerden 2'si tasarımcı ve 1'i yazılımcı olarak alınacak."
  },
  {
    question: 'Takıma alınan kişileri kim seçecek?',
    answer: " Takım kaptanının liderliğinde, mevcut üyeler tarafından seçilecektir."
  },
  

  // Diğer soru-cevapları buraya ekleyebilirsiniz
];

function createFAQItem(question, answer) {
  const faqItem = document.createElement('section');
  faqItem.classList.add('faq-item');

  const questionElem = document.createElement('h2');
  questionElem.classList.add('question');
  questionElem.textContent = question;

  const answerElem = document.createElement('p');
  answerElem.classList.add('answer');
  answerElem.textContent = answer;

  faqItem.appendChild(questionElem);
  faqItem.appendChild(answerElem);

  return faqItem;
}

function animateFAQ(item) {
  const answerElem = item.querySelector('.answer');
  const isExpanded = answerElem.classList.contains('show');

  if (isExpanded) {
    answerElem.style.maxHeight = '0';
  } else {
    answerElem.style.maxHeight = answerElem.scrollHeight + 'px';
  }

  answerElem.classList.toggle('show');
}

function populateFAQs() {
  faqs.forEach(faq => {
    const faqItem = createFAQItem(faq.question, faq.answer);
    faqList.appendChild(faqItem);

    faqItem.addEventListener('click', () => {
      animateFAQ(faqItem);
    });
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
  SSS.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Öntanımlı davranışı engelle

      // Yeni bir siteye yönlendir
      window.location.href = "";
    });
  });

});
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

populateFAQs();