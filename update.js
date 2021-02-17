const{Books} = require('./models')

const query={
    where: { id:1}
}
Books.update({
    genre:'Makanan'
},query)
.then(() =>{
    console.log("Buku berhasil diupdate")
    process.exit()
})
.catch(err =>{
    console.error("Gagal mengupdate buku!")
})