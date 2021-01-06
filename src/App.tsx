import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

const classcouncil = lazy(() => import('./pages/classcouncil'));
const committee = lazy(() => import('./pages/committee'));
const feedback = lazy(() => import('./pages/feedback'));
const index = lazy(() => import('./pages/index'));
const initiatives = lazy(() => import('./pages/initiatives'));
const involved = lazy(() => import('./pages/involved'));
const mission = lazy(() => import('./pages/mission'));
const news = lazy(() => import('./pages/news'));
const newsarticle = lazy(() => import('./pages/newsarticle'));
const newsletter = lazy(() => import('./pages/newsletter'));
const notfound = lazy(() => import('./pages/404'));
const officers = lazy(() => import('./pages/officers'));

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
					<Switch>
						<Route path='/initiatives' exact component={initiatives} />
						<Route path='/involved' exact component={involved} />
						<Route path='/news/:articleId' component={newsarticle} />
						<Route path='/newsletter' exact component={newsletter} />
						<Route path='/news' exact component={news} />
						<Route path='/mission' exact component={mission} />
						<Route path='/officers' exact component={officers} />
						<Route path='/committee' exact component={committee} />
						<Route path='/class-council' exact component={classcouncil} />
						<Route path='/feedback' exact component={feedback} />
						<Route path='/:path' component={notfound} />
						<Route path='/' exact component={index} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</Suspense>
	);
}
