import React, {Component} from 'react'
import Router, {Route, RouteHandler, Link, DefaultRoute} from 'react-router'
import _ from './utils'
import IndexPage from './components/IndexPage'
import AboutPage from './components/AboutPage'
import IdeaPage from './components/IdeaPage'
require('./main.styl')

let gh_access_token = _.query().gh_access_token
if (gh_access_token) {
  localStorage.setItem('gh_access_token', gh_access_token)
} else {
  gh_access_token = localStorage.getItem('gh_access_token')
}



class App extends Component {
  render () {
    return (
      <div className="main">
        <header className="header">
          <span className="header-logo" />
          <div className="header-heading">
            <h1 className="sitename">
              <Link to="/">
                LightBulb
              </Link>
            </h1>
            <h2 className="description">Show off your ideas, inventions and innovations!</h2>
          </div>
        </header>
        <RouteHandler />
      </div>
    )
  }
}

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={IndexPage}/>
    <Route name="index" path="/:page" handler={IndexPage} />
    <Route path="about" handler={AboutPage} />
    <Route name="idea" path="idea/:number" handler={IdeaPage} />
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body)
})
