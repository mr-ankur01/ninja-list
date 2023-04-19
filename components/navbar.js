import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={80} height={80} alt="ninja logo" />
                <p>The ninja</p>
            </div>
            <Link href={'/'}>Home</Link>
            <Link href="/about" >about</Link>
            <Link href={'/ninjas'}>ninja</Link>
            <Link target="_blank" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw" >Playlist</Link>
        </nav>
    );
}

export default Navbar;