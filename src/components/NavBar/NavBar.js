import React, { useState } from "react";
import "../../styles/NavBar.css";
import { useDataLayerValue } from "../../context-api/DataLayer";
import { actionTypes } from "../../context-api/reducer";
import NavBarSearch from "./NavBarSearch";
import GitHubIcon from "../../ico/github.svg";
import YouTubeIcon from "../../ico/youtube.svg";
import LinkedInIcon from "../../ico/linkedin.svg";
import InstagramIcon from "../../ico/instagram.svg";
import TwitterIcon from "../../ico/twitter.svg";

function NavBar() {
	const [{ periodicSearch }, dispatch] = useDataLayerValue();

	const [menuCloseClass, setMenuCloseClass] = useState("");
	const [openSearchModal, setOpenSearchModal] = useState(false);

	const handleMenuState = () => {
		if (periodicSearch === "hidebx") {
			setMenuCloseClass("menu-tapped");
			setOpenSearchModal(true); // open search modal
			dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "",
			});
		} else {
			setOpenSearchModal(false); // close search modal
			dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "hidebx",
			});
		}
	};

	return (
		<>
			<nav className="navbar">
				<div
					onClick={handleMenuState}
					className={`navbar-item navbar-menu ${menuCloseClass}`}
				>
					<div className="middle"></div>
				</div>
				<div className="navbar-item navbar-name">Periodic Table</div>
				<div className="navbar-item navbar-search-holder">
					{/* github */}
					<a
						className="navbar-hide-mobile"
						href="https://github.com/calebcadainoo"
						target="_blank"
						rel="noreferrer"
					>
						<div className="navbar-sm-circle">
							<img src={GitHubIcon} alt="github" />
						</div>
					</a>
					{/* youtube */}
					<a href="https://bit.ly/CrosbyRoads" target="_blank" rel="noreferrer">
						<div className="navbar-sm-circle">
							<img src={YouTubeIcon} alt="youtube" />
						</div>
					</a>
					{/* linkedin */}
					<a
						href="https://linkedin.com/in/calebcadainoo"
						target="_blank"
						rel="noreferrer"
					>
						<div className="navbar-sm-circle">
							<img src={LinkedInIcon} alt="instagram" />
						</div>
					</a>
					{/* instagram */}
					<a
						className="navbar-hide-mobile"
						href="https://instagram.com/crosbyroads"
						target="_blank"
						rel="noreferrer"
					>
						<div className="navbar-sm-circle">
							<img src={InstagramIcon} alt="instagram" />
						</div>
					</a>
					{/* twitter */}
					<a
						className="navbar-hide-mobile"
						href="https://twitter.com/CrosbyRoads"
						target="_blank"
						rel="noreferrer"
					>
						<div className="navbar-sm-circle">
							<img src={TwitterIcon} alt="twitter" />
						</div>
					</a>
				</div>
			</nav>
			<NavBarSearch
				func={setMenuCloseClass}
				searchModalVal={openSearchModal}
				searchModalFunc={setOpenSearchModal}
			/>
		</>
	);
}

export default NavBar;
