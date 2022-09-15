import React, { useState,useEffect } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
// import {PlayArrowIcon } from '@material-ui/icons';
import axios from "axios";
import {Link} from "react-router-dom";

// const trailer = "http://techslides.com/demos/sample-videos/small.ogv";

const ListItem = ({ index,item }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	// const {img,desc,title,limit, genre, year,video,duration} = movie

	useEffect(()=>{
		const getMovie = async ()=>{
			try{
				const res = await axios.get(`/movies/find/${item}`,{
					headers:{
						token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWYyZTY1NDU2YjUwNGRiNWU4NzRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE0ODQ1MywiZXhwIjoxNjYzMjM0ODUzfQ.Q4-qlW4s9HVmAx_3BGr5mDlgjh_bEwpA73PhuruHJZ4",
					}
				});
				setMovie(res.data);
			}catch(err){
              console.log(err);
			}
		}
        getMovie();
	}, [item]);

	return (
		<>
		 <Link to ={{ pathname:"/watch", movie:movie }}>
			<div
				className='listItem'
				style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				oMouseLeave={() => setIsHovered(false)}
			>
				<img src={movie?.imgSm}alt='movie_Image'/>
				{isHovered && (
					<>
					    <video src={movie.trailer} autoPlay={true} loop />
						<div className='itemInfo'>
							<div className='icons'>
								<PlayArrowIcon className = 'icon' />
								<AddCircleIcon className = 'icon' />
								<ThumbUpAltOutlinedIcon className = 'icon'/>
								<ThumbDownOffAltOutlinedIcon className = 'icon'/>
							</div>
							<div className='itemInfoTop'>
								<span className=''>{movie.duration}</span>
								<span className='limit'>+{movie.limit}</span>
								<span className=''>{movie.year}</span>
								<span className=''>{movie.title}</span>
							</div>
							<div className='desc'>
								{movie.desc}
							</div>
							<div className='genre'>{movie.genre}</div>
						</div>
					</>
				)}
			</div>

		 </Link>
		</>
	);
};

export default ListItem;
