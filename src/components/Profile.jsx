import React from 'react';
import classes from './Profile.module.css'
//  Компонента для профиля, затем импортируется в  App

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/get-images-cbir/1996356/mQsH45em7MMUY9pagcnbrA9202/ocr"></img>
      </div>
      <div>
        ava + desc
      </div>
      <div className={classes.posts}>
        my posts
        <div className={classes.item}>
          new post
        </div>
        <div className={classes.item}>
          post1
        </div>
        <div className={classes.item}>
          post2
        </div>
      </div>
    </div>
  )
}

export default Profile