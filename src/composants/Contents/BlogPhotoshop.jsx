import React from 'react';
import Fade from 'react-reveal/Fade';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";



export const BlogPhotoshop = () => {
// JSX can be assigned to a variable
const captionOne = (
  <div className="SRLCustomCaption myCustomCaptionOne">
    Un projet Photoshop inspiré pour être dans un magazine de lunettes. Le projet a été produit pendant le cours de traiterment d'images numériques en 2017.
  </div>
)
const captionTwo = (
  <div className="SRLCustomCaption myCustomCaptionTwo">
    Projet Anachronisme. En effet, un projet publicitaire pour la marque de Rolex. Le projet a été produit pendant le cours d'images numériques en 2018.
  </div>
)
const captionThree = (
  <a
    className="SRLCustomCaption myCustomButton"
  >
    Projet d'effets numériques commics sur un acteur coréen connu : Lee Jung Suk. Le projet a été produit pendant le cours d'images numériques en 2018.
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
              <span className="relative">Photoshop</span>
            </span>{' '}
          </h2>
        </div>
        <SimpleReactLightbox>
            <SRLWrapper customCaptions={customCaptions} >
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" >

                  <a href="img/photoshop/photoshop1-min.jpg" className="element_with_overlay">
                    <img
                        src="img/photoshop/photoshop1-min.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                      />
                  </a>
                    <div className="p-5 border border-t-0">
                      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                          className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                          aria-label="Category"
                          title="traveling"
                        >
                        </a>
                        <span className="text-gray-600"> Automne 2017 </span>
                      </p>
                      <SRLWrapper>
                      <a
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        Magazine
                      </a>
                      </SRLWrapper>
                      <p className="mb-2 text-gray-700">
                        Un projet Photoshop inspiré pour être dans un magazine de lunettes. Le projet a été produit pendant le cours de traiterment d'images numériques en 2017.
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                      src="img/photoshop/photoshop2-min.jpg"
                      className="object-cover w-full h-64"
                      alt=""
                    />
                    <div className="p-5 border border-t-0">
                      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                          href="/"
                          className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                          aria-label="Category"
                          title="traveling"
                        >
                        </a>
                        <span className="text-gray-600"> Automne 2018</span>
                      </p>
                      <a
                        aria-label="Category"
                        title="Simple is better"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        Anachronisme
                      </a>
                      <p className="mb-2 text-gray-700">
                        Projet Anachronisme. En effet, un projet publicitaire pour la marque de Rolex. Le projet a été produit pendant le cours d'images numériques en 2018.
                      </p>

                    </div>
                  </div>
          

                  
      
                  <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                      src="img/photoshop/photoshop3-min.jpg"
                      className="object-cover w-full h-64"
                      alt=""
                    />
                    <div className="p-5 border border-t-0">
                      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                          href="/"
                          className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                          aria-label="Category"
                          title="traveling"
                        >
                        </a>
                        <span className="text-gray-600"> Automne 2018</span>
                      </p>
                      <a
                        aria-label="Category"
                        title="Film It!"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        Effet commic
                      </a>
                      <p className="mb-2 text-gray-700">
                        Projet d'effets numériques commics sur un acteur coréen connu : Lee Jung Suk. Le projet a été produit pendant le cours d'images numériques en 2018.
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