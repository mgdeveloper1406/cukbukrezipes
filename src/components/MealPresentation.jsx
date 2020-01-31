import React from "react";
import { Link } from "react-router-dom";

export const MealPresentation = props => {
  const {
    mealName,
    imgAddress,
    videoAddress,
    mealCategory,
    mealArea
  } = props.meal;
  return (
    <div className="row">
      <div className="col s12">
        <div className="card teal darken-1">
          <div className="card-content white-text">
            <span className="card-title">{mealName}</span>
            <img className="responsive-img" src={imgAddress} alt={mealName} />
            <ul>
              <li>
                <a href={videoAddress} target="blank">
                  See in video
                </a>
              </li>
              {/* <video width="" height="" controls autoplay>
        <source src={videoAddress} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
              {/* <iframe
        title="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wqZzLAPmr9k"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}

              <li>
                <b>Category: </b> {mealCategory} (
                <Link to={`/categories/${mealCategory}`}>
                  See every {mealCategory} recipes
                </Link>
                )
              </li>
              <li>
                <b>Origin:</b> {mealArea}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};