import React, {Component} from 'react'
import {Route, RouteHandler, Link} from 'react-router'
import request from 'superagent'
import _ from '../utils'

class Ideas extends Component {
  state = {
    ideas: [],
    next: '',
    prev: ''
  }
  static propTypes = {
    page: React.PropTypes.number
  }
  componentDidMount () {
    const gh_token = _.gh_token() ? `&access_token=${_.gh_token()}` : ''
    this.fetchIdeas(`https://api.github.com/repos/LightBulb/LightBulb/issues?per_page=20&page=${this.props.page}${gh_token}`)
  }
  handlePage (url) {
    this.fetchIdeas(url)
  }
  fetchIdeas (url) {
    request
      .get(url)
      .end((err, res) => {
        let {prev, next} = _.pages(res.headers.link)
        let ideas = JSON.parse(res.text)
        this.setState({
          ideas,
          next,
          prev
        })
      })
  }
  render () {
    const ideas = this.state.ideas.map((idea) => {
      return (
        <div className="idea" key={idea.number}>
          <h3>
            <Link to="idea" params={{number: idea.number}}>{idea.title}</Link>
          </h3>
        </div>
      )
    })
    var prevPage, nextPage
    if (this.state.prev) {
      prevPage = this.props.page - 1
    }
    if (this.state.next) {
      nextPage = this.props.page + 1
    }
    return (
      <div className="ideas">
        {this.state.ideas.length > 1 ? ideas : 'Loading from GitHub...'}
        {this.state.prev ? <Link to="index" params={{page: prevPage}}>Prev</Link>: null}
        {this.state.next ? <Link to="index" params={{page: nextPage}}>Next</Link> : null}
      </div>
    )
  }
}

export default Ideas
