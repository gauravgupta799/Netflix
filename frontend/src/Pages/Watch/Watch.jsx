import React from "react";
import { Link, useLocation} from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./watch.scss";

 function Watch(){
	const location = useLocation();
	const movie = location.movie;
	console.log("Movie",movie);

	const watchTrailer =
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
	
	return (
		<>
			<div className='Watch'>
				<Link to ="/">
					<div className='back'>
						<ArrowBackOutlinedIcon />
						Home
					</div>
				</Link>
			</div>
			<video className='video' autoPlay progress controls src={watchTrailer} />
		</>
	);
};

export default Watch;
