import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function CreateRestaurant() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required.";
    }
    if (!address) {
      newErrors.address = "Address is required.";
    }
    const contactPattern = /^[0-9]{10}$/;
    if (!contact) {
      newErrors.contact = "Contact Number is required.";
    } else if (!contactPattern.test(contact)) {
      newErrors.contact = "Contact number must contain 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(e)) {
      axios
        .post("http://localhost:3000/restaurants", {
          name,
          address,
          contact,
        })
        .then((res) => {
          console.log(res);
          alert("Created Successfully.");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
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
                    Create Restaurant
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
                onSubmit={handleSubmit}
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
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
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
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                        onChange={(e) => setContact(e.target.value)}
                      />
                      {errors.contact && (
                        <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                      )}
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
                        id="address"
                        placeholder="Enter Address"
                        autoComplete="address"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                      )}
                    </div>
                  </div>
                </div>
                <button className="bg-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 my-5 ease-linear transition-all duration-150">
                  Submit
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

export default CreateRestaurant;
