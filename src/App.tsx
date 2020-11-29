import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

import index from './pages/index';
import initiatives from './pages/initiatives';
import involved from './pages/involved';
import mission from './pages/mission';
import news from './pages/news';
import newsarticle from './pages/newsarticle';
import notFound from './pages/404';
import officers from './pages/officers';
import committee from './pages/committee';
import classcouncil from './pages/classcouncil';

export default function App() {
	return (
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
					<Route path='/:path' component={notFound} />
					<Route path='/' exact component={index} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
