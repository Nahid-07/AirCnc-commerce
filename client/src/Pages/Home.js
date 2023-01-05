import React from "react";
import Spinner from "../Components/Spinner/Spinner";
import SearchForm from '../Components/Form/SearchForm'
const Home = () => {
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div className="mt-4">
        <SearchForm/>
      </div>
      <div className="flex-1">
        <div>Home items</div>
        <div>Experience items</div>
      </div>
    </div>
  );
};

export default Home;
