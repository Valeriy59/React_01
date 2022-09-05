import React from 'react';
import classes from './Post.module.css'
//  Компонента для профиля, затем импортируется в  App

const Post = () => {
  return (
        <div className={classes.item}>
          <img src='https://fun-cats.ru/wp-content/uploads/4/b/2/4b28e906802cf608d7d0f2ac5a90459a.jpeg'></img>
          new post
        </div>
  )
}

export default Post