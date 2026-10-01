import "./Header.css";
import { Search, Grid2X2, List } from "lucide-react";

function Header({ title = "COLLECTIONS & SHELFS" }) {
    return (
        <header className="header">
            <div className="header-header">
                <h2>{title}</h2>

                <div className="search-bar">
                    <Search />
                    <input type="text" placeholder="Search..." />
                </div>

                <div className="view-switcher">
                    <button>
                        <Grid2X2 />
                    </button>

                    <button>
                        <List />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;