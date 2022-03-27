import React from "react";
import "./featured.scss";

const Featured = ({type}) => {
	return (
		<div className='featured'>
        {type && (
            <div className='category'>
              <span>{type === "movie" ? "Movies" : "Series" }</span>
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
				src='https://i.ibb.co/wpWfrVJ/netflix-bg.jpg'
				alt=''
				className='profile-img '
				width='100%'
				style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
			/>
			<div className='info'>
				<img src='https://i.ibb.co/jV8MPdK/why.jpg' />
				<span className='desc'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                </span>
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
