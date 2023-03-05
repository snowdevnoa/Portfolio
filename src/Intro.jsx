function Intro() {
  return (
    <div className="min-h-screen flex flex-wrap md:flex-no-wrap intro">
      <div className="w-full md:w-3/5 flex justify-center items-center animate-hide">
        <iframe
          src="https://app.vectary.com/p/4srKhyhUBURMcYPK9PNZ00"
          frameborder="0"
          width="100%"
          height="480"
        ></iframe>
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center animate-hide">
        <h1 className="text-9xl mb-12">NOA</h1>
        <h3 className="px-10 text-center">
          Developer, Designer, Jazz Enthusiast
        </h3>
      </div>
    </div>
  );
}

export default Intro;
