import '../styles/SideNav.css'

export default function SideNav({homeFunc,favFunc,watchFunc}) {

    return (
        <section className="SideNav"> 
            <p onClick={homeFunc}>Home</p>
            <p onClick={favFunc}>Favorites</p>
            <p onClick={watchFunc}>Watched</p>
        </section>
    );

}