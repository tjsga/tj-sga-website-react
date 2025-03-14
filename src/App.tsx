import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

const ClassCouncil = lazy(() => import('./pages/classcouncil'));
const Committee = lazy(() => import('./pages/committee'));
const Feedback = lazy(() => import('./pages/feedback'));
const Index = lazy(() => import('./pages/index'));
const Initiatives = lazy(() => import('./pages/initiatives'));
const Involved = lazy(() => import('./pages/involved'));
const Mission = lazy(() => import('./pages/mission'));
const News = lazy(() => import('./pages/news'));
const NewsArticle = lazy(() => import('./pages/newsarticle'));
const Newsletter = lazy(() => import('./pages/newsletter'));
const NotFound = lazy(() => import('./pages/404'));
const Officers = lazy(() => import('./pages/officers'));

const loading = (
	<div
		style={{
			width: '100vw',
			height: '100vh',
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<h3 style={{ textAlign: 'center', width: '100vw' }}>Loading...</h3>
	</div>
);

export default function App() {
	return (
		<Suspense fallback={loading}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/initiatives' element={<Initiatives />} />
						<Route path='/involved' element={<Involved />} />
						<Route path='/news/:articleId' element={<NewsArticle />} />
						<Route path='/newsletter' element={<Newsletter />} />
						<Route path='/news' element={<News />} />
						<Route path='/mission' element={<Mission />} />
						<Route path='/officers' element={<Officers />} />
						<Route path='/committee' element={<Committee />} />
						<Route path='/class-council' element={<ClassCouncil />} />
						<Route path='/feedback' element={<Feedback />} />
						<Route path='/:path' element={<NotFound />} />
						<Route path='/' element={<Index />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Suspense>
	);
}
