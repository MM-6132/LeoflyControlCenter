import './App.css';
import {Home} from "./Containers/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ControlCenter} from "./Containers/ControlCenter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<Home/>}/>
                        <Route path='/control_center' element={<ControlCenter/>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
