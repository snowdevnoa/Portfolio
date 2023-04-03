// import ThreeScene from './ThreeScene';

function Intro() {
  return (
    <div className="min-h-screen flex flex-wrap md:flex-no-wrap intro">
      <div className="w-full md:w-3/5 flex justify-center items-center animate-hide">
        3D OBJECT IN PROGRESS
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center animate-hide">
        <h1 className="text-9xl mb-12 text-gradient">NOA</h1>
        <h3 className="px-10 text-center">
          Developer, Designer, Jazz Enthusiast
        </h3>
      </div>
    </div>
  );
}

export default Intro;
