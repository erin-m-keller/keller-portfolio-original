import React, { Component } from "react";
 
class Card extends Component {
  render() {
    let cardUrl = this.props.cardUrl;
    let btnUrl = this.props.btnUrl;
    let imgSrc = this.props.src;
    let imgAlt = this.props.alt;
    let title = this.props.title;
    let tags = this.props.tags;
    return (
      <article>
        <a href={cardUrl} target="_blank">
          <img src={imgSrc} alt={imgAlt} />
        </a>
        <div className="content-txt">
          <h3>{title}</h3>
          <p>Click the image above to view the site &mdash; or &mdash; click the button below to view the repository.</p>
          <form action={btnUrl} target="_blank">
              <input type="submit" value="Visit repository" className="card-btn" />
          </form>
          {tags.map((tag) => (
            <span className="tag tag-sm">{tag}</span>
          ))}
        </div>
      </article>
    );
  }
}
 
export default Card;