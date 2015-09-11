import React, {Component} from 'react'
import DocumentTitle from 'react-document-title'
import Ideas from './Ideas'

class IndexPage extends Component {
  render () {
    const defaultPage = parseInt(this.props.params.page) || 1
    return (
      <DocumentTitle title="LightBulb">
        <div className="inner-page">
          <Ideas page={defaultPage} />
        </div>

      </DocumentTitle>
    )
  }
}

export default IndexPage
