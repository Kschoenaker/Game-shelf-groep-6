import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Collections from "./components/Collections/Collections";

function App() {
    return (
        <div className="app">
            <Sidebar />

            <Collections />
        </div>
    );
}

export default App;