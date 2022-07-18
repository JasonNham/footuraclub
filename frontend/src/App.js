import Foot from "./components/Foot";
import Hero from "./components/Hero";
import How from "./components/How";
import Timeline from "./components/Timeline";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Helmet from "react-helmet";
// import ScrollUp from "./components/ScrollUp";

function App() {
	return (
		<div>
			<Helmet>
				<title>Footura Club</title>
				<meta
					name="description"
					content="Innovative Web3 Technology that rewards you for your fitness."
				/>
			</Helmet>
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
