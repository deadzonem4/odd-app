import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Urls from './pages/Urls';
import NewsPage from './pages/NewsPage';
import Test from './pages/Test';
import ErrorPage from './pages/ErrorPage';
import AppRoute from './layouts/AppRoute';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';
import './common/styles/main.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <AppRoute layout={HomeLayout} exact path="/odd-app" component={NewsPage} />
            <AppRoute layout={MainLayout} exact path="/odd-app/test" component={Test} />
            <AppRoute layout={MainLayout} exact path="/odd-app/urls" component={Urls} />
            <AppRoute layout={HomeLayout} exact path="/odd-app/news" component={NewsPage} />
            <AppRoute layout={MainLayout} component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

