import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Collections from "./components/Collections/Collections";

function App() {
    return (
        <div className="app">
            <Sidebar />

            <main className="main-content">
                <Header />
                <Collections />
            </main>
        </div>
    );
}

export default App;