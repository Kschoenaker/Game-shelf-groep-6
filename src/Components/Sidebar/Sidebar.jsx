import "./Sidebar.css";
import { Home, Library, User, Settings } from "lucide-react";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h1>GameShelf</h1>

            <nav>
                <button>
                    <Home />
                    <span>Home</span>
                </button>

                <button className="active">
                    <Library />
                    <span>Collections & Shelves</span>
                </button>
            </nav>

            <div className="sidebar-bottom">
                <button>
                    <User />
                    <span>Account</span>
                </button>

                <button>
                    <Settings />
                    <span>Settings</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;