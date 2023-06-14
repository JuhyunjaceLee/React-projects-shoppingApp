import React, { useEffect, useState } from "react";
import SearchInput from "../component/SearchInput";
import ProductCard from "../component/ProductCard";

export default function ProductAll() {
  const [filterList, setFilterList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const menuList = ["MEN", "WOMEN"];

  const getProducts = async () => {
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/JuhyunjaceLee/React-projects-shoppingApp`;
    let response = await fetch(url);
    let data = await response.json();
    setProductsList(data);
    setFilterList(data);
  };

  const showAllProducts = () => {
    setFilterList(productsList);
  };

  const filterItem = (e) => {
    const filterBtn = e.target.innerHTML;
    const filter = productsList.filter((item) => item.gender === filterBtn);
    setFilterList(filter);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product_contents">
      <SearchInput productsList={productsList} setFilterList={setFilterList} />
      <ul className="menu_Lists">
        <li onClick={showAllProducts}>ALL</li>
        {menuList.map((list, idx) => (
          <li key={idx} onClick={filterItem}>
            {list}
          </li>
        ))}
      </ul>
      <div className="productCard_wrap">
        {filterList.map((list, idx) => (
          <ProductCard list={list} key={idx} />
        ))}
      </div>
    </div>
  );
}
