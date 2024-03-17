import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-[50px]">
            <div>
              <div className="w-full">
                <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-4 sm:mt-1  sm:text-right sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  Download Now
                  <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                </h2>
                <Link
                  className="flex justify-center text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                  to="/"
                >
                  <svg
                    fill="white"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                  </svg>
                  &nbsp; Download now
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center py-[50px]">
            <div>
              <div className="sm:mt-20">
                <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
              </div>
            </div>
            <div>
              <h1 className="text-center md:text-7xl sm:text-5xl font-medium">
                Hi Jayen what are you doing
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
