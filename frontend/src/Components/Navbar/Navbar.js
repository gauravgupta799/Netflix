import React,{useState} from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () =>{
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};


	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container '>
				<div className='left'>
					<img src='https://i.ibb.co/Zm5mPDf/netflix.jpg' alt='' id='logo' />
					<Link to ="/"  className="link">
					  <span>Homepage</span>
					</Link>
					<Link to ="/series" className="link">
					<span>Series</span>
					</Link>
					<Link to="/movies" className="link" >
					<span>Movies</span>
					</Link>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='right'>
					<i className='material-icons icon' style={{ color: "red" }}>
						search
					</i>
					<span style={{ color: "white" }} className='icon'>
						{" "}
						Kid
					</span>
					<i className='material-icons icon' style={{ color: "red" }}>
						notifications
					</i>
					<img
						src='https://i.ibb.co/Jk2kcsy/download.jpg'
						alt=''
						className='profile-img '
					/>
					<div className='profile'>
						<i className='material-icons icon' style={{ color: "red" }}>
							arrow_drop_down_circle
						</i>
						<div className='options'>
							<span className=''>Setting</span>
							<span className=''>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
