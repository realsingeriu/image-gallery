import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { useFetch } from "./useFetch";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}`;

const Gallery = ({ setItem }) => {
  const { searchTerm } = useGlobalContext();
  const { data, error, isPending } = useFetch(
    `${url}&query=${searchTerm}&per_page=30`
  );
  console.log(data);

  if (isPending) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (error) {
    return (
      <section className="image-container">
        <h4>{error}</h4>
      </section>
    );
  }

  return (
    <section className="gallery">
      <ul className="images">
        {data &&
          data.results.map((item) => {
            const Url = item?.urls?.regular;
            return (
              <li className="img" key={item.id} onClick={() => setItem(item)}>
                <img src={Url} alt={item.alt_description} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};
export default Gallery;
