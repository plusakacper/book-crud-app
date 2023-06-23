import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from './MainTemplate';
import { AuthorsProvider } from './AuthorsProvider';
import AuthorsView from './AuthorsView';
import AuthorInfoView from './AuthorInfoView';
import AuthorAddForm from './AuthorAddForm';
import AuthorEditForm from './AuthorEditForm';

const App = () => {
	return (
		<BrowserRouter>
			<AuthorsProvider>
				<Routes>
					<Route
						path='/'
						element={
							<MainTemplate>
								<div>Books</div>
							</MainTemplate>
						}
					/>
					<Route path='/authors' element={<AuthorsView />} />
					<Route path='/authors/:id' element={<AuthorInfoView />} />
					<Route path='/authors/add' element={<AuthorAddForm />} />
					<Route path='/authors/edit/:id' element={<AuthorEditForm />} />
				</Routes>
			</AuthorsProvider>
		</BrowserRouter>
	);
};

export default App;
