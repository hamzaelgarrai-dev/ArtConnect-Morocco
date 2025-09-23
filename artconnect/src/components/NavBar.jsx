function NavBar(){


    return(
        <nav className="relative z-10 flex justify-between p-4 text-white">
            <div className="text-2xl">ArtConnect <span className="font-bold">Maroc</span></div>
            <div className="flex space-x-8">
            <a href="#" aria-current="page" className="rounded-md bg-white/75 px-3 py-2 text-base font-medium text-orange-950">Accueil</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Publier</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Favoris</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">A propos</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Admin</a>
            </div>
        </nav>
    )
}
export default NavBar