import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="http://www.scalsys.com/wallpapers/legolas-wallpaper/legolas-wallpaper_451816.png" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post;