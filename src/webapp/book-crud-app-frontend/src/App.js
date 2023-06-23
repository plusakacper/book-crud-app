import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthorsProvider } from './AuthorComponents/AuthorsProvider';
import AuthorsView from './AuthorComponents/AuthorsView';
import AuthorInfoView from './AuthorComponents/AuthorInfoView';
import AuthorAddForm from './AuthorComponents/AuthorAddForm';
import AuthorEditForm from './AuthorComponents/AuthorEditForm';
import { BooksProvider } from './BooksComponents/BooksProvider';
import BooksView from './BooksComponents/BooksView';
import BookInfoView from './BooksComponents/BookInfoView';
import BookAddForm from './BooksComponents/BookAddForm';
import BookEditForm from './BooksComponents/BookEditForm';

const App = () => {
	return (
		<BrowserRouter>
			<AuthorsProvider>
				<BooksProvider>
					<Routes>
						<Route path='/' element={<BooksView />} />
						<Route path='/books/:id' element={<BookInfoView />} />
						<Route path='/books/add' element={<BookAddForm />} />
						<Route path='/books/edit/:id' element={<BookEditForm />} />
						<Route path='/authors' element={<AuthorsView />} />
						<Route path='/authors/:id' element={<AuthorInfoView />} />
						<Route path='/authors/add' element={<AuthorAddForm />} />
						<Route path='/authors/edit/:id' element={<AuthorEditForm />} />
					</Routes>
				</BooksProvider>
			</AuthorsProvider>
		</BrowserRouter>
	);
};

export default App;
