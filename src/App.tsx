import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import index from './pages/index';
import initiatives from './pages/initiatives';
import news from './pages/news';
import newsArticle from './pages/newsArticle';
import notFound from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/initiatives" exact component={initiatives} />
          <Route path="/news/:articleId" component={newsArticle} />
          <Route path="/news" exact component={news} />
          <Route path="/:path" component={notFound} />
          <Route path="/" exact component={index} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
