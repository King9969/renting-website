import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { housesData } from "./data"; // Import your houses data

const Item = () => {
  const { id } = useParams();
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [house, setHouse] = useState(null);

  useEffect(() => {
    // Simulate fetching data (remove this in actual implementation)
    setIsLoading(true);
    setTimeout(() => {
      const selectedHouse = housesData.find((item) => item.id === parseInt(id));
      setHouse(selectedHouse);
      setIsLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className=" lg:p-20 py-20">
      {isLoading ? (
        <div className="flex justify-center py-36 mx-auto w-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        </div>
      ) : house ? (
        <div className="2xl:container 2xlx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
            {/* Description Div */}
            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
              <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                {house.title}
              </h2>
              <p className="font-normal text-base leading-6 text-gray-600 mt-7">
                {house.description}
              </p>
              <p className="text-blue-800 font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6">
                $ {house.price}
              </p>
              <div className="lg:mt-11 mt-10">
                <hr className="bg-gray-200 w-full my-2" />
                {/* Dimensions */}
                <div className="flex flex-row justify-between items-center mt-4">
                  <p className="font-medium text-base leading-4 text-gray-600">
                    Bedrooms
                  </p>
                  <p className="text-base leading-6 text-gray-600">
                    {house.bedrooms}
                  </p>
                </div>
                <hr className="bg-gray-200 w-full my-2" />
                <div className="flex flex-row justify-between items-center mt-4">
                  <p className="font-medium text-base leading-4 text-gray-600">
                    Bathrooms
                  </p>
                  <p className="text-base leading-6 text-gray-600">
                    {house.bathrooms}
                  </p>
                </div>
                <hr className="bg-gray-200 w-full my-2" />
                <div className="flex flex-row justify-between items-center mt-4">
                  <p className="font-medium text-base leading-4 text-gray-600">
                    Location
                  </p>
                  <p className="text-base leading-6 text-gray-600">
                    {house.location}
                  </p>
                </div>
                <hr className="bg-gray-200 w-full mt-4" />
              </div>
              <Link to={`/checkout/${house.price}`}>
                <button className="rounded-lg focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-blue-600 w-full py-5 lg:mt-12 mt-6">
                  Rent
                </button>{" "}
              </Link>
            </div>
            {/* Preview Images Div For larger Screen */}
            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
              <div className="lg:w-8/12  flex justify-center items-center ">
                <img src={house.image} alt={house.title} />
              </div>
              <div className="lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                <img className="rounded" src={house.image} alt={house.title} />
                <img className="rounded" src={house.image} alt={house.title} />
                <img className="rounded" src={house.image} alt={house.title} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>House not found.</p>
      )}
    </div>
  );
};

export default Item;
