import React,{useState, useEffect} from "react";
import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import axios from "axios";

const Home = ({type}) => {
	const[lists, setLists] = useState([]);
	const[genre, setGenre] = useState(null);
	// console.log("Type", type)

	useEffect(()=>{
		const getRandomList = async()=>{
			try{
				const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "?genre=" + genre: ""}`,{
					headers:{
						token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWYyZTY1NDU2YjUwNGRiNWU4NzRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0ODQ1MywiZXhwIjoxNjYzMjM0ODUzfQ.Q4-qlW4s9HVmAx_3BGr5mDlgjh_bEwpA73PhuruHJZ4",
					}
				});
				setLists(res.data);
				// console.log(res.data);
			}catch(err){
              console.log("Error", err);
			}
		}
		getRandomList()
	},[type, genre]);

	return (
		<div className='home'>
			<Navbar />
			<Featured type={type} setGenre = {setGenre}/>
			{lists.map((list) =>(
				<List list = {list}/>
			))}  
		</div>
	);
};

export default Home;
