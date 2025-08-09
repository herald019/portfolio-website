import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contacts';

function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-green-500">
        Tailwind is working!
      </h1>
      <h1 className="text-green-500 !important">
  Forced Green Text
</h1>
      <h1 className="text-[#10B981]">Direct Green Color</h1>

      <p className="text-gray-600 mt-4">
        You're ready to build your portfolio ✨
      </p>
    </div>
  );
}



export default App;