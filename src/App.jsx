import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Collections from "./components/Collections/Collections";
import Wishlist from "./Pages/Wishlist";
import Home from "./Pages/Home";

function App() {
    const pathname = window.location.pathname;

    return (
        <div className="app">
            <Sidebar />

            <main className="main-content">
                {pathname === "/wishlists" ? (
                    <Wishlist />
                ) : pathname === "/collections-and-shelves" ? (
                    <>
                        <Header title="COLLECTIONS & SHELFS" />
                        <Banner />
                        <Collections />
                    </>
                ) : (
                    <Home />
                )}
            </main>
        </div>
    );
}

export default App;