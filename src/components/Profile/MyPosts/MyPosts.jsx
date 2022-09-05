import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'
//  Компонента для профиля, затем импортируется в  App

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts