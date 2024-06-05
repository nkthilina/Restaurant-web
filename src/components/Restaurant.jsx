import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = restaurants.slice(firstIndex, lastIndex);
  const npage = Math.ceil(restaurants.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/restaurants/${id}`)
      .then((res) => {
        console.log(res);
        alert("Deleted Successfully.");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/restaurants`)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* component */}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Restaurants
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to="/create"
                    className="bg-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Create
                  </Link>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {restaurants.length > 0 ? (
                <div>
                  <div>
                    <table className="items-center bg-transparent w-full border-collapse ">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            ID
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Address
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Telephone
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {records.map((restaurant, index) => {
                          return (
                            <tr key={index}>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700">
                                {startIndex + index + 1}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                                {restaurant.name}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                                {restaurant.address}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                                <span>+94 </span>
                                {restaurant.contact}
                              </td>
                              <td className="flex text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 gap-2">
                                <Link
                                  to={`/show/${restaurant._id}`}
                                  className="bg-stone-500 hover:bg-stone-700  text-white text-xs  uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                >
                                  Details
                                </Link>
                                <Link
                                  to={`/edit/${restaurant._id}`}
                                  className="bg-blue-500 hover:bg-blue-700  text-white text-xs  uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => handleDelete(restaurant._id)}
                                  className="bg-red-500 hover:bg-red-700 text-white  text-xs  uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* pagination */}
                  <div className=" flex items-center justify-center ">
                    <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex justify-center">
                        <nav className="flex space-x-2" aria-label="Pagination">
                          <ul>
                            <li>
                              <a
                                href="#"
                                onClick={previousPage}
                                className="relative inline-flex items-center  text-sm  border border-fuchsia-100 hover:border-violet-100 text-white  cursor-pointer leading-5 rounded-md   focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-600  font-bold   p-1 my-1  outline-none focus:outline-none  ease-linear transition-all duration-150"
                              >
                                Previous
                              </a>
                            </li>
                          </ul>
                          {numbers.map((number, index) => (
                            <a
                              href="#"
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-indigo-200  cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 ${
                                currentPage === number ? "active " : ""
                              }`}
                              key={index}
                              onClick={() => changeCurrentPage(number)}
                            >
                              {number}
                            </a>
                          ))}
                          <a
                            href="#"
                            onClick={nextPage}
                            className="relative inline-flex items-center  text-sm  border border-fuchsia-100 hover:border-violet-100 text-white  cursor-pointer leading-5 rounded-md   focus:shadow-outline-blue focus:border-blue-300 focus:z-10 bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-600  font-bold px-3  py-1 m-1  outline-none focus:outline-none ease-linear transition-all duration-150"
                          >
                            Next
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-red-500 py-4">
                  There is no data available. Create some ....
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Restaurant;
