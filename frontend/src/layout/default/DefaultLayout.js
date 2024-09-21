import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Header2 from "../../components/header/Header2";

const DefaultLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Header2 className="mb-4"/>
      <div className="container mt-16 mx-auto">
        <main>{children}</main> {/* Render nội dung con */}
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
