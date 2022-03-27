import React from "react";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Watch = () => {
	const watchTrailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
	return (
		<>
			<div className='watch'>
            <div className='back'>
				<ArrowBackOutlinedIcon />
				Home

            </div>
			</div>
			<video className='video' autoPlay progress controls src={watchTrailer} />
		</>
	);
};

export default Watch;
