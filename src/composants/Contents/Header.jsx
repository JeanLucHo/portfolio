export const Header = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                </span>{' '}
                Bienvenue dans mon porfolio
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                À la recherche d'un stage ou d'un travail.
              </p>
              <p>
                N'hésiter pas à me contacter!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };