import React, { useEffect } from "react";
import Spinner from "../Components/Spinner/Spinner";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard from "../Components/Card/ExpCard";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllExp(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div className="mt-4">
        <SearchForm />
      </div>
      <div className="flex-1">
        <div>Home items</div>
        <div>
          <div className="flex justify-between px-4">
            <p className="text-xl font-bold">Experiences</p>
            <Link to="/coming-soon">
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {allExp.map((exp, i) => (
                <ExpCard key={i} card={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
