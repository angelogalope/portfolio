import React from "react";
import { Link } from "react-scroll";

export const Landing = () => {
 return (
  <div>
   <h1 className="text-lg sm:text-2xl md:text-4xl text-gray-400 text-center">
				"A tech dweeb{" "}
				<span
					className="font-bold text-black"
				>
					<span class="pulse-text">determined</span> to dive into the world of
					technology
				</span>{" "}
				with passion and drive."
			</h1>
			<button>
				<Link to="hero" smooth={true} offset={0} duration={500}>
					<div class="icon-scroll pt-5">
						<div className="mouse">
							<div className="wheel"></div>
						</div>
						<div className="icon-arrows">
							<span></span>
						</div>
					</div>
				</Link>
			</button>
  </div>
 );
};