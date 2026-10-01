import "./Sidebar.css";
import { Home as HomeIcon, Library, User, Settings, Heart } from "lucide-react";

function Sidebar() {
    const pathname = window.location.pathname;

    return (
        <aside className="sidebar">
            <h1>GameShelf</h1>

            <nav>
                <a className={pathname === "/" ? "active" : ""} href="/">
                    <HomeIcon />
                    <span>Home</span>
                </a>

                <a className={pathname === "/collections-and-shelves" ? "active" : ""} href="/collections-and-shelves">
                    <Library />
                    <span>Collections & Shelves</span>
                </a>

                <a className={pathname === "/wishlists" ? "active" : ""} href="/wishlists">
                    <Heart />
                    <span>Wishlist</span>
                </a>
            </nav>

            <div className="sidebar-bottom">
                <button type="button">
                    <User />
                    <span>Account</span>
                </button>

                <button type="button">
                    <Settings />
                    <span>Settings</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;