// import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import { useRef } from "react";

function App() {
  // Color codes
  // Primary #1769ff
  // Black footer #2a2a2a
  // Orange
  // gray #e8e8e8

  // const [count, setCount] = useState(0);
  const routeConfig = {
    exact: true,
  };
  const logo =
    "https://img.freepik.com/free-vector/home-leaf-logo-design-template_474888-1849.jpg?w=826&t=st=1709192454~exp=1709193054~hmac=734ca92582bbab07e94548109627959ea1b6bec310d4d7c9597e898c1e4e9f4a";

  const propertiesView = useRef(null);
  const aboutUsView = useRef(null);
  const contactUsView = useRef(null);
  const headerHeight = 300; // Replace with your actual header height

  const scrollToTarget = () => {
    if (propertiesView.current) {
      propertiesView.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offsetTop: -headerHeight,
      });
    }
  };

  const scrollToTarget1 = () => {
    if (aboutUsView.current) {
      aboutUsView.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offsetTop: -headerHeight,
      });
    }
  };

  const scrollToTarget2 = () => {
    if (contactUsView.current) {
      contactUsView.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offsetTop: -headerHeight,
      });
    }
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          {...routeConfig}
          element={
            <div className="">
              <div className="bg-[#dee8ff] sticky top-0 z-20">
                <div className="container mx-auto text-[#000000] flex items-center justify-between py-[8px] px-[50px]">
                  <Link
                    to={"/"}
                    className="inline-flex h-[80px] rounded-full overflow-hidden align-middle"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-auto h-auto max-w-full max-h-full m-auto"
                    />
                  </Link>
                  <div className="inline-block">
                    <span
                      onClick={scrollToTarget}
                      className="py-2 px-5 text-lg inline-block opacity-90 hover:cursor-pointer hover:opacity-100 transition duration-200 ease-in-out"
                    >
                      Properties
                    </span>
                    {/* border-b-2 border-b-orange-600 */}
                    <span
                      onClick={scrollToTarget1}
                      className="py-2 px-5 text-lg inline-block opacity-90 hover:cursor-pointer hover:opacity-100 transition duration-200 ease-in-out"
                    >
                      About Us
                    </span>
                    <span
                      onClick={scrollToTarget2}
                      className="py-2 px-5 text-lg inline-block opacity-90 hover:cursor-pointer hover:opacity-100 transition duration-200 ease-in-out"
                    >
                      Contact Us
                    </span>
                  </div>
                </div>
              </div>
              {/* Hero section */}
              <div className="container mx-auto">
                <div className="w-full grid place-items-center grid-cols-2 min-h-[600px]">
                  <div className="w-full h-full flex">
                    <img
                      src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                      alt="house image"
                      className="w-auto h-auto max-w-full max-h-full m-auto"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="text-8xl font-bold">
                      Discover your{" "}
                      <span className="text-orange-500">Dream Home</span> Awaits
                    </h1>
                    <p className="text-xl text-[#696969] mt-4">
                      Explore a vast selection of over 100,000 listings,
                      including apartments, lots and pots.
                    </p>
                    <div className="w-full mx-auto py-[10px] px-[35px] mt-[35px] flex items-center justify-start text-center border border-gray-200 max-w-[600px] bg-white shadow-md rounded-full">
                      <span>
                        <svg
                          fill="#000000"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[35px] h-[35px] inline-block mx-2"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                          </g>
                        </svg>
                      </span>
                      <input
                        type="search"
                        placeholder="Search..."
                        className="w-full min-h-[60px] outline-none text-lg focus-within:outline-none mx-2"
                      />
                      <button className="py-3 px-8 text-lg inline-block bg-blue-500 text-white rounded-full ml-auto">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                {/* Property */}
                <div
                  className="mt-[150px]"
                  id="properties"
                  ref={propertiesView}
                >
                  <h1 className="text-5xl text-center font-bold capitalize">
                    Freshly Available Rental Properties
                  </h1>
                  <p className="text-lg text-[#696969] text-center mt-4 max-w-[1200px] mx-auto">
                    Dive into a realm where walls and roofs transform into the
                    backdrop from your unique story. Your next home is not just
                    a space; it`s a canvas inviting you to paint the chapters of
                    your life.
                  </p>
                  <div className="mt-[45px] flex flex-wrap gap-6 justify-center">
                    <button className="py-3 px-8 text-lg inline-block bg-blue-500 text-white rounded-full">
                      All Properties
                    </button>
                    <button className="py-3 px-8 text-lg inline-block border border-[#696969] text-[#696969] rounded-full hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out hover:border-blue-500">
                      House
                    </button>
                    <button className="py-3 px-8 text-lg inline-block border border-[#696969] text-[#696969] rounded-full hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out hover:border-blue-500">
                      Office
                    </button>
                    <button className="py-3 px-8 text-lg inline-block border border-[#696969] text-[#696969] rounded-full hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out hover:border-blue-500">
                      Appartments
                    </button>
                  </div>
                  <div className="mt-[35px] grid grid-cols-4 gap-8">
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-orange-400 text-white rounded-full absolute right-2 top-2">
                          For rent
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-green-400 text-white rounded-full absolute right-2 top-2">
                          For Sell
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-orange-400 text-white rounded-full absolute right-2 top-2">
                          For rent
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-orange-400 text-white rounded-full absolute right-2 top-2">
                          For rent
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-orange-400 text-white rounded-full absolute right-2 top-2">
                          For rent
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-orange-400 text-white rounded-full absolute right-2 top-2">
                          For rent
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-500px max-w-[400px] inline-block border border-gray-300 rounded-lg">
                      <Link
                        to={"/details"}
                        className="w-full block h-[300px] relative shadow-lg"
                      >
                        {/* <div className="w-full block h-[300px] relative shadow-lg">
                      </div> */}
                        <span className="py-2 px-6 bg-orange-400 text-white rounded-full absolute right-2 top-2">
                          For rent
                        </span>
                        <div className="flex w-full h-full">
                          <img
                            src="https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?w=826&t=st=1709194065~exp=1709194665~hmac=975d371924524fe9bf365377855339a83337b3f67c7e092b2d306841f197a47a"
                            alt="house img 1"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                      </Link>
                      <div className="w-full block mt-[15px] p-4">
                        <h4 className="font-bold text-xl">4-Bed Appartments</h4>
                        <p className="mt-2">
                          <span>
                            <svg
                              fill="#000000"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[20px] h-[20px] inline-block mr-2"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                              </g>
                            </svg>
                          </span>
                          22 Golagul, Addis Ababa
                        </p>
                        <div className="flex flex-wrap mt-2">
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="double_x5F_bed_1_"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M457.106,274.303c0.703-1.426,1.11-3.022,1.11-4.717V253.92c0-10.756-8.752-19.507-19.509-19.507 h-12.86v-87.491c0-15.948-12.974-28.922-28.922-28.922H115.878c-15.948,0-28.922,12.975-28.922,28.922v87.491H73.279 c-10.757,0-19.508,8.751-19.508,19.507v15.666c0,1.695,0.407,3.294,1.112,4.72C40.106,278.307,29.2,291.826,29.2,307.852v46.687 c0,8.568,6.97,15.539,15.539,15.539h32.245v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557 h314.527v14.557c0,5.165,4.202,9.366,9.367,9.366h8.399c5.165,0,9.367-4.201,9.367-9.366v-14.557h21.481 c8.569,0,15.539-6.971,15.539-15.539v-46.687C482.8,291.822,471.889,278.3,457.106,274.303z M94.156,146.922 c0-11.978,9.744-21.722,21.722-21.722h281.048c11.979,0,21.723,9.745,21.723,21.722v86.574h-42.646v-9.549 c0-5.765-4.689-10.455-10.455-10.455h-75.09c-5.765,0-10.455,4.69-10.455,10.455v9.549h-47.2v-9.549 c0-5.765-4.69-10.455-10.454-10.455h-75.091c-5.766,0-10.455,4.69-10.455,10.455v9.549H94.156V146.922z M368.803,223.947v9.549 h-81.601v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.09C367.342,220.692,368.803,222.153,368.803,223.947z M225.602,223.947v9.549 h-81.6v-9.549c0-1.794,1.46-3.255,3.255-3.255h75.091C224.142,220.692,225.602,222.153,225.602,223.947z M60.972,253.92 c0-6.786,5.521-12.307,12.308-12.307h365.429c6.786,0,12.309,5.521,12.309,12.307v15.666c0,1.931-1.57,3.502-3.502,3.502H64.474 c-1.932,0-3.502-1.571-3.502-3.502V253.92z M96.918,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M438.579,384.634c0,1.194-0.972,2.166-2.167,2.166h-8.399 c-1.195,0-2.167-0.972-2.167-2.166v-13.913h12.733V384.634z M475.6,354.538c0,4.599-3.74,8.339-8.339,8.339H44.739 c-4.599,0-8.339-3.74-8.339-8.339v-46.687c0-15.193,12.36-27.555,27.555-27.555h37.282h309.525h37.281 c15.195,0,27.556,12.361,27.556,27.555V354.538z"
                                  id="double_x5F_bed"
                                ></path>
                              </g>
                            </svg>
                            8 Bedroom
                          </div>
                          <div className="inline-block mx-auto">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              viewBox="0 0 512 512"
                              enableBackground="new 0 0 512 512"
                              id="bathtub"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g id="bathtub_1_">
                                  <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                  <rect
                                    height="43.701"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                    width="7.199"
                                    x="279.122"
                                    y="165.46"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                    width="7.201"
                                    x="295.235"
                                    y="176.856"
                                  ></rect>
                                  <rect
                                    height="33.5"
                                    transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                    width="7.199"
                                    x="263.102"
                                    y="164.3"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            8 bathroom
                          </div>
                          <div className="inline-block">
                            <svg
                              className="w-[20px] h-[20px] inline-block mr-2"
                              fill="#000000"
                              height="200px"
                              width="200px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 266.798 266.798"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                  <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                  <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                  <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                </g>
                              </g>
                            </svg>
                            850Sq. ft
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center w-full">
                          <h3 className="font-bold text-3xl">1,000 ETB</h3>
                          <button className="py-3 px-8 text-base inline-block bg-blue-500 text-white rounded-full ml-auto">
                            Send Offer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* About us */}
                <div className="mt-[150px]" id="about-us" ref={aboutUsView}>
                  <h4 className="text-orange-600 text-center text-xl">
                    About Us
                  </h4>
                  <h1 className="mt-4 text-5xl text-center font-bold">
                    {"Here's a breakdown of"}
                    <br />
                    how <span className="text-blue-500">
                      Real Estate Homes
                    </span>{" "}
                    works
                  </h1>
                  <div className="mt-[45px] grid grid-cols-2 min-h-[600px]">
                    <div className="relative py-4 before:content-[''] before:bg-blue-500 before:block before:absolute before:left-0 before:top-0 before:h-full before:w-1/2 before:-z-10 before:rounded-2xl">
                      <div className="grid grid-cols-2 w-auto max-w-[80%] ml-4 mr-auto bg-white rounded-2xl p-6 border shadow-lg">
                        <div className="w-full h-[200px] flex">
                          <img
                            src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                            alt="house image"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                        <div className="w-full h-full">
                          <h1>Our Interior</h1>
                          <h3>Budget: 1,200 ETB</h3>
                          <p>
                            Transform spaces into expressions of elegance and
                            comfort with our interior section
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 mt-4 w-auto max-w-[80%] ml-4 mr-auto bg-white rounded-2xl p-6 border shadow-lg">
                        <div className="w-full h-[200px] flex">
                          <img
                            src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                            alt="house image"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                        <div className="w-full h-full">
                          <h1>Our Interior</h1>
                          <h3>Budget: 1,200 ETB</h3>
                          <p>
                            Transform spaces into expressions of elegance and
                            comfort with our interior section
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 mt-4 w-auto max-w-[80%] ml-4 mr-auto bg-white rounded-2xl p-6 border shadow-lg">
                        <div className="w-full h-[200px] flex">
                          <img
                            src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                            alt="house image"
                            className="w-auto h-auto max-w-full max-h-full m-auto"
                          />
                        </div>
                        <div className="w-full h-full">
                          <h1>Our Interior</h1>
                          <h3>Budget: 1,200 ETB</h3>
                          <p>
                            Transform spaces into expressions of elegance and
                            comfort with our interior section
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-10">
                      <div className="flex gap-4 items-baseline">
                        <span className="self-center text-center bg-blue-100 text-blue-600 rounded-full p-4">
                          <svg
                            className="w-[45px] h-[45px] inline-block"
                            fill="currentColor"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 266.798 266.798"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <h3 className="font-bold text-xl">
                            Discover Real Estate
                          </h3>
                          <p className="mt-2 text-base">
                            Embark on a journey of discovery with our real
                            estate offerings, where every property unveils a
                            unique story and an opportunity for a new chapter in
                            your life.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-baseline">
                        <span className="self-center text-center bg-blue-100 text-blue-600 rounded-full p-4">
                          <svg
                            className="w-[45px] h-[45px] inline-block"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            enableBackground="new 0 0 512 512"
                            id="bathtub"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g id="bathtub_1_">
                                <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                <rect
                                  height="43.701"
                                  transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                  width="7.199"
                                  x="279.122"
                                  y="165.46"
                                ></rect>
                                <rect
                                  height="33.5"
                                  transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                  width="7.201"
                                  x="295.235"
                                  y="176.856"
                                ></rect>
                                <rect
                                  height="33.5"
                                  transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                  width="7.199"
                                  x="263.102"
                                  y="164.3"
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <h3 className="font-bold text-xl">
                            Discover Real Estate
                          </h3>
                          <p className="mt-2 text-base">
                            Embark on a journey of discovery with our real
                            estate offerings, where every property unveils a
                            unique story and an opportunity for a new chapter in
                            your life.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-baseline">
                        <span className="self-center text-center bg-blue-100 text-blue-600 rounded-full p-4">
                          <svg
                            className="w-[45px] h-[45px] inline-block"
                            fill="currentColor"
                            height="200px"
                            width="200px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 266.798 266.798"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <h3 className="font-bold text-xl">
                            Discover Real Estate
                          </h3>
                          <p className="mt-2 text-base">
                            Embark on a journey of discovery with our real
                            estate offerings, where every property unveils a
                            unique story and an opportunity for a new chapter in
                            your life.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-baseline">
                        <span className="self-center text-center bg-blue-100 text-blue-600 rounded-full p-4">
                          <svg
                            className="w-[45px] h-[45px] inline-block"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            enableBackground="new 0 0 512 512"
                            id="bathtub"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g id="bathtub_1_">
                                <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                <rect
                                  height="43.701"
                                  transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                  width="7.199"
                                  x="279.122"
                                  y="165.46"
                                ></rect>
                                <rect
                                  height="33.5"
                                  transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                  width="7.201"
                                  x="295.235"
                                  y="176.856"
                                ></rect>
                                <rect
                                  height="33.5"
                                  transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                  width="7.199"
                                  x="263.102"
                                  y="164.3"
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <h3 className="font-bold text-xl">
                            Discover Real Estate
                          </h3>
                          <p className="mt-2 text-base">
                            Embark on a journey of discovery with our real
                            estate offerings, where every property unveils a
                            unique story and an opportunity for a new chapter in
                            your life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact Us */}
                <div className="mt-[150px]" id="contact-us" ref={contactUsView}>
                  <div className="grid grid-cols-2">
                    <div>
                      <h4 className="text-orange-600 text-left text-xl">
                        Contact Us
                      </h4>
                      <h1 className="mt-4 text-5xl text-left font-bold">
                        Easy way to contact us
                      </h1>
                      <p className="mt-2">
                        Feel free to reach out to us with any inquiries,
                        feedback or assistance you may need. Our dedicated
                        support team is ready to assist you.
                      </p>
                      <div className="mt-[45px]">
                        <div className="grid grid-cols-2 gap-8">
                          <div className="bg-slate-100 p-6 leading-normal rounded-2xl">
                            <div className="flex items-start">
                              <span className="self-center align-top mr-4 text-center bg-blue-100 text-blue-600 rounded-2xl p-4">
                                <svg
                                  className="w-[35px] h-[35px] inline-block"
                                  fill="currentColor"
                                  height="200px"
                                  width="200px"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 266.798 266.798"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g>
                                      <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                      <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                      <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                      <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-top">
                                <h3 className="text-lg font-bold block">
                                  Call
                                </h3>
                                <p className="block text-base">+251911223344</p>
                              </span>
                            </div>
                            <button className="mt-6 py-3 px-8 w-full text-lg block bg-blue-100 text-black rounded-full ml-auto">
                              Call Now
                            </button>
                          </div>
                          <div className="bg-slate-100 p-6 leading-normal rounded-2xl">
                            <div className="flex items-start">
                              <span className="self-center align-top mr-4 text-center bg-blue-100 text-blue-600 rounded-2xl p-4">
                                <svg
                                  className="w-[35px] h-[35px] inline-block"
                                  fill="currentColor"
                                  viewBox="0 0 512 512"
                                  enableBackground="new 0 0 512 512"
                                  id="bathtub"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g id="bathtub_1_">
                                      <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                      <rect
                                        height="43.701"
                                        transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                        width="7.199"
                                        x="279.122"
                                        y="165.46"
                                      ></rect>
                                      <rect
                                        height="33.5"
                                        transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                        width="7.201"
                                        x="295.235"
                                        y="176.856"
                                      ></rect>
                                      <rect
                                        height="33.5"
                                        transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                        width="7.199"
                                        x="263.102"
                                        y="164.3"
                                      ></rect>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-top">
                                <h3 className="text-lg font-bold block">
                                  Call
                                </h3>
                                <p className="block text-base">+251911223344</p>
                              </span>
                            </div>
                            <button className="mt-6 py-3 px-8 w-full text-lg block bg-blue-100 text-black rounded-full ml-auto">
                              Call Now
                            </button>
                          </div>
                          <div className="bg-slate-100 p-6 leading-normal rounded-2xl">
                            <div className="flex items-start">
                              <span className="self-center align-top mr-4 text-center bg-blue-100 text-blue-600 rounded-2xl p-4">
                                <svg
                                  className="w-[35px] h-[35px] inline-block"
                                  fill="currentColor"
                                  viewBox="0 0 512 512"
                                  enableBackground="new 0 0 512 512"
                                  id="bathtub"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g id="bathtub_1_">
                                      <path d="M440.908,266.62h-3.936V135.815l-0.061-3.601h-0.236c-3.348-36.628-33.963-64.836-71.152-64.836 c-28.881,0-55.197,17.775-66.117,44.426c-4.104,0.084-8.193,0.95-12.082,2.607c-7.99,3.405-14.176,9.718-17.42,17.78l-0.178,0.444 c-0.938,2.329-0.912,4.885,0.072,7.194c0.984,2.311,2.809,4.099,5.139,5.036l42.889,17.257c1.145,0.461,2.33,0.679,3.494,0.679 c3.727,0,7.262-2.229,8.736-5.895l0.18-0.446c3.242-8.058,3.152-16.896-0.254-24.885c-1.527-3.587-3.646-6.807-6.242-9.563 c6.832-16.972,23.363-28.235,41.783-28.235c24.84,0,45.049,20.208,45.049,45.048V266.62H201.26 c-1.885-3.537-5.608-5.952-9.889-5.952h-49.6c-4.279,0-8.002,2.415-9.887,5.952h-60.78c-3.631,0-7.055,1.415-9.649,3.993 c-2.575,2.576-3.995,5.998-3.995,9.639c0,7.517,6.121,13.633,13.645,13.633h9.601v118.367c0,9.138,7.438,16.572,16.583,16.572 h13.284v9.994c0,3.199,2.603,5.803,5.802,5.803h11.391c3.199,0,5.802-2.604,5.802-5.803v-9.994h252.205v9.994 c0,3.199,2.604,5.803,5.803,5.803h11.391c3.199,0,5.803-2.604,5.803-5.803v-9.994h11.775c9.145,0,16.586-7.435,16.586-16.572 V293.885h3.779c3.639,0,7.061-1.42,9.639-3.996c2.574-2.574,3.992-5.997,3.992-9.637 C454.539,272.735,448.426,266.62,440.908,266.62z M323.555,153.778l-0.18,0.445c-0.451,1.125-1.74,1.672-2.861,1.221 l-42.889-17.257c-0.545-0.219-0.973-0.638-1.203-1.179c-0.229-0.54-0.236-1.138-0.014-1.688l0.178-0.445 c5.211-12.95,19.99-19.247,32.934-14.035c6.273,2.523,11.189,7.339,13.84,13.561C326.01,140.62,326.08,147.501,323.555,153.778z M365.523,86.579c-20.576,0-39.119,12.121-47.539,30.601c-1.801-1.183-3.73-2.197-5.775-3.02c-1.73-0.696-3.498-1.229-5.283-1.619 c10.291-22.856,33.354-37.962,58.598-37.962c34.482,0,62.678,26.968,64.193,61.395l0.055,0.917v129.725h-12V138.827 C417.771,110.018,394.334,86.579,365.523,86.579z M137.773,271.868c0-2.206,1.794-4,3.999-4h49.6c2.206,0,4.001,1.794,4.001,4 v83.899h-57.6V271.868z M137.773,362.968h57.6v3.9c0,2.205-1.795,4-4.001,4h-49.6c-2.205,0-3.999-1.795-3.999-4V362.968z M80.706,286.684h-9.601c-3.553,0-6.444-2.885-6.444-6.432c0-1.717,0.67-3.33,1.879-4.538c1.229-1.222,2.85-1.894,4.565-1.894 h59.468v12.863H80.706z M130.573,293.885v29.783H87.905v-29.783H130.573z M126.367,437.42h-8.595v-8.595h8.595V437.42z M401.568,437.42h-8.596v-8.595h8.596V437.42z M429.928,412.252c0,5.168-4.209,9.372-9.385,9.372H97.289 c-5.174,0-9.384-4.204-9.384-9.372v-81.384h42.668v36c0,6.176,5.024,11.2,11.199,11.2h49.6c6.177,0,11.201-5.024,11.201-11.2v-36 h227.355V412.252z M429.928,323.668H202.573v-29.783h227.355V323.668z M445.455,284.798c-1.215,1.217-2.83,1.886-4.547,1.886 h-3.779H202.573V273.82h238.335c3.547,0,6.432,2.885,6.432,6.432C447.34,281.969,446.67,283.582,445.455,284.798z"></path>
                                      <rect
                                        height="43.701"
                                        transform="matrix(-0.9314 -0.364 0.364 -0.9314 477.8781 464.6737)"
                                        width="7.199"
                                        x="279.122"
                                        y="165.46"
                                      ></rect>
                                      <rect
                                        height="33.5"
                                        transform="matrix(0.9314 0.3639 -0.3639 0.9314 90.9336 -95.4659)"
                                        width="7.201"
                                        x="295.235"
                                        y="176.856"
                                      ></rect>
                                      <rect
                                        height="33.5"
                                        transform="matrix(-0.9314 -0.364 0.364 -0.9314 449.2144 446.7517)"
                                        width="7.199"
                                        x="263.102"
                                        y="164.3"
                                      ></rect>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-top">
                                <h3 className="text-lg font-bold block">
                                  Call
                                </h3>
                                <p className="block text-base">+251911223344</p>
                              </span>
                            </div>
                            <button className="mt-6 py-3 px-8 w-full text-lg block bg-blue-100 text-black rounded-full ml-auto">
                              Call Now
                            </button>
                          </div>
                          <div className="bg-slate-100 p-6 leading-normal rounded-2xl">
                            <div className="flex items-start">
                              <span className="self-center align-top mr-4 text-center bg-blue-100 text-blue-600 rounded-2xl p-4">
                                <svg
                                  className="w-[35px] h-[35px] inline-block"
                                  fill="currentColor"
                                  height="200px"
                                  width="200px"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 266.798 266.798"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g>
                                      <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                      <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                      <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                      <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-top">
                                <h3 className="text-lg font-bold block">
                                  Call
                                </h3>
                                <p className="block text-base">+251911223344</p>
                              </span>
                            </div>
                            <button className="mt-6 py-3 px-8 w-full text-lg block bg-blue-100 text-black rounded-full ml-auto">
                              Call Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex max-h-[400px]">
                      <img
                        src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                        alt="house image"
                        className="w-auto h-auto max-w-full max-h-full m-auto"
                      />
                    </div>
                  </div>
                </div>
                {/* Email Us */}
                <div
                  style={{
                    backgroundImage:
                      "url('https://img.freepik.com/free-vector/wave-textures-white-background-vector_53876-64053.jpg?w=1380&t=st=1709234151~exp=1709234751~hmac=dca556ba1d5f4383eaed3d646d651632e6bf45acaede0a042150578cc3f7de02')",
                  }}
                  className="mt-[150px] mb-[-100px] z-10 relative text-center text-white bg-blue-500 rounded-2xl p-16
                bg-cover bg-no-repeat bg-center bg-b bg-blend-color-burn"
                >
                  <h2 className="text-5xl font-bold">
                    Sign up to our newsletter
                  </h2>
                  <p className="mt-4">
                    Unlock exlusive updates and offers by sbscripbing to our
                    newsletter - your gateway
                    <br />
                    to a world of curated content and special promotions
                  </p>
                  <div className="w-full mx-auto py-[5px] px-[10px] mt-[35px] flex items-center justify-start text-center border border-gray-200 max-w-[600px] bg-white shadow-md rounded-full">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full bg-transparent min-h-[20px] pl-4 outline-none text-lg focus-within:outline-none"
                    />
                    <button className="py-3 px-8 text-lg inline-block bg-blue-500 text-white rounded-full ml-auto">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="text-white bg-slate-950 w-full pt-48 p-16 z-0 relative">
                <div className="container mx-auto grid grid-cols-4 gap-8">
                  <div>
                    <div className="w-full flex items-center h-[80px]">
                      <img
                        src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                        alt="house image"
                        className="w-auto h-auto max-w-full max-h-full m-0"
                      />
                      <h2 className="text-2xl inline-block px-4 text-left font-bold capitalize">
                        Real Estate Homes
                      </h2>
                    </div>
                    <p className="mt-4 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed, magnam ipsum numquam fugiat aliquam error minus
                      suscipit odit eum tempore porro voluptatem ut, quam
                      debitis culpa, aut et dolore tenetur?
                    </p>
                    <div className="flex flex-wrap gap-4 mt-[35px]">
                      <span className="inline-block bg-white text-black rounded-full p-2">
                        <svg
                          className="w-[45px] h-[45px] inline-block p-2"
                          fill="currentColor"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.798 266.798"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                              <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                              <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                              <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="inline-block bg-white text-black rounded-full p-2">
                        <svg
                          className="w-[45px] h-[45px] inline-block p-2"
                          fill="currentColor"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.798 266.798"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                              <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                              <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                              <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="inline-block bg-white text-black rounded-full p-2">
                        <svg
                          className="w-[45px] h-[45px] inline-block p-2"
                          fill="currentColor"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.798 266.798"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                              <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                              <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                              <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Buy</h4>
                    <ul className="text-lg mt-2">
                      <li className="mb-1">Talent Sourcing</li>
                      <li className="mb-1">Employers Referrals</li>
                      <li className="">Annual Programs</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Rent</h4>
                    <ul className="text-lg mt-2">
                      <li className="mb-1">Annual Programs</li>
                      <li className="mb-1">Employers Referrals</li>
                      <li className="">Talent Sourcing</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Contact</h4>
                    <ul className="text-lg mt-2">
                      <li className="mb-1">Relationship Platform</li>
                      <li className="mb-1">Recruiting Wheel</li>
                      <li className="">Integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/details"
          {...routeConfig}
          element={
            <div className="">
              <div className="bg-[#dee8ff] sticky top-0 z-20">
                <div className="container mx-auto text-[#000000] flex items-center justify-between py-[8px] px-[50px]">
                  <Link
                    to={"/"}
                    className="inline-flex h-[80px] rounded-full overflow-hidden align-middle"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-auto h-auto max-w-full max-h-full m-auto"
                    />
                  </Link>
                  <div className="inline-block">
                    <span
                      onClick={scrollToTarget}
                      className="py-2 px-5 text-lg inline-block opacity-90 hover:cursor-pointer hover:opacity-100 transition duration-200 ease-in-out"
                    >
                      Properties
                    </span>
                    <span
                      onClick={scrollToTarget1}
                      className="py-2 px-5 text-lg inline-block opacity-90 hover:cursor-pointer hover:opacity-100 transition duration-200 ease-in-out"
                    >
                      About Us
                    </span>
                    <span
                      onClick={scrollToTarget2}
                      className="py-2 px-5 text-lg inline-block opacity-90 hover:cursor-pointer hover:opacity-100 transition duration-200 ease-in-out"
                    >
                      Contact Us
                    </span>
                  </div>
                </div>
              </div>
              <div className="container mx-auto">
                <div className="mt-[60px]" id="contact-us" ref={contactUsView}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full flex max-h-[700px]">
                      <img
                        src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                        alt="house image"
                        className="w-auto h-auto max-w-full max-h-full m-auto"
                      />
                    </div>
                    <div>
                      <h1 className="mt-4 text-5xl text-left font-bold">
                        Luxury Home
                      </h1>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error quisquam, placeat quam excepturi architecto
                        accusamus reprehenderit nihil qui recusandae sit ducimus
                      </p>
                      <h2 className="border-y py-4 my-6 font-bold text-6xl text-blue-500">
                        100,000 ETB
                      </h2>
                      <div className="mt-[45px]">
                        <h1 className="mt-4 text-2xl text-left font-bold">
                          Property Detail
                        </h1>
                        <div className="mt-8 grid grid-cols-2 gap-8">
                          <div className="p-6  border leading-normal rounded-2xl">
                            <div className="flex items-start">
                              <span className="self-center align-top mr-4 text-center rounded-2xl p-4">
                                <svg
                                  className="w-[35px] h-[35px] inline-block"
                                  fill="currentColor"
                                  height="200px"
                                  width="200px"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 266.798 266.798"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g>
                                      <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                      <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                      <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                      <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-top">
                                <h3 className="text-lg font-bold block">
                                  Bedroom
                                </h3>
                                <p className="block text-base">4</p>
                              </span>
                            </div>
                          </div>
                          <div className="p-6  border leading-normal rounded-2xl">
                            <div className="flex items-start">
                              <span className="self-center align-top mr-4 text-center rounded-2xl p-4">
                                <svg
                                  className="w-[35px] h-[35px] inline-block"
                                  fill="currentColor"
                                  height="200px"
                                  width="200px"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 266.798 266.798"
                                >
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g>
                                      <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                                      <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                                      <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                                      <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="inline-block align-top">
                                <h3 className="text-lg font-bold block">
                                  Bathroom
                                </h3>
                                <p className="block text-base">3</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-[45px]">
                        <h1 className="mt-4 text-2xl text-left font-bold">
                          Property Description
                        </h1>
                        <p className="mt-8">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Sapiente explicabo natus fugit autem esse
                          laboriosam eaque ducimus quod doloremque maiores, quo
                          molestias optio reiciendis ipsum sit tenetur quis vero
                          cum? Tempora veniam enim quidem? Error, repellendus
                          voluptates dignissimos voluptatibus, amet voluptatum
                          natus delectus consectetur modi doloribus illum?
                          Commodi, maiores exercitationem nam suscipit, tenetur,
                          omnis corrupti repellat quibusdam iure voluptates
                          quas. Labore praesentium ex sed minima voluptatem
                          doloribus, dolores quidem ipsam nam sit aliquid nihil
                          reprehenderit aliquam saepe expedita asperiores
                          deserunt atque velit consequuntur? Magni voluptatibus
                          placeat vero maxime distinctio tenetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Email Us */}
                <div
                  style={{
                    backgroundImage:
                      "url('https://img.freepik.com/free-vector/wave-textures-white-background-vector_53876-64053.jpg?w=1380&t=st=1709234151~exp=1709234751~hmac=dca556ba1d5f4383eaed3d646d651632e6bf45acaede0a042150578cc3f7de02')",
                  }}
                  className="mt-[150px] mb-[-100px] z-10 relative text-center text-white bg-blue-500 rounded-2xl p-16
                bg-cover bg-no-repeat bg-center bg-b bg-blend-color-burn"
                >
                  <h2 className="text-5xl font-bold">
                    Sign up to our newsletter
                  </h2>
                  <p className="mt-4">
                    Unlock exlusive updates and offers by sbscripbing to our
                    newsletter - your gateway
                    <br />
                    to a world of curated content and special promotions
                  </p>
                  <div className="w-full mx-auto py-[5px] px-[10px] mt-[35px] flex items-center justify-start text-center border border-gray-200 max-w-[600px] bg-white shadow-md rounded-full">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full bg-transparent min-h-[20px] pl-4 outline-none text-lg focus-within:outline-none"
                    />
                    <button className="py-3 px-8 text-lg inline-block bg-blue-500 text-white rounded-full ml-auto">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="text-white bg-slate-950 w-full pt-48 p-16 z-0 relative">
                <div className="container mx-auto grid grid-cols-4 gap-8">
                  <div>
                    <div className="w-full flex items-center h-[80px]">
                      <img
                        src="https://img.freepik.com/free-photo/hand-holding-house-real-estate-property-model_53876-129010.jpg?w=826&t=st=1709192446~exp=1709193046~hmac=6ca633d544e2422b2636c453b002bd36f6f08c2b75cdbc76c11772e90dec65d0"
                        alt="house image"
                        className="w-auto h-auto max-w-full max-h-full m-0"
                      />
                      <h2 className="text-2xl inline-block px-4 text-left font-bold capitalize">
                        Real Estate Homes
                      </h2>
                    </div>
                    <p className="mt-4 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed, magnam ipsum numquam fugiat aliquam error minus
                      suscipit odit eum tempore porro voluptatem ut, quam
                      debitis culpa, aut et dolore tenetur?
                    </p>
                    <div className="flex flex-wrap gap-4 mt-[35px]">
                      <span className="inline-block bg-white text-black rounded-full p-2">
                        <svg
                          className="w-[45px] h-[45px] inline-block p-2"
                          fill="currentColor"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.798 266.798"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                              <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                              <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                              <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="inline-block bg-white text-black rounded-full p-2">
                        <svg
                          className="w-[45px] h-[45px] inline-block p-2"
                          fill="currentColor"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.798 266.798"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                              <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                              <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                              <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="inline-block bg-white text-black rounded-full p-2">
                        <svg
                          className="w-[45px] h-[45px] inline-block p-2"
                          fill="currentColor"
                          height="200px"
                          width="200px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 266.798 266.798"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path d="M94.675,103.299c-2.526,0-4.574,2.048-4.574,4.574v69.403c0,2.526,2.048,4.574,4.574,4.574h46.267h46.268h46.266 c2.526,0,4.573-2.048,4.573-4.574v-69.403c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.119 v-64.829c0-2.526-2.047-4.574-4.573-4.574h-46.268c-2.526,0-4.573,2.048-4.573,4.574v64.829h-37.12v-64.829 C99.249,105.347,97.201,103.299,94.675,103.299z M145.515,112.447h37.122v60.255h-37.122V112.447z"></path>
                              <path d="M69.16,111.107l94.911-94.911l94.917,94.912c0.893,0.893,2.063,1.339,3.234,1.339s2.341-0.447,3.234-1.34 c1.786-1.786,1.786-4.682,0-6.468l-47.735-47.732V9.728c0-2.526-2.047-4.574-4.573-4.574c-2.526,0-4.573,2.048-4.573,4.574v38.033 l-41.27-41.267c-1.787-1.786-4.682-1.786-6.469,0l-98.144,98.145c-1.786,1.786-1.786,4.682,0,6.468 C64.478,112.893,67.374,112.893,69.16,111.107z"></path>
                              <path d="M262.222,210.458c-2.526,0-4.573,2.048-4.573,4.574v19.024H70.5v-19.024c0-2.526-2.048-4.574-4.574-4.574 c-2.526,0-4.574,2.048-4.574,4.574v47.192c0,2.526,2.048,4.574,4.574,4.574c2.526,0,4.574-2.048,4.574-4.574v-19.021h187.149 v19.021c0,2.526,2.047,4.574,4.573,4.574c2.526,0,4.573-2.048,4.573-4.574v-47.192 C266.796,212.506,264.749,210.458,262.222,210.458z"></path>
                              <path d="M51.767,9.147c2.526,0,4.574-2.048,4.574-4.574S54.293,0,51.767,0H4.575C2.049,0,0.002,2.048,0.002,4.574 s2.048,4.574,4.574,4.574h19.021v187.149H4.575c-2.526,0-4.574,2.048-4.574,4.574c0,2.526,2.048,4.574,4.574,4.574h47.192 c2.526,0,4.574-2.048,4.574-4.574c0-2.526-2.048-4.574-4.574-4.574H32.744V9.147H51.767z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Buy</h4>
                    <ul className="text-lg mt-2">
                      <li className="mb-1">Talent Sourcing</li>
                      <li className="mb-1">Employers Referrals</li>
                      <li className="">Annual Programs</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Rent</h4>
                    <ul className="text-lg mt-2">
                      <li className="mb-1">Annual Programs</li>
                      <li className="mb-1">Employers Referrals</li>
                      <li className="">Talent Sourcing</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-xl">Contact</h4>
                    <ul className="text-lg mt-2">
                      <li className="mb-1">Relationship Platform</li>
                      <li className="mb-1">Recruiting Wheel</li>
                      <li className="">Integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
