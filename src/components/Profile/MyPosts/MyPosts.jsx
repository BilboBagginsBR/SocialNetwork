import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>my posts
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?"/>
                <Post message="It is my first post"/>

            </div>
        </div>
    )

}

export default MyPosts;