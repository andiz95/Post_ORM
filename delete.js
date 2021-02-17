const{ Books} = require('./models')

Books.destroy({
    where:{
        id:2
    }
})
.then(()=> console.log("Buku dengan id 2 berhasil di hapus"))