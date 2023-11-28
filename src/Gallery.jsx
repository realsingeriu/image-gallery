import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import { useFetch } from "./useFetch";
import PopupBox from "./PopupBox";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}`;

const Gallery = ({ setItem }) => {
  const { searchTerm } = useGlobalContext();
  const { data, error, isPending } = useFetch(
    `${url}&query=${searchTerm}&per_page=20`
  );
  console.log(data);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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

  if (!data || !data.results) {
    return (
      <section className="image-container">
        <h4>No results found.</h4>
      </section>
    );
  }

  const slicedResults = data.results.slice(0, 20);

  return (
    <section className="gallery">
      <ul className="images">
        {slicedResults.map((item) => {
          const imageUrl = item?.urls?.regular;
          return (
            <li
              className="img"
              key={item.id}
              onClick={() => handleItemClick(setItem)}
            >
              <img src={imageUrl} alt={item.alt_description} />
            </li>
          );
        })}
      </ul>
      {selectedItem && (
        <PopupBox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};
export default Gallery;
