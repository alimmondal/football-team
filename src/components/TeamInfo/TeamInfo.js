import React from 'react';

const TeamInfo = (props) => {
    const { strDescriptionEN,strTeamBanner} = props.team;
    return (
        <div className="container">
            <h1>This is team info:</h1>
            <img src={strTeamBanner} alt=""/>
            <p>{strDescriptionEN}</p>
          
            
        </div>
    );
};

export default TeamInfo;