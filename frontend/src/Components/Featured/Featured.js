import React, {useState, useEffect} from "react";
import "./featured.scss";
import axios from "axios";

const Featured = ({type}) => {
	const [content, setContent] = useState({});

	useEffect(()=>{
		const getRandomContent = async()=>{
			try{
				const response = await axios.get(`/movies/random?type=${type}`, {
					headers:{
						token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWYyZTY1NDU2YjUwNGRiNWU4NzRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0ODQ1MywiZXhwIjoxNjYzMjM0ODUzfQ.Q4-qlW4s9HVmAx_3BGr5mDlgjh_bEwpA73PhuruHJZ4",
					}
				 });
				 setContent( response.data[0]);
				//  console.log("Res", response.data[0])
			}catch(err){
              console.log(err);
			}   
		}
         getRandomContent();
	},[type]);

    //   console.log("Content", content);

	return (
		<div className='featured'>
			{type && (
				<div className='category'>
					<span>{type === "movies" ? "Movies" : "Series" }</span>
					<select name ="genre" id="genre">
						<option>Genre</option>
						<option value ="adventure ">Adventure</option>
						<option value ="comedy ">Comedy</option>
						<option value =" crime">Crime</option>
						<option value =" fantasy">Fantasy</option>
						<option value ="histoprical ">Historical</option>
						<option value ="horror ">Horror</option>
						<option value =" romance">Romance</option>
						<option value =" sci-fi">Sci-fi</option>
						<option value =" thriller">Thriller</option>
						<option value =" drama">Drama</option>
					</select>
				</div>
			)}
			<img
				src={content?.img}
				alt=''
				className='profile-img '
				width='100%'
				style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
			/>
			<div className='info'>
				<img src={content?.imgTitle} alt="" />
				<span className='desc'>{content.desc}</span>
				<div className='buttons'>
					<button className='play'>
						<span class='glyphicon glyphicon-play'></span>
						<span>Play</span>
					</button>
					<button className='more'>
						<span class='glyphicon glyphicon-play-circle'></span>
						<span>More Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
