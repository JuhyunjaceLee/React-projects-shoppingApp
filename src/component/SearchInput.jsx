import React, { useState } from "react";
import styles from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchInput({ productsList, setFilterList }) {
  const [search, setSearch] = useState("");
  const inputSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };
  const inputKey = (e) => {
    if (e.key === "Enter") {
      const searchData = productsList.filter((item) =>
        item.title.includes(search)
      );
      console.log(searchData);
      if (searchData.length >= 1) {
        setFilterList(searchData);
        setSearch("");
        console.log("Results");
        console.log(searchData.length);
      } else if (searchData.length === 0) {
        console.log("No Result");
        setFilterList(searchData);
      }
    }
  };
  return (
    <div className={styles.search_wrap}>
      <BsSearch />
      <input
        type="text"
        placeholder="제품검색"
        value={search}
        onChange={inputSearch}
        onKeyDown={inputKey}
      />
    </div>
  );
}
