
import React from 'react'
import { Link } from 'react-router'
import PostStore from '../stores/PostStore'
import ModeActions from '../actions/ModeActions'
import markdown from '../util/markdown'
import { colors } from '../util/styles'
import A from './A'
import Button from './Button'
import BtnLink from './BtnLink'

class DeletePost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
    ModeActions.update('danger')
  }

  componentWillUnmount() {
    ModeActions.update('default')
  }

  handleSubmit(e) {
    e.preventDefault()
    let id = parseFloat(e.target.id.value)
    console.log(id)
    PostStore.destroy(id)
    this.props.router.transitionTo('home')
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    let html = markdown.render(content)

    let s = {
      h1: {
      }
    }

    if (!id) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <h1 style={s.h1}>Delete {title}</h1>
        <form
          method='POST'
          action={`/${id}?_method=DELETE`}
          onSubmit={this.handleSubmit}>
          <input type='hidden' name='id' value={post.id} />
          <Button text='Delete' color={colors.red[3]} />
          <BtnLink to='post' params={{ id: id }} text='Cancel' />
        </form>
      </div>
    )
  }

}

DeletePost.defaultProps = {
  post: {}
}


export default DeletePost

