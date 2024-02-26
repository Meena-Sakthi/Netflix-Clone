import React from "react";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";
import { useSearch } from "./SearchContext";

const Main = () => {
  const { flag } = useSearch();
  return flag ? (
    <div></div>
  ) : (
    <div>
      <Banner />
      <div className="App">
        <Row
          title="NETFLIX ORIGINALS"
          isLargeRow
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
};

export default Main;
