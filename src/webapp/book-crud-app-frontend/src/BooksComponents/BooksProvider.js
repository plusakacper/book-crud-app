import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const BooksContext = React.createContext({
	books: [],
	findedBook: null,
	fetchBooks: () => {},
	setLoading: () => {},
	fetchBookById: () => {},
	addBook: () => {},
	updateBook: () => {},
	removeBook: () => {}
});

export const BooksProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [findedBook, setFindedBook] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchBooks();
	}, []);

	const setLoading = () => {
		setIsLoading(true);
	};

	const fetchBooks = async () => {
		try {
			const response = await axios.get('/books');
			const data = await response.data;
			setBooks(data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchBookById = async id => {
		try {
			const response = await axios.get(`/books/${id}`);
			const data = await response.data;
			setFindedBook(data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const addBook = async book => {
		try {
			await axios.post('/books', book);
			setIsLoading(true);
		} catch (err) {
			console.log(err);
		}
	};

	const updateBook = async book => {
		try {
			await axios.put('/books', book);
			setIsLoading(true);
		} catch (err) {
			console.log(err);
		}
	};

	const removeBook = async id => {
		try {
			await axios.delete(`/books/${id}`);
			setIsLoading(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<BooksContext.Provider
			value={{
				books,
				findedBook,
				isLoading,
				setLoading,
				fetchBookById,
				addBook,
				fetchBooks,
				updateBook,
				removeBook
			}}>
			{children}
		</BooksContext.Provider>
	);
};
