
import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import PostActions from '../actions/PostActions'

class PostForm extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let post = this.props.post
    post[e.target.name] = e.target.value
    PostActions.updatePost(post)
  }

  render() {
    let { post, children } = this.props
    let { title, id, date, content } = post
    let s = {
    }

    return (
      <form {...this.props}>
        {children}
        <input type='hidden' name='id' value={id} />
        <input type='hidden' name='date' value={date} />
        <Input
          name='title'
          label='Title'
          value={title}
          onChange={this.handleChange} />
        <Textarea
          name='content'
          label='Content'
          rows={24}
          value={content || ''}
          onChange={this.handleChange} />
        <button>Save</button>
      </form>
    )
  }

}

export default PostForm

