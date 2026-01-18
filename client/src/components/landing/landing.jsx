const Landing = () => {
  return (
    <main className="lg:h-screen overflow-hidden relative bg-[#1F2937]">
      <div className="hidden lg:block relative w-full h-screen">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[#1F2937] z-20 flex items-center justify-center transition-all duration-700 ease-in-out hover:w-full hover:rounded-none rounded-r-[100px] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#2D3748] to-[#1F2937] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-12 max-w-2xl">
            <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110">
              <img
                src="/l3.png"
                alt="MLSA Logo"
                className="w-32 h-32 object-contain filter drop-shadow-2xl"
              />
            </div>
            <h1 className="text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight text-center">
              At{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0078D4] via-[#00A4EF] to-[#005A9E]">
                KIET
              </span>{" "}
              Ghaziabad
            </h1>
            <h2 className="text-2xl xl:text-3xl font-medium text-gray-300 text-center tracking-wide">
              Unchain Your Will
            </h2>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#005A9E] rounded-full"></div>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#0078D4] via-[#00A4EF] to-[#005A9E] z-10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center px-12 max-w-2xl">
            <div className="mb-8">
              <img
                src="/l3.png"
                alt="MLSA Logo"
                className="w-32 h-32 object-contain filter drop-shadow-2xl brightness-0 invert"
              />
            </div>
            <h1 className="text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight text-center">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                MLSA
              </span>{" "}
              Community
            </h1>
            <h2 className="text-2xl xl:text-3xl font-medium text-white/90 text-center tracking-wide">
              Liberate The Mind
            </h2>
            <div className="mt-8 w-24 h-1 bg-white/30 rounded-full"></div>
          </div>
          
          {/* College Logo - Top Right */}
          <div className="absolute top-8 right-8 z-40 p-3 bg-white rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-110">
            <img
              src="/college-img.png"
              alt="KIET College"
              className="w-24 h-24 xl:w-32 xl:h-32 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden w-screen h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#0078D4] via-[#00A4EF] to-[#005A9E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <img
              src="/l3.png"
              alt="MLSA Logo"
              className="w-24 h-24 mx-auto object-contain filter drop-shadow-2xl brightness-0 invert"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-tight">
            At{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
              KIET
            </span>{" "}
            Ghaziabad
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-white/90 mb-6 tracking-wide">
            The MLSA Community
          </h2>
          <h3 className="text-lg sm:text-xl text-white/80 mb-4">
            Liberate The Mind
          </h3>
          <div className="w-20 h-1 bg-white/30 rounded-full mt-4"></div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
