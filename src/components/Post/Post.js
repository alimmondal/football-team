import React from 'react';
import { useHistory } from 'react-router';
// import TeamDetail from '../TeamDetail/TeamDetail';
import './Post.css'

const Post = (props) => {
    const {strTeamBadge,idTeam, strTeam,strTeamLogo} = props.post;
    const history = useHistory();

    const showDetail = idTeam => {
        const url = `post/${idTeam}`;
        history.push(url);
    }
   
    return (
        <div className="gridStyle">
  
        <div className="teamHome">         
            <img className="" src={strTeamBadge} alt=""/> <br/>
            <h2>{strTeam}</h2>
            <img className="teamLogo"  src={strTeamLogo} alt="" />
            <br/>
            <button className="btn-primary px-4 mt-2 rounded" 
            onClick={() =>showDetail(idTeam)}>Explore Detail</button>
   
        </div>
        </div>
    );
};

export default Post;