import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";
import { fetchSneakers, selectHome } from "../redux/homeSlice";
import Skeleton from "../components/Skeleton";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectHome);

  React.useEffect(() => {
    dispatch(fetchSneakers() as any);
  }, []);

  console.log(status);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home__wrapper">
            <div className="home__header">
              <h1 className="h1 home__title"></h1>
              <input />
              <div className="input__delete"></div>
            </div>
            <div className="cards">
              {items.map((item) =>
                status === "loading"
                  ? [...Array(8)].map((_, i) => <Skeleton key={i} />)
                  : items.map((obj) => <Card key={obj.id} {...item} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
