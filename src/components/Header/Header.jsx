import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Modal from "../modal/Modal";
const Header = () => {
	const [Isopen, setIsOpen] = useState(false);
	const handleClose = () => {
		setIsOpen(false);
	};
	return (
		<>
			<Modal openModal={Isopen} closeModal={handleClose} />
			<div className="w-full fixed">
				<ul className="flex justify-between mx-16 py-6">
					<li className="w-4/12">
						<img src={assets.logo} alt="logo" />
					</li>
					<li className="w-6/12">
						<input type="search" />
					</li>
					<li className="w-2/12">
						<ul className="flex justify-evenly">
							<li>
								<img src={assets.search_icon} alt="contact" />
							</li>
							<li>
								<img src={assets.bag_icon} alt="cart" />
							</li>
							<li>
								<img
									src={assets.profile_icon}
									alt="profile"
									onClick={() => setIsOpen(true)}
								/>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
