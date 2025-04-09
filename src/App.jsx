import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto relative">
            <Navbar />
            <Hero/>
            <About/>
            <Projects />

            <Contact />
        </main>
    );
};
export default App;

