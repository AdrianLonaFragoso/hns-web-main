import "./App.css";
import logoWhite from "./assets/logo-hypernetics-white.svg";
import icoPlace from "./assets/react.svg";

function App() {
  return (
    <>
      <header className="flex fixed text-white w-full px-20 bg-slate-900">
        <img src={logoWhite} width="300" alt="" />
        <ul className="flex ml-auto items-center gap-10">
          <li>Nuestros servicios</li>
          <li>Nuestro Trabajo</li>
          <li>Nosotros</li>
          <li>
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Contacto
            </button>
          </li>
        </ul>
      </header>

      <main className="flex flex-col bg-slate-900 h-screen text-white px-20">
        <article className="flex items-center justify-center flex-col h-full">
          <h1 className="text-[4rem]  leading-none mb-4 text-center">
            Construyendo tu <br />
            <span className="text-purple-700">Ecosistema</span> Digital
          </h1>

          <p className="text-center mb-4">
            Contamos con diversas soluciones que impulsaran <br /> el manejo de
            tu negocio
          </p>

          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Ver más
          </button>
        </article>
      </main>

      {/* QUE HACEMOS  */}

      <section className="flex flex-col items-center justify-center px-20 text-center h-screen">
        <div className="max-w-[500px]">
          <h1 className="text-[2rem]">
            <span className="text-purple-700">Qué</span> hacemos
          </h1>
          <p>
            Somos una consultora líder en desarrollo de software dedicada a
            brindar soluciones tecnológicas innovadoras y personalizadas para
            impulsar el éxito de tu negocio. Nuestro equipo de expertos está
            listo para transformar tus ideas en realidad
          </p>
        </div>

        <div className="flex gap-10 mt-20">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={icoPlace} width="50" className="mb-4" alt="" />

            <h3 className="text-2xl mb-4">Impulsamos la inovación</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
              dignissimos quaerat hic inventore modi
            </p>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={icoPlace} width="50" className="mb-4" alt="" />

            <h3 className="text-2xl mb-4">Impulsamos la inovación</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
              dignissimos quaerat hic inventore modi
            </p>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={icoPlace} width="50" className="mb-4" alt="" />

            <h3 className="text-2xl mb-4">Impulsamos la inovación</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
              dignissimos quaerat hic inventore modi
            </p>
          </div>
        </div>
      </section>

      {/* SOLUCIONES TECNOLOGICAS */}

      <section className="bg-purple-900 h-screen text-white px-20">
        <h1 className="text-[2rem]">Soluciones tecnológicas</h1>
      </section>

      {/* NUESTROS CLIENTES  */}
      <section className="h-[50vh] flex items-center justify-center flex-col">
        <h1 className="text-[2rem] mb-10">
          <span className="text-purple-700">Nuestros</span> Clientes
        </h1>

        <div className="flex gap-5">
          <img src="https://placehold.co/200x50" alt="" />
          <img src="https://placehold.co/200x50" alt="" />
          <img src="https://placehold.co/200x50" alt="" />
          <img src="https://placehold.co/200x50" alt="" />
          <img src="https://placehold.co/200x50" alt="" />
        </div>
      </section>

      <footer className="text-white bg-[#382551] p-5 flex justify-around items-center h-[25vh]">
        <div>
          <h4>Contáctanos</h4>
          <p>Whatsapp: 23424324</p>
          <p>info@hypernetics.com.mx</p>
        </div>

        <div>
          <img src={logoWhite} width={300} alt="" />
        </div>

        <div>
          <h4>Síguenos en:</h4>
        </div>
      </footer>
      <section className="bg-black text-white p-3 text-center">
        <a href="#" className="mr-5">
          Aviso de privacidad
        </a>
        <a href="#">Términos de servicio</a>
      </section>
    </>
  );
}

export default App;
