const{ Book} = require('./models')

Book.create({
    id: 1,
    isbn: 'B20-222-11',
    judul:'Belajar Postgre YUKK',
    sinopsis:'database ini adalah sangat kuat dan dapat diandalkan, proses pemulihan mudah',
    penulis:'Erwin Smith',
    genre:'Teknologi'
    // approved:true
    
})
   .then(book =>{
     console.log(book)
})