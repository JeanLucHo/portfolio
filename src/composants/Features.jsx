import './Features.scss';
import { motion } from "framer-motion"

export const Features = () => {
    return (
      <motion.div
      animate={{ x: 0 }} initial={{x:-1500}}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="img/logo/adobe.png" alt="" className="logo-adboe"/>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Suite Adobe
            </h6>
            <div className="mb-2 text-gray-700">
            Animate, Illustrator,
            Photoshop, Premiere Pro,
            After Effects, Audition, Media
            Encoder, InDesign
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="img/logo/figma.svg" alt="" className="logo-figma"/>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Design Graphique
            </h6>
            <div className="mb-2 text-gray-700">
            UX et UI, Design Web, Figma,
            Adobe XD, Graphisme 3D
            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="img/logo/react.png" alt=""/>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Développement web
            </h6>
            <div className="mb-2 text-gray-700">
            React, HTML, CSS, JavaScript,
            AJAX, Vue.js, Sass, Bootstrap,
            JSON, PHP, SQL , Git,
            StoryBLock, UIkit, Wordpress

            </div>
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <img src="img/logo/unity.svg" alt="" className="logo-unity"/>
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              Développement de jeux
            </h6>
            <div className="mb-2 text-gray-700">
            Unity, C#, Phaser

            </div>
          </div>
        </div>
      </motion.div>
    );
  };