import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    titulo: {
        type: String,
        required: 'O título é obrigatório!',
    },
    num_paginas: {
        type: Number,
        default: 1,
    },
    isbn: {
        type: String,
        required: 'O ISBN é obrigatório!',
    },
    editora: {
        type: String,
        required: "O nome da Editora é obrigatório!"
    }
},
{
    timestamps: true
}
);

const EsquemaBook = mongoose.models.Book || mongoose.model('Book', esquema);

export default EsquemaBook;