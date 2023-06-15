import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function ProductDetail() {
  const [item, setItem] = useState(null);
  const param = useParams();
  const getProductDetail = async () => {
    if (!param.id) {
      return;
    }
    let url = `https://my-json-server.typicode.com/JuhyunjaceLee/React-projects-shoppingApp/products/${param.id}`;
    let response = await fetch(url);
    let data = await response.json();
    setItem(data);
  };

  const options = ["S", "M", "L"];

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className={styles.detail_contents}>
      <img src={item?.img} alt="item_img" />
      <div className={styles.detail_wrap}>
        <h2 className={styles.detail_title}>{item?.title}</h2>
        <p className={styles.detail_price}>￦{item?.price}</p>
        {item?.new && <p className={styles.detail_new}>NEW</p>}
        {item?.choice && <p className={styles.detail_choice}>CHOICE</p>}
        <Dropdown options={options} placeholder="사이즈를 선택하세요." />
        <button className={styles.detail_btn}>장바구니 담기</button>
      </div>
    </div>
  );
}
