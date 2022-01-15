import { ChevronDoubleDownIcon, MailIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import stack from "./assets/stack.svg";
import works from "./data/works.json";

function Welcome() {
  const worksRef = useRef();

  const scrollFunction = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <div className="mx-auto absolute top-20 left-0 right-0">
          <img className="bg-black mx-auto h-32" src={stack} alt="" />
        </div>
        <div className="absolute top-3 right-3">
          <a
            href="mailto:ogulcan.bozkurt0@gmail.com"
            className="flex items-center px-1 text-white border-2 border-white rounded cursor-pointer hover:bg-white hover:text-black duration-150 ease-out"
          >
            <MailIcon className="w-4 h-4 mr-1 " />
            <p className="">Contact Me</p>
          </a>
        </div>
        <div className="container h-full md:h-[50vh] flex flex-col justify-center">
          <h1 className="h-auto text-lg font-semibold text-center text-white">
            HELLO!
          </h1>

          <h2 className="text-4xl font-bold text-center text-white">
            I am Ogulcan Bozkurt, a passionate Front End Developer.
          </h2>

          <p className="mt-5 text-center text-white">
            I love to design applications and translate designs into code.
          </p>

          <a
            href="https://github.com/Gyunbie/personal/raw/main/ogulcan-resume-01-15-22.pdf"
            className="p-2 mx-auto mt-5 text-white duration-150 ease-out border-2 border-white rounded cursor-pointer hover:bg-white hover:text-black"
          >
            Download Resume
          </a>
        </div>
        <p
          onClick={() => scrollFunction(worksRef)}
          className="absolute inline-block p-6 mx-auto mt-12 text-center text-white duration-150 ease-in-out cursor-pointer select-none bottom-10 hover:scale-125 active:scale-100"
        >
          See my work <ChevronDoubleDownIcon className="w-6 h-6 mx-auto" />
        </p>
      </div>

      <div ref={worksRef} className="bg-black flex flex-col items-center">
        {Object.keys(works.data).map((key, index) => (
          <div
            key={index}
            className="inline-block container bg-white rounded p-2 my-5"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-6 mr-3 flex flex-col">
                <h1 className="text-3xl font-bold uppercase mb-2 mt-1 text-center">
                  {works.data[key].title}
                </h1>
                <p className="leading-5 text-justify ml-1">
                  {works.data[key].description}
                </p>

                <div className="justify-self-end mt-auto">
                  <h1 className="uppercase font-semibold text-lg mb-0.5 text-center select-none">
                    Technologies used
                  </h1>
                  <div className="flex justify-center">
                    {works.data[key].technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center w-12 mr-1 mb-1 hover:scale-125 duration-200"
                      >
                        <img
                          className="w-10 h-10 mb-0.5 rounded"
                          src={require(`./assets/icons/${tech
                            .replaceAll(" ", "")
                            .toLowerCase()}.svg`)}
                          alt=""
                        />
                        <p className="text-[8px] text-center leading-[0.5rem] select-none">
                          {tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={works.data[key].link}
                target={"_blank"}
                className="col-span-6 cursor-pointer relative duration-100 ease-out active:scale-95"
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-gray-400 opacity-25 rounded-lg duration-200 ease-out"></div>
                <img
                  className="rounded-lg border-2 p-0.5 border-black"
                  src={require(`./assets/screens/${works.data[key].image}`)}
                  alt=""
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Welcome;
