import React from 'react';

//  Компонента для профиля, затем импортируется в  App

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src="https://avatars.mds.yandex.net/get-images-cbir/1996356/mQsH45em7MMUY9pagcnbrA9202/ocr"></img>
      </div>
      <div>
        ava + desc
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div>
          post1
        </div>
        <div>
          post2
        </div>
      </div>
    </div>
  )
}

export default Profile