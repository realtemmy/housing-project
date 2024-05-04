import React from "react";
import { Input, Button } from "@material-tailwind/react";
import CarouselComponent from "../../components/carousel/Carousel";
import Categories from "../../components/categories/Categories";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/footer/Footer";

const Home = () => {
  // eslint-disable-next-line no-unused-expressions
  [
    "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // apartments, hostels, totels,
  return (
    <>
      {/* {<Loader />} */}
      <div className="mx-2">
        <h2 className="text-2xl font-semibold my-4">
          Find your dream home today
        </h2>
        <div className="flex gap-1">
          <Input type="search" label="Search..." />
          <Button size="sm" color="red">
            Submit
          </Button>
        </div>
        <article>
          <CarouselComponent />
        </article>
        <article>
          <Categories />
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Home;
