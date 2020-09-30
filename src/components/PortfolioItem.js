import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div className="row">
            <div className="column">
               <img className="portfolioImg" src={props.img} alt={props.alt} />
            </div>
            <div className="column">
               <h3>{props.header}</h3>
               {props.description}<br/><br/>
                <a className="portfolio-link" href={props.deployedURL}>Deployed application</a>
               <a className="plinksmall" href={props.repoURL}>GitHub</a>
            </div>
         </div>
    )
}

export default PortfolioItem;