// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";

const TripAddedSuccessfully = () => {
  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
      <div
        className="absolute left-0 top-0 h-full w-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center blur-lg filter"
        style={{ zIndex: -1 }}
      ></div>

      <NavigationLinksButton></NavigationLinksButton>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="z-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h1 className="poppins mb-16 text-center text-3xl font-bold">
            Trips added successfully.
          </h1>
          <div className="flex justify-center gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default TripAddedSuccessfully;
