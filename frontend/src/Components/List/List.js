import React, { useRef, useState } from "react";
import "./List.scss";
import ListItem from "../ListItem/ListItem";
// import {  ArrowBackIosIcon } from '@mui/icons-material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const List = ({list}) => {
	// console.log("List",list);
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);

	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === "right" && slideNumber < 6) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
		// console.log(distance);
	};
	return (
		<div className='list'>
			<span className='listTitle'>{list.title}</span>
			<div className='wrapper'>
				<ArrowBackIosIcon
					className='sliderArrow left'
					onClick={() => handleClick("left")}
					style = {{display: !isMoved && 'none'}}
				/>
				<div className='container' ref={listRef}>
					{
						list.content.map((item,i)=>(
							<ListItem item = {item} index = {i}/>
						))
					}	
				</div>
				<ArrowForwardIosIcon
					className='sliderArrow right'
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	);
};

export default List;
