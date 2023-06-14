import { Router } from "express";
import { DbConnection } from "../middlewares/db-connection";
import EsquemaBook from "../models/book";

interface Book {
    id: number,
    titulo: string,
    num_paginas: number,
    isbn: string,
    editora: string
}

interface BookOnDB extends Book {
    _id: string
}

const bookRoutes = Router();

bookRoutes.get("/", DbConnection, async (_, res) => {
    try {
        const books: BookOnDB[] = await EsquemaBook.find();

        res.json(books);
        
    } catch (error) {
        console.error(error);
    }
});

bookRoutes.get("/:id", DbConnection, async (req, res) => {
    const { id } = req.params;
    
    try {
        const book = await EsquemaBook.findOne({id: parseInt(id)});
        
        res.json(book);
    } catch (error) {
        console.error(error);

        res.json({
            message: "Error: we cann't find book!"
        })
    }

});

bookRoutes.post("/", DbConnection, async (req, res) => {
    const newBook = {...req.body};

    try {
        const respostaDB: any = await EsquemaBook.create(newBook);

        res.json(respostaDB);
        
    } catch (error) {
        console.error(error);
        
        res.json({
            data: { 
                message: "Error on creating book!"
            }
        });
    }
});

bookRoutes.put("/:id", DbConnection, async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    
    try {
        await EsquemaBook.findOneAndUpdate(
            {id: parseInt(id)}, 
            {...body}
        )

        res.json({
            data: { 
                message: "The book has been successfully updated!"
            }
        });
        
    } catch (error) {
        console.error(error);

        res.json({
            data: { 
                message: "Error on update this book!"
            }
        });
    }
});

bookRoutes.delete("/:id", DbConnection, async (req, res) => {
    try {
        const { id } = req.params;

        await EsquemaBook.findOneAndDelete({id: parseInt(id)});

        res.json({
            data: { 
                message: "The book has been successfully removed!"
            }
        });
        
    } catch (error) {
        console.error(error)

        res.json({
            data: {
                messagem: "Error on removing book"
            }
        })
    }
});
 
export default bookRoutes;