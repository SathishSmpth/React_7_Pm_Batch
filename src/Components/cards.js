import React from "react";

const  Cards =({movie})=> {
   const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          
          <p className="card-text">
            {movie.overview}
          </p>
          <button  className="btn btn-primary">
            Click
          </button>
        </div>
      </div>
    </div>
    );
}

export default Cards;
