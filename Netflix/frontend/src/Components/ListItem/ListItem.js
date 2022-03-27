import React, { useState } from "react";
import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
// import {PlayArrowIcon } from '@material-ui/icons';

const trailer = "http://techslides.com/demos/sample-videos/small.ogv";

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<>
			<div
				className='listItem'
				style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				oMouseLeave={() => setIsHovered(false)}
			>
				<img
					src='https://i.ibb.co/18d5n37/Movie.jpg'
					alt='movie_Image'
					className=''
				/>
				{isHovered && (
					<>
						<video autoplay={true}>
							<source src={trailer} />
						</video>
						<div className='itemInfo'>
							<div className='icons'>
								<PlayArrowIcon className = 'icon' />
								<AddCircleIcon className = 'icon' />
								<ThumbUpAltOutlinedIcon className = 'icon'/>
								<ThumbDownOffAltOutlinedIcon className = 'icon'/>
							</div>
							<div className='itemInfoTop'>
								<span className=''> 1 hour 30 mins</span>
								<span className='limit'>+16</span>
								<span className=''>1999</span>
							</div>
							<div className='desc'>
								lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lorem
								ipsum dolor sit amet, consectetur
							</div>
							<div className='genre'>Action</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ListItem;
