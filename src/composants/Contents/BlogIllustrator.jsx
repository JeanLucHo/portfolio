
import React from 'react';
import Fade from 'react-reveal/Fade';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";

export const BlogIllustrator = () => {
    // JSX can be assigned to a variable
const captionOne = (
  <div className="SRLCustomCaption myCustomCaptionOne">
    Illustration fait avec Adobe Illustrator pour le cours d'image numérique II. L'objet est vectorisé.
  </div>
)
const captionTwo = (
  <div className="SRLCustomCaption myCustomCaptionTwo">
                  Illustration fait avec Adobe Illustrator pour le cours d'image numérique II. L'objet est vectorisé.
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
        
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Fade left>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Illustrator</span>
            </span>{' '}
          </h2>
        </div>
        <SimpleReactLightbox>
            <SRLWrapper customCaptions={customCaptions}>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="img/illustrator/illu1-min.png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">Hivers 2019</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Illustration d'un chapeau
              </a>
              <p className="mb-2 text-gray-700">
                Illustration fait avec Adobe Illustrator pour le cours d'image numérique II. L'objet est vectorisé.
              </p>

            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="img/illustrator/illu2-min.png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">Hivers 2019</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
           Illustration d'une potion
              </a>
              <p className="mb-2 text-gray-700">
              Illustration fait avec Adobe Illustrator pour le cours d'image numérique II. L'objet est vectorisé.
              </p>

            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="img/illustrator/illu3-min.png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">

                <span className="text-gray-600">Hivers 2019</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
           Illustration d'un sceptre
              </a>
              <p className="mb-2 text-gray-700">
              Illustration fait avec Adobe Illustrator pour le cours d'image numérique II. L'objet est vectorisé.
              </p>

            </div>
          </div>
        </div>
        </SRLWrapper>
      </SimpleReactLightbox>
        </Fade>
      </div>
    );
  };