import { Features } from "../Features";

export const ContentProfile = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Jean-Luc 
                <br className="hidden md:block" />
                Ho{' '}
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
              Future designer graphique, je suis passionné par le monde numérique et je cherche à étendre mes
                connaissances. J’adore tout ce qui touche au Photoshop/After Effect et à l’intégration vidéo et web.
                Je me familiarise rapidement avec de nouvelles technologies, outils et environnements .
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Features/>
        </div>
      </div>
    );
  };