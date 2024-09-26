import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Header2 from "../../components/header/Header2";
import OurStory from "../../components/admin/components/OurStory";

const DefaultLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Header/>
      {/* <Header2 className="mb-4"/> */}
      <div className="W-full max-w-screen-xl  mt-20 mx-auto">
        <main>{children}</main> {/* Render nội dung con */}
      </div>

      <OurStory/>
      <Footer />
    </>
  );
};

export default DefaultLayout;