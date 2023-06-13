import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

export default function PrivateRoute({ auth }) {
  return <div>{auth ? <ProductDetail /> : <Navigate to="/login" />}</div>;
}
