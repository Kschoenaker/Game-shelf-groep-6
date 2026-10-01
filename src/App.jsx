import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Collections from "./components/Collections/Collections";
import Wishlist from "./Pages/Wishlist";

function App() {
    return (
        <div className="app">
            <Sidebar />

            {window.location.pathname === "/wishlist" ? (
                <Wishlist />
            ) : (
                <main className="main-content">
                    <Header />
                    <Banner />
                    <Collections />
                </main>
            )}
        </div>
    );
}

export default App;