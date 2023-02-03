function Intro() {
  return (
    <div className="min-h-screen flex flex-wrap md:flex-no-wrap">
      <div className="w-full md:w-3/5 flex justify-center items-center">
        Box1
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center">
        <h1 className="text-9xl mb-12">NOA</h1>
        <h3 className="px-10 text-center">
          Developer, Designer, Destroyer of Worlds
        </h3>
      </div>
    </div>
  );
}

export default Intro;
