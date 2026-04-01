import {Navbar, Welcome, Dock, Home} from '#components';
import { Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import gsap from "gsap";
import {Contact, Finder, Image, Photos, Resume, Safari, Terminal, Text} from "#windows/index.js";

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
            <Terminal />
            <Safari />
            <Photos />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
            <Home />
        </main>
    )
}
export default App
