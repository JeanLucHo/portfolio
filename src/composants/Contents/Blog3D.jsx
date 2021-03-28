
import React from 'react';
import Fade from 'react-reveal/Fade';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";

export const Blog3D = () => {
    // JSX can be assigned to a variable
const captionOne = (
  <div className="SRLCustomCaption myCustomCaptionOne">
              Conception d'un pheonix 3D avec le logitiel Maya. Le projet a été produit pour le cours de création 3D I.
  </div>
)
const captionTwo = (
  <div className="SRLCustomCaption myCustomCaptionTwo">
            Conception d'un éventail 3D avec le logitiel Maya. Le projet a été produit pour le cours de création 3D I.
  </div>
)
const captionThree = (
  <a
    className="SRLCustomCaption myCustomButton"
  >
            conception d'un personnage 3D avec le logitiel Maya. Le projet a été produit pour le cours de création 3D II.
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
              <span className="relative">3D</span>
            </span>{' '}
          </h2>
        </div>
        <SimpleReactLightbox>
            <SRLWrapper customCaptions={customCaptions}>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/img/3D/3D1.jpg" aria-label="Article">
            <img
              src="img/3D/3D1.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              automne 2019
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Pheonix 3D</p>
            </a>
            <p className="mb-4 text-gray-700">
              Conception d'un pheonix 3D avec le logitiel Maya. Le proet a été produit pour le cours de création 3D I.
            </p>
            
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/img/3D/3D2.jpg" aria-label="Article">
            <img
              src="img/3D/3D2.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              automne 2019
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Éventail 3D</p>
            </a>
            <p className="mb-4 text-gray-700">
            Conception d'un éventail 3D avec le logitiel Maya. Le proet a été produit pour le cours de création 3D I.
            </p>
            
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="img/3D/3D3.jpg" aria-label="Article">
            <img
              src="img/3D/3D3.jpg"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Hiver 2020
            </p>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">
              Personnage 3D
              </p>
            </a>
            <p className="mb-4 text-gray-700">
            conception d'un personnage 3D avec le logitiel Maya. Le proet a été produit pour le cours de création 3D I.
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