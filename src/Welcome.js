import { ChevronDoubleDownIcon, MailIcon } from "@heroicons/react/outline";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="absolute top-1 right-1">
        <div className="flex items-center px-1 text-white border-2 border-white rounded cursor-pointer hover:bg-white hover:text-black">
          <MailIcon className="w-4 h-4 mr-1 " />
          <p className="">Contact Me</p>
        </div>
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

        <a className="p-2 mx-auto mt-5 text-white duration-150 ease-out border-2 border-white rounded cursor-pointer hover:bg-white hover:text-black">
          Download Resume
        </a>
      </div>
      <p className="absolute left-0 right-0 p-6 mx-auto mt-12 text-center text-white duration-150 ease-in-out cursor-pointer select-none bottom-10 hover:scale-125 active:scale-100">
        See my work <ChevronDoubleDownIcon className="w-6 h-6 mx-auto" />
      </p>
    </div>
  );
}

export default Welcome;
