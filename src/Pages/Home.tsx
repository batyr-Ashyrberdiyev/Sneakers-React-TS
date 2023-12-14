import React, { ChangeEvent } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";
import { fetchSneakers, selectHome, setSearch } from "../redux/homeSlice";
import Skeleton from "../components/Skeleton";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, search } = useSelector(selectHome);

  React.useEffect(() => {
    dispatch(fetchSneakers());
  }, []);

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home__wrapper">
            <div className="home__header">
              <h1 className="h1 home__title"></h1>
              <input placeholder="Поиск..." onChange={onInput} value={search} />
              <div className="input__delete"></div>
            </div>
            <div className="cards">
              {items
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) =>
                  status === "loading" ? (
                    [...Array(8)].map((_, i) => <Skeleton key={i} />)
                  ) : (
                    <Card key={item.id} {...item} />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
