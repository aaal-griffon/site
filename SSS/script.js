const faqList = document.querySelector('.faq-list');
const ekipler = document.querySelectorAll("#ekipler");
const mainpage = document.querySelectorAll("#mainpage");
const basvurLinks = document.querySelectorAll("#register-link");
const iletisim = document.querySelectorAll("#iletisim");
const SSS = document.querySelectorAll("#SSS");
const faqs = [
  {
    question: "Takıma katılmak için herhangi bir yazılım bilgisine ihtiyacım var mı?",
    answer: "Hayır, gerekmiyor. Takıma tasarım alanından katılarak da önemli katkılar sağlayabilirsiniz."
  } , 
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
      window.location.href = "../ekipler/index.html";
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
    SSS.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Öntanımlı davranışı engelle
    
          // Yeni bir siteye yönlendir
          window.location.href = "index.html";
        });
    });
  });
populateFAQs();