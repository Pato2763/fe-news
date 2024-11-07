import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ArticleSorter = () => {
  const [sortByOption, setSortByOption] = useState("");
  const [orderByChange, setOrderByChange] = useState("");
  const [queryStr, setQueryStr] = useState("");
  const navigate = useNavigate();

  const handleSortByChange = (event) => {
    setSortByOption(event.target.value);
  };

  const handleOrderByChange = (event) => {
    setOrderByChange(event.target.value);
  };

  useEffect(() => {
    const queryCompiled = ``;
    if (orderByChange.length && sortByOption.length) {
      setQueryStr(`?sort_by=${sortByOption}&order=${orderByChange}`);
    } else if (orderByChange.length) {
      setQueryStr(`?order=${orderByChange}`);
    } else if (sortByOption.length) {
      setQueryStr(`?sort_by=${sortByOption}`);
    }
  }, [sortByOption, orderByChange]);

  useEffect(() => {
    navigate(queryStr);
  }, [queryStr]);

  return (
    <>
      <label>
        Sort By
        <select onChange={handleSortByChange}>
          <option value="">--default--</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
        </select>
      </label>
      <label>
        Order By
        <select onChange={handleOrderByChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </>
  );
};

export default ArticleSorter;
