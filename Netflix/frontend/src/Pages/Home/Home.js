import React from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Featured type='movie' />
			<List />
			<List />
			<List />
			<List />
		</div>
	);
};

export default Home;
