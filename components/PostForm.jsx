
import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import BtnLink from './BtnLink'
import { scale } from '../util/styles'

class PostForm extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let post = this.props.post
    post[e.target.name] = e.target.value
    // PostActions.updatePost(post)
  }

  render() {
    let {
      post,
      method,
      action,
      onSubmit,
      children
    } = this.props
    let { title, id, date, content } = post
    let s = {
      root: {
        marginBottom: scale[7]
      }
    }

    return (
      <form
        method={method}
        action={action}
        onSubmit={onSubmit}
        style={s.root}>
        <input type='hidden' name='id' value={id} />
        <input type='hidden' name='date' value={date} />
        <Input
          name='title'
          label='Title'
          autoFocus={true}
          value={title}
          onChange={this.handleChange} />
        <Textarea
          name='content'
          label='Content'
          rows={16}
          value={content}
          onChange={this.handleChange} />
        <Button type='submit' text='Save' />
        <BtnLink to={id ? 'post' : 'home'}
          params={id ? { id: id } : null}
          text='Cancel' />
      </form>
    )
  }

}

PostForm.defaultProps = {
  post: {}
}

export default PostForm

