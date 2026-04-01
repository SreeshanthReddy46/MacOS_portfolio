import { Navbar, Welcome, Dock } from '#components';
import { Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import gsap from "gsap";
import {Finder, Image, Resume, Safari, Terminal, Text, Contact } from "#windows/index.js";

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
        </main>
    )
}
export default App
