import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { housesData } from "./data";

const HouseRentals = () => {
  const [houses, setHouses] = useState(housesData);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortByPrice, setSortByPrice] = useState(false);

  const filterHouses = () => {
    let filteredHouses = houses.filter(
      (house) =>
        house.price <= maxPrice &&
        house.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortByPrice) {
      filteredHouses = filteredHouses.sort((a, b) => a.price - b.price);
    }

    return filteredHouses;
  };

  useEffect(() => {
    // Simulate fetching data (remove this in actual implementation)
    setIsLoading(true);
    setTimeout(() => {
      setHouses(housesData);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="2xl:container py-24 2xl:mx-auto">
      <div className="py-10 lg:px-40 md:px-6 px-4">
        {isLoading ? (
          <div className="flex justify-center  mx-auto w-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="flex  justify-between max-md:flex-col">
              <div className="relative py-6 w-1/3 max-md:w-full">
                <input
                  type="text"
                  placeholder="Search for houses..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border-gray-400 py-2.5 p-10 shadow-md sm:text-sm"
                />
              </div>
              <div className="mb-4 relative w-1/3 max-md:w-full">
                <label
                  htmlFor="priceSort"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sort by Price:
                </label>
                <select
                  id="priceSort"
                  name="priceSort"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={sortByPrice}
                  onChange={(e) => setSortByPrice(e.target.value === "true")}
                >
                  <option value={false}>Top Picks For You</option>
                  <option value={true}>Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-16 sm:p-10 sm:gap-x-6 gap-y-6 lg:p-2 mt-12 mt-10">
              {filterHouses().map((house) => (
                <div key={house.id}>
                  <div className="relative group">
                    <img
                      className="h-60 mx-auto object-cover rounded-lg border border-gray-300"
                      src={house.image}
                      alt={house.title}
                    />

                    <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                      <Link to={`/product/${house.id}`}>
                        <button className="rounded bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-center font-medium text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                    {house.title}
                  </p>
                  <p className="text-blue-800 text-center font-semibold text-2xl leading-5 mt-4">
                    $ {house.price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        {/* ... Load More button or other actions ... */}
      </div>
    </div>
  );
};

export default HouseRentals;
