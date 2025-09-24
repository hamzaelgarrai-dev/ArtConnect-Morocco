function Categories(){
    return(
        <section className="m-7 space-y-3 mt-10">
  <h1 className="text-2xl text-orange-950 font-semibold">Categories</h1>
  <div className="rounded w-25 h-1 bg-blue-950"></div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
    <div className="flex flex-col items-center">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-1.jpg"
        alt="Architecture"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950">Architecture</span>
    </div>

    <div className="flex flex-col items-center">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-2.jpg"
        alt="Gastronomie"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950">Gastronomie</span>
    </div>

    <div className="flex flex-col items-center">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-3.jpg"
        alt="Artisanat"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950">Artisanat</span>
    </div>

    <div className="flex flex-col items-center">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-4.jpg"
        alt="Habits"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950">Habits</span>
    </div>
  </div>
</section>

    )
}
export default Categories