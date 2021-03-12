import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'
import homeBanner from '../../image/sportMania.PNG';


const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data.teams))
    }, [])

    return (
        <div className="homeColor">
            <div className="homeBanner">
                <img src={homeBanner} className="img-fluid" alt="" />
            </div>           
            <div className="container gridHome">
                {
                    posts.map(post => <Post post={post} key={post.idTeam}></Post>)
                }
            </div>
        </div>
    );
};

export default Home;