import React, { Component } from 'react';
class NewsItem extends Component {
    render() { 
        let {title,description,imageUrl,newsUrl,author,date}=this.props;
        return ( <div className="my-3">
            <div className="card" >
                <img className="card-img-top" src={!imageUrl ? "https://static01.nyt.com/images/2021/08/31/us/00virus-under12-5/merlin_193339689_f1467923-60f8-40f0-bab1-09e02e3163d9-facebookJumbo.jpg" : imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div> );
    }
}
 
export default NewsItem;