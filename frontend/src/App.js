import Foot from "./components/Foot";
import Hero from "./components/Hero";
import How from "./components/How";
import Timeline from "./components/Timeline";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ScrollUp from "./components/ScrollUp";

function App() {
	return (
		<div>
			<Navbar />
			{/* <ScrollUp /> */}
			<Landing />
			<Hero />
			<How />
			<Timeline />
			<Register />
			<Foot />
		</div>
	);
}

export default App;