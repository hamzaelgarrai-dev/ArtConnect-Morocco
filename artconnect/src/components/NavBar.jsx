function NavBar(){


    return(
        <nav className="flex justify-between p-4 text-white">
            <div className="text-xl">ArtConnect <span className="font-bold">Maroc</span></div>
            <div className="flex gap-4">
            <a href="#" className="">Accueil</a>
            <a href="#" className="">Publier</a>
            <a href="#" className="">Favoris</a>
            <a href="#" className="">A propos</a>
            <a href="#" className="">Admin</a>
            </div>
        </nav>
    )
}
export default NavBar