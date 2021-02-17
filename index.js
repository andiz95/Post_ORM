const express = require('express')
// const db= require("./queries")
const app = express()
const{ Books} =require('./models')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//GET all books
app.get("/books",(req,res) =>{
 Books.findAll()
 .then(book => {
     res.status(200).json(book)
 })
})

//GET books by ID
app.get('/books/:id',(req,res)=>{
    Books.findOne({
        where:{ id:req.params.id}
    })
    .then(book =>{
        res.status(200).json(book)
    })
})

//POST an Book
    
app.post('/books',(req,res)=> {
    Books.create({
        isbn:req.body.isbn,
        judul:req.body.judul,
        sinopsis:req.body.sinopsis,
        penulis:req.body.penulis,
        genre:req.body.genre
    })
    .then(book => {
        res.status(201).json(book)
    }).catch(err => {
        res.status(422).json("Can't add book")
    })
})

//PUT an book
app.put('/books/:id',(req,res)=>{
    Books.update({
        isbn:req.body.isbn,
        judul:req.body.judul,
        sinopsis:req.body.sinopsis,
        penulis:req.body.penulis,
        genre:req.body.genre
    },{
        where:{ id:req.params.id}
    })
    .then(book => {
        res.status(201).json("Update Success")
    }).catch(err => {
        res.status(422).json("Can't update book")
    })
})

//DELETE an book
app.delete('/books/:id', (req,res) =>{
    // console.log(req.params.id)
    // select id from books where id is NULL
    Books.destroy({
        where:{ id:req.params.id}
    })
    .then(book => {
        res.status(201).json("Delete Success")
    }).catch(err => {
        res.status(422).json("Can't delete book")
    })
})


app.listen(3000, () => {
    console.log('Server ready')
})