import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://3z0j693048yc3yqdn13v4vqd-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/tanyawallis-bagend-header.jpg"
                    alt=""/>
            </div>
            <div>ava + desc</div>
            <MyPosts/>
        </div>
    )

}

export default Profile;