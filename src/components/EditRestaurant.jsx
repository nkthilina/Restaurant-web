import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

function EditRestaurant() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restaurants/${id}`);
        console.log(response);
        setName(response.data.name);
        setAddress(response.data.address);
        setContact(response.data.contact);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/restaurants/${id}`, {
        name,
        address,
        contact,
      });
      alert("Updated Successfully.");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsDataChanged(true);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
    setIsDataChanged(true);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setIsDataChanged(true);
  };

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
                    Update Restaurant
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to="/"
                    className="bg-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <form
                onSubmit={handleUpdate}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-black"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Restaurant Name"
                        id="name"
                        value={name}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                        onChange={handleNameChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-semibold leading-6 text-black"
                    >
                      Contact Number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="contact"
                        placeholder="Enter Contact Number"
                        id="contact"
                        value={contact}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold leading-6 text-black"
                    >
                      Address
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        id="address"
                        value={address}
                        autoComplete="address"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className={`bg-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 my-5 ease-linear transition-all duration-150 ${
                    !isDataChanged && "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!isDataChanged}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default EditRestaurant;
