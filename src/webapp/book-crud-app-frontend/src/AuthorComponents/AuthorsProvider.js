import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const AuthorsContext = React.createContext({
	authors: [],
	findedAuthor: null,
	fetchAuthors: () => {},
	setLoading: () => {},
	fetchAuthorById: () => {},
	addAuthor: () => {},
	updateAuthor: () => {},
	removeAuthor: () => {},
	error: ''
});

export const AuthorsProvider = ({ children }) => {
	const [authors, setAuthors] = useState([]);
	const [findedAuthor, setFindedAuthor] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		fetchAuthors();
	}, []);

	const setLoading = () => {
		setIsLoading(true);
	};

	const fetchAuthors = async () => {
		try {
			const response = await axios.get('/authors');
			const data = await response.data;
			setAuthors(data);
			setIsLoading(false);
			// setError('');
		} catch (err) {
			console.log(err);
		}
	};

	const fetchAuthorById = async id => {
		try {
			const response = await axios.get(`/authors/${id}`);
			const data = await response.data;
			setFindedAuthor(data);
			setIsLoading(false);
			setError('');
		} catch (err) {
			console.log(err);
		}
	};

	const addAuthor = async author => {
		try {
			await axios.post('/authors', author);
			setIsLoading(true);
			setError('');
		} catch (err) {
			console.log(err);
		}
	};

	const updateAuthor = async author => {
		try {
			await axios.put('/authors', author);
			setIsLoading(true);
			setError('');
		} catch (err) {
			console.log(err);
		}
	};

	const removeAuthor = async id => {
		try {
			await axios.delete(`/authors/${id}`);
			setIsLoading(true);
			setError('');
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<AuthorsContext.Provider
			value={{
				authors,
				findedAuthor,
				isLoading,
				setLoading,
				fetchAuthorById,
				addAuthor,
				fetchAuthors,
				updateAuthor,
				removeAuthor,
				error
			}}>
			{children}
		</AuthorsContext.Provider>
	);
};
