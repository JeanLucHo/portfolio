import React from 'react';
import Fade from 'react-reveal/Fade';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";

export const BlogWeb = () => {
    // JSX can be assigned to a variable
const captionOne = (
  <div className="SRLCustomCaption myCustomCaptionOne">
              Exercice de design fait dans le cours de design graphique.
  </div>
)
const captionTwo = (
  <div className="SRLCustomCaption myCustomCaptionTwo">
                  Exercice de design fait dans le cours de design graphique.
  </div>
)
const captionThree = (
  <a
    className="SRLCustomCaption myCustomButton"
  >
                  Exercice de design fait dans le cours de design graphique.
  </a>
)

// Create an array with the custom captions that you want to use
const customCaptions = [
  { id: 0, caption: captionOne },
  { id: 1, caption: captionTwo },
  { id: 2, caption: captionThree }
]
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 secondblog">
            <Fade right>
       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Web</span>
            </span>{' '}
          </h2>
        </div>
        <SimpleReactLightbox>
            <SRLWrapper customCaptions={customCaptions}>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="img/web/web1-min.png" aria-label="Article">
            <img
              src="img/web/web1-min.png"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Automne 2019
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Design d'un site de volley ball</p>
            </a>
            <p className="mb-4 text-gray-700">
              Design d'un site de volley ball pour le cours de design d'interface.
            </p>
            <a
                href="https://volleyball-montreal.netlify.app/"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Voir le site
              </a>

          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="img/web/web2-min.png" aria-label="Article">
            <img
              src="img/web/web2-min.png"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            Automne 2020
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Footer pour le site du TIM</p>
            </a>
            <p className="mb-4 text-gray-700">
              Projet fait en équipe, je me suis occupé de faire le design du footer ainsi que sa programmation.
            </p>
            <a
                href="https://timmaisonneuve.netlify.app/index.html#/"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Voir le site
              </a>

          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="img/web/web3-min.png" aria-label="Article">
            <img
              src="img/web/web3-min.png"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            Automne 2019
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
                Quiz Pokemon
              </p>
            </a>
            <p className="mb-4 text-gray-700">
              Quiz pokémon, design et programmation.
            </p>
            <a
                href="https://poke-quiz.netlify.app"
                target="_blank"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Voir le site
              </a>

          </div>
        </div>
      </div>
      </SRLWrapper>
      </SimpleReactLightbox>
      </Fade>
    </div>
  );
};