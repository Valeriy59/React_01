import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
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
      <MyPosts />
    </div>
  )
}

export default Profile