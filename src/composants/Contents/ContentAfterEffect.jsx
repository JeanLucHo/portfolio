import React from 'react';
import Flip from 'react-reveal/Flip';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";



export const ContentAfterEffect = () => {
    return (
      <div id="projet" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Flip top>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                    width="40"
                    height="24"
                  />
                </svg>
                <span className="relative">After Effect</span>
              </span>{' '}
            </h2>
          </div>
            <div className="mx-auto lg:max-w-2xl">
              <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <a href="https://www.youtube.com/watch?v=R0xKDzNHMpk">
                    <img src="img/after_effect/red_ribbon_play.png" alt=""/>
                    </a>
                  </SRLWrapper>
                </SimpleReactLightbox>
                    
                </div>
            </div>
        </Flip>
      </div>
      
    );
  }
