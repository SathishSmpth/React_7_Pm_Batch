import React, { useEffect, useState } from "react";
import Cards from "./cards";

const SearchPage = ({ search }) => {
  const [result, setResult] = useState([""]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3d23c0d560393968f848f436205e4c3e&language=en-US&query=${search}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setResult(data.results));
  }, [search]);

  return (
    <div className="container-fluid">
      <div class="row">
        {result?.map((data, i) => (
          <Cards movie={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
