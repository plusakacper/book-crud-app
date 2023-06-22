import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from './MainTemplate';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<MainTemplate>
							<div>Books</div>
						</MainTemplate>
					}
				/>
				<Route
					path='/authors'
					element={
						<MainTemplate>
							<div>Authors</div>
						</MainTemplate>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
