const express = require('express');
const mysql = require('mysql2');
const app = express();
var path = require('path');
var http = require('http');
var fs = require('fs');



var dir = __dirname

//const server = http.createServer(app);

app.use(express.static(dir));


// Middleware for parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Veritabanı bağlantısı için gerekli bilgileri doldurun
const connection = mysql.createConnection({
  host: 'localhost', // Veritabanı sunucu adı
  user: 'server', // Veritabanı kullanıcı adı
  password: '3131', // Veritabanı parolası
  database: 'veriler', // Kullanılacak veritabanı adı
  port: 3131, // Veritabanı portu
});

// Veritabanı bağlantısını oluştur
connection.connect((err) => {
  if (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
    return;
  }

  console.log('Veritabanına başarıyla bağlandı.');
});

// Tabloyu oluştur
const tableCreationSQL = `CREATE TABLE IF NOT EXISTS basvuru_tablosu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  donem VARCHAR(10) NOT NULL,
  alan VARCHAR(20) NOT NULL,
  experience TEXT,
  motivation_letter TEXT
)`;

connection.query(tableCreationSQL, (err, result) => {
  if (err) {
    console.error('Hata:', err);
  } else {
    console.log('Tablo başarıyla oluşturuldu veya zaten var.');
  }
});

// Form verilerini kaydetme işlemleri
app.post('/veri_kaydet', (req, res) => {
  const { first_name, last_name, email, phone, donem, alan, experience, motivation_letter } = req.body;
  console.log('kod buraya kadar geldi');
  if (first_name && last_name && email && phone && donem && alan) {
    const insertSQL = `INSERT INTO basvuru_tablosu (first_name, last_name, email, phone, donem, alan, experience, motivation_letter)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(
      insertSQL,
      [first_name, last_name, email, phone, donem, alan, experience, motivation_letter],
      (err, result) => {
        if (err) {
          console.error('Hata:', err);
          res.status(500).send('Bir hata oluştu.');
        } else {
          console.log('Başvuru başarıyla kaydedildi.');
          res.redirect('/kayit/tesekkurform.html');
        }
      }
    );
  } else {
    res.status(400).send('Bazı form alanları eksik.');
  }
});

// Serveri dinlemeye başla
app.listen(3132, () => {
  console.log('Sunucu 3132 portunda dinleniyor...');
});
