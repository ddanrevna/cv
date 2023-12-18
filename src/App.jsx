import Project from "../src/components/Project";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-1044 p-8 ">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/5">
            <div className="mb-4 px-5 py-2 bg-opacity-20">
              <div className="flex justify-center items-center">
                <img
                  src="/img/MyProfile.jpg"
                  alt="Photo of Komisaruk Darya"
                  className="w-80 h-80"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-left uppercase block sm:hidden">
                Komisaruk Darya Andreevna
              </h2>
              <h2 className="text-lg font-bold mt-2 mb-2 flex justify-end items-center uppercase">
                About Me
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>

              <p className="text-gray-600 text-left px-5 ">
                Hello! My name is Darya. I'm looking for Front-end developer and
                UX/UI designer positions. I have experience in creating designs
                for commercial cooperation. I am also sociable and open-minded!
              </p>
            </div>

            <div className="mb-4 px-5 py-2 ">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className="text-xl uppercase">working skills</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <h3 className="text-base font-bold  text-gray-800  text-left">
                  UI/UX Designer:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>Figma, Adobe Photoshop, Adobe Illustrator</li>
                </ul>
              </div>
              <div className="mb-4 px-5">
                <h3 className="text-base font-bold text-left text-gray-800 ">
                  Front-End Developer:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>HTML, CSS, Javascript, ReactJS</li>
                </ul>
              </div>
            </div>

            <div className=" px-5 py-2 ">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Languages</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>Russian - Native</li>
                  <li>English - B1</li>
                </ul>
              </div>
            </div>
            <a href="/CV.pdf" download>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-5 rounded hidden sm:block">
                Download CV
              </button>
            </a>
          </div>

          <div className="w-full sm:w-3/5">
            <div className="mb-4 px-5 py-2 ">
              <h2 className="text-4xl font-bold mb-2 text-left uppercase  hidden sm:block">
                Komisaruk Darya Andreevna
              </h2>
              <div className="text-left mt-3 hidden sm:block">
                <span className="text-blue-950 bg-opacity-50 text-2xl mb-2 uppercase py-2 ">
                  Frontend Developer
                </span>
              </div>

              <h2 className="text-lg font-bold mb-2 mt-6 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Contacts</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <ul className="list-disc text-lg list-inside px-5 text-left">
                <li>
                  <a
                    className="text-blue-900"
                    href="https://github.com/ddanrevna"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-900"
                    href="mailto:dashakomisaruk@gmail.com"
                  >
                    dashakomisaruk@gmail.com
                  </a>
                </li>
                <li>
                  <a className="text-blue-900" href="https://t.me/danrevna">
                    telegram
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-2 px-5 py-2">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Education</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <h3 className="text-lg mb-2 text-left">
                  <span className="font-bold">
                    BSC of Web-Programming and Internet Technologies
                  </span>
                  <br />
                  2022 - 2026 Belarusian State University
                </h3>
              </div>
            </div>

            <div className="mb-2 px-5 py-2">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className=" px-2 text-xl uppercase  ">Location</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="mb-4 px-5">
                <h3 className="text-lg mb-2 text-left">Minsk, Belarus</h3>
              </div>
            </div>

            <div className="mb-4 px-5 ">
              <h2 className="text-lg font-bold mb-2 flex justify-end items-center">
                <span className="px-2 text-xl uppercase">Projects</span>
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>

              <Project
                title="Sortable TodoList"
                linkToImg="/img/todo.png"
                description="This application was created by using HTML, ReactJS, Module CSS."
              />
              <Project
                title="Lamoda"
                linkToImg="/img/lamoda.png"
                description="This project was created by using HTML, ReactJS, Material UI."
              />
              <Project
                title="API&SPA"
                linkToImg="/img/api.png"
                description="This project was created by using HTML, ReactJS, React Router, Tailwind."
              />
            </div>
            <div className="flex justify-center block sm:hidden">
              <a href="/CV.pdf" download>
                <button className="bg-sky-500 hover:bg-sky-800 text-white font-bold py-2 px-4 mt-8 rounded flex items-center">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
