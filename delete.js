const{ Book} = require('./models')

Book.destroy({
    where:{
        genre:'Makanan'
    }
})
.then(()=> console.log("Buku dengan id 1 berhasil di hapus"))