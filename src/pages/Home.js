import React from "react";
import { AppTitle, ProductList } from "./../components";
import "./../index.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <AppTitle />
        <ProductList />
      </>
    );
  }
}
