
function Footer() {
  return (
    <div className="relative pt-8 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made by{" "}
              <span
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                Thilina Madhusanka
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
