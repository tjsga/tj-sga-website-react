import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

const index = React.lazy(() => import('./pages/index'));
const initiatives = React.lazy(() => import('./pages/initiatives'));
const involved = React.lazy(() => import('./pages/involved'));
const mission = React.lazy(() => import('./pages/mission'));
const news = React.lazy(() => import('./pages/news'));
const newsarticle = React.lazy(() => import('./pages/newsarticle'));
const notfound = React.lazy(() => import('./pages/404'));
const officers = React.lazy(() => import('./pages/officers'));
const committee = React.lazy(() => import('./pages/committee'));
const classcouncil = React.lazy(() => import('./pages/classcouncil'));
const loading = () => <h1>Loading...</h1>;

export default function App() {
	return (
		<Suspense fallback={loading}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path='/initiatives' exact component={initiatives} />
						<Route path='/involved' exact component={involved} />
						<Route path='/news/:articleId' component={newsarticle} />
						<Route path='/news' exact component={news} />
						<Route path='/mission' exact component={mission} />
						<Route path='/officers' exact component={officers} />
						<Route path='/committee' exact component={committee} />
						<Route path='/class-council' exact component={classcouncil} />
						<Route path='/:path' component={notfound} />
						<Route path='/' exact component={index} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</Suspense>
	);
}
