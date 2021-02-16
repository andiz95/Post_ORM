const express = require('express')
// const db= require("./queries")
const app = express()
const{ Book} =require('./models')

app.use(express.json())

//GET all books
app.get("/books",(req,res) =>{
 Book.findAll()
 .then(books => {
     res.status(200).json(books)
 })
})

//GET books by ID
app.get('/books/:id',(req,res)=>{
    Book.findOne({
        where:{ id:req.params.id}
    })
    .then(books =>{
        res.status(200).json(books)
    })
})

//POST an Book
app.post('/books',(req,res)=> {
    Book.create({
        // id:req.body.id,
        isbn:req.body.isbn,
        judul:req.body.judul,
        sinopsis:req.body.sinopsis,
        penulis:req.body.penulis,
        genre:req.body.genre
    })
    .then(books => {
        res.status(200).json(books)
    }).catch(err => {
        res.status(422).json("Can't create book")
    })
})

//PUT an book
app.put('/books/:id',(req,res)=>{
    Book.update({
        // id:req.body.id,
        isbn:req.body.isbn,
        judul:req.body.judul,
        sinopsis:req.body.sinopsis,
        penulis:req.body.penulis,
        genre:req.body.genre
    },{
        where:{ id:req.params.id}
    })
    .then(books => {
        res.status(201).json(books)
    }).catch(err => {
        res.status(422).json("Can't update book")
    })
})


app.listen(3000, () => {
    console.log('Server ready')
})