import { Link } from "react-router-dom";
import list from "../../public/list";
import Cards from "./Cards";

function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto  md:px-20 px-4">
        <div className="mt-21  items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl pt-16 mt-12">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          
          <p className="mt-12">
            Whether you're a seasoned reader or just beginning your literary
            journey, our collection is designed to inspire, educate, and
            entertain. Explore a wide range of genres, discover new authors, and
            find your next favorite book. Every book you open is a new world
            waiting to be explored—let's start the adventure together. Thank you
            for choosing us as your go-to bookstore!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Course;
