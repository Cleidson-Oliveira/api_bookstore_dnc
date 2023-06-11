import { Router } from "express";

interface Book {
    id: number,
    titulo: string,
    num_paginas: string,
    isbn: string,
    editora: string
}

const bookRoutes = Router();

const books: Book[] = [];

bookRoutes.get("/", (_, res) => {
    res.json(books);
});

bookRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const book = books.find(book => {
        return Number(id) === book.id;
    })

    res.json(book);
});

bookRoutes.post("/", (req, res) => {
    const newBook = {...req.body};

    books.push(newBook);

    res.json(newBook);
});

bookRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const bookRemovedIndex = books.findIndex(book => {
        return book.id == Number(id)
    });

    books[bookRemovedIndex] = { ...body };

    res.json(books);

});

bookRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const bookRemovedIndex = books.findIndex(book => {
        return book.id === Number(id)
    });

    books.splice(bookRemovedIndex, 1)

    res.json(books);
});
 
export default bookRoutes;