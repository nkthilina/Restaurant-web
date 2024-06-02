import { Link } from "react-router-dom";
import Footer from "./Footer";

function RestaurantDetails() {
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
            <div className="block w-full overflow-x-auto py-5">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
                    <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
                      Restaurant Details
                    </div>
                    {/* card body */}
                    <div className="p-6 bg-white border-b border-gray-200">
                      {/* content goes here */}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                    <div className="p-6 relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <Link
                        to="/"
                        className="bg-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        <Footer />
      </section>
    </div>
  );
}

export default RestaurantDetails;
