import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value?.trim();
    //console.log(searchValue);
    if (searchValue !== null && searchValue.length > 1) {
      //console.log(searchValue);
      setSearchTerm(searchValue); // 검색어를 공통으로 저장
    }
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="검색할 단어 입력해주세요."
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
