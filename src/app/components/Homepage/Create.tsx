export default function Create() {
  return (
    <div id="create" className="min-h-screen max-md:justify-center container flex flex-col md:flex-row-reverse items-center gap-4 py-16">
      <div data-aos="fade-right" className="md:w-1/2 flex justify-center items-center">
       <img src="/demo.gif" alt="Demo made with React 2D Game Engine" />
      </div>

      <div data-aos="fade-left" className="md:w-1/2 flex flex-col items-center gap-8">
        <h3 className="text-2xl font-medium">Go on, create something!</h3>
        <p className="text-lg text-slate-700 text-center">
            Ready to bring your game ideas to life? Dive into our comprehensive documentation and get started with the React 2D Game Engine today! 
            It's easy to use, fast, and open-source - everything you need to create amazing 2D games.
        </p>
      </div>
    </div>
  );
}
