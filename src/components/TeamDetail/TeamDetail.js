import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import maleImg from '../../image/male.png';
import teamBanner from '../../image/teamBanner.PNG';
import facebook from '../../image/Facebook.png';
import Twitter from '../../image/Twitter.png';
import YouTube from '../../image/YouTube.png';



const TeamDetail = () => {
    const { idTeam } = useParams();
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data.teams[0]))
    }, [idTeam])

    return (
        <div className="backgroundColor">
            <div className="logo ">
                <img src={posts.strTeamBadge} className="img-fluid" alt="" />
            </div>

            <div className="teamDetailBanner">
                <img src={teamBanner} className="img-fluid" alt="" />
            </div>

            <div className="teamDetail container">

                <div className="row">
                    <div className="col-md-6 teamInfo">
                        <h1>{posts.strTeam}</h1>
                        <h5>Gender: {posts.strGender}</h5>
                        <h5>Country: {posts.strCountry}</h5>
                        <h5>Founded year: {posts.intFormedYear}</h5>
                        <h5>Type: {posts.strSport}</h5>
                    </div>
                    <div className="col-md-6">
                        <img src={maleImg} className="" alt="" />
                    </div>
                </div>

            </div>
            <div className="container description">
                <p>{posts.strDescriptionEN}</p>
                <p>{posts.strDescriptionEN}</p>
            </div>
            <div className="social-icon container">
                <ul className="">
                    <li><a target="_blank" rel="noreferrer" href="https:www.facebook.com/" ><img src={facebook} alt="" /></a></li>
                    <li><a target="_blank" rel="noreferrer" href="https:www.twitter.com/"><img src={Twitter} alt="" /></a></li>
                    <li><a rel="noreferrer" target="_blank" href="https:www.youtube.com/user/ArsenalTour"><img src={YouTube} alt="" /></a></li>

                </ul>
            </div>
        </div>
    );
};

export default TeamDetail;

