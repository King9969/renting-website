import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  window.scrollTo(0, 0);
  return (
    <section className="bg-gray-900 text-gray-100 overflow-hidden">
      <Intro />
      <Rcontent />
      <Content />
      <Step />
      <TopHouses />
      <Lower />
    </section>
  );
}
const Intro = () => {
  const backgroundImageUrl =
    "url(https://images.squarespace-cdn.com/content/v1/5833bd87579fb3cc08e86017/6c69e290-99a5-4fcf-8651-4ff92db479f1/helmy-ardiansyah-211104-v60-house-cam1.jpg)";

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative">
      <div
        className="absolute inset-1  "
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          left: -80,
          right: -80,
          borderRadius: "10px",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>

      <div className="mx-auto max-w-3xl text-center relative ">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Let's Rent
        </h1>

        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Welcome to MyHouseRent Search and Rent Your Dream Home
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/product"
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-gray-100 hover:bg-transparent hover:text-gray-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          >
            Browse Lisitng
          </Link>

          <a
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Add Listings
          </a>
        </div>
      </div>
    </div>
  );
};

const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase rounded-full bg-white">
            Brand new
          </p>
        </div>
        <div
          data-aos="fade"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{" "}
            Explore Our Listings
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Discover brand new rental opportunities for you and your family.
          </p>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 1</p>
              <svg
                className="w-6 text-blue-600  transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Browse through our extensive collection of rental properties and
              filter based on your preferences.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="800"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 2</p>
              <svg
                className="w-6 text-blue-600 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Experience the convenience of finding your ideal home hassle-free.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Step 3</p>
              <svg
                className="w-6 text-blue-600 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Contact us today to get started on your journey to a new rental
              experience.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="400"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold">Success</p>
              <svg
                className="w-8 text-blue-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              Join the many happy renters who have found their perfect home
              through us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lower = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="300">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-white">
              Get New Lisitng updates
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Find</span>
            </span>{" "}
            Your Perfect Home
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Explore a variety of rental options tailored to your needs.
          </p>
        </div>
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Email"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-600 hover:bg-white hover:text-blue-600 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
        </form>
        <p className="max-w-md mb-10 text-xs text-gray-400 sm:text-sm md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit accusantium
          doloremque laudantium.
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in"
        data-aos-duration="600"
      >
        <img
          src="https://pngimg.com/uploads/house/house_PNG29.png"
          className="  w-full mx-auto md:w-auto md:max-w-xs"
          alt=""
        />
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex py-20 flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg max-md:py-2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Search and Rent Your Dream Home
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://hips.hearstapps.com/hmg-prod/images/edc100121fernandez-005-1631202315.jpg?crop=1.00xw:0.594xh;0,0.296xh&resize=1200:*"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLE8O8l1D86ct9cGE6IQNXnc_kH0j_V50DIwweyCK4zMu7oyEpQKPw8t4zHDvQszPce7M&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className="px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://www.thehousedesigners.com/images/plans/JBZ/bulk/4367/1479-front-rendering_m.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Rcontent = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="600"
          >
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 opacity-30 "
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-end px-3">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
            >
              <img
                className="object-cover relative lg:-inset-x-28 mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48  xl:w-56"
                src="https://images.homes.com/listings/215/2761083923-704950751-original.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="px-3"></div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in"
          data-aos-duration="600"
        >
          <div className="flex py-20 flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg max-md:py-2">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Welcome to MyHouseRent
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const TopHouses = () => {
  const topHouses = [
    {
      image:
        "https://assets.architecturaldigest.in/photos/62d66f2df8e893c06cec9970/16:9/w_1615,h_908,c_limit/This%20Hyderabad%20home%20marries%20French-style%20architecture%20with%20vernacular%20interiors.jpg",
      title: "Modern Luxury Villa",
      price: "$1,200,000",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      title: "Cozy Cottage Retreat",
      price: "$650,000",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
      title: "Spacious Family Home",
      price: "$950,000",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in"
          data-aos-duration="400"
        >
          <h2 className="text-3xl font-extrabold text-gray-100 mb-8">
            Top Houses
          </h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {topHouses.map((house, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {house.title}
                  </h3>
                  <p className="text-gray-200 mt-2">{house.price}</p>

                  <Link
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                    to="/product/1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
