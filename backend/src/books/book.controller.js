const Book = require('./book.model');

const postBook = async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(201).json({message: "Book posted succesfully!", book: newBook});
    } catch (error) {
        console.error("Error posting book:", error);
        res.status(500).json("Error posting book")
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).json({message: "Books fetched succesfully!", books});
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json("Failed to fetch book")
    }
}

const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id);

        if (!book) {
            res.status(404).json({message: "Books not found!"});
        }

        res.status(200).json({message: "Books fetched succesfully!", book});
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json("Failed to fetch book")
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateBook) {
            res.status(404).json({message: "Book not found!"});
        }

        res.status(200).json({message: "Book updated succesfully!", book: updateBook});
    } catch (error) {
        console.error("Error updating a book:", error);
        res.status(500).json("Failed to update a book")
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            res.status(404).json({message: "Book not found!"});
        }

        res.status(200).json({message: "Book deleted succesfully!", book: deletedBook});
    } catch (error) {
        console.error("Error deleting a book:", error);
        res.status(500).json("Failed to delete a book")
    }
}

module.exports = {
    postBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}