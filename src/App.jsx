import { Navbar, Welcome, Dock } from '#components';
import { Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import gsap from "gsap";
import {Terminal} from "#windows/index.js";

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
        </main>
    )
}
export default App
