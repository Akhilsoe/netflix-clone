import React from "react";
import requests from "../Requests";
import Main from "../components/Main";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="TopRated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
