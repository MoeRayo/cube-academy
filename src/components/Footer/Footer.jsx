import cubelogo from "../../assets/3sc-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="bg-black text-white pt-3 pb-5 px-5 md:px-9">
			<div className="w-[95%] md:w-[85%] m-auto">
				<img
					src={cubelogo}
					alt=""
					className="block mb-3 md:mr-0 m-auto md:ml-0"
				/>
				<hr className="border-2" />
				<div className="flex flex-col md:flex-row justify-between my-7 items-start">
					<section className="flex flex-col md:flex-row md:space-y-0 space-y-3 items-start  font-AnonymousPro lg:space-x-5 md:space-x-3">
						<section className="">
							<h3 className="font-Poppins font-bold leading-relaxed text-xs uppercase">
								Bournemouth
							</h3>
							<p className="capitalize text-xs leading-relaxed">
								telephone house
							</p>
							<p className="capitalize text-xs">
								Bournemouth, <span className="uppercase">5h1 3ne</span>
							</p>
						</section>
						<section className="">
							<h3 className="font-Poppins font-bold leading-relaxed text-xs uppercase">
								london
							</h3>
							<p className="capitalize text-xs leading-relaxed">51 eastcheap</p>
							<p className="capitalize text-xs">
								london, <span className="uppercase">ec3m 1jp</span>
							</p>
						</section>
						<section className="">
							<h3 className="font-Poppins font-bold leading-relaxed text-xs uppercase">
								washington
							</h3>
							<p className="capitalize text-xs leading-relaxed">
								80 M Street SE
							</p>
							<p className="capitalize text-xs">
								washington, <span className="uppercase">d.c 20003</span>
							</p>
						</section>
						<section className="">
							<h3 className="font-Poppins font-bold leading-relaxed text-xs uppercase">
								florida
							</h3>
							<p className="capitalize text-xs leading-relaxed">
								7901 4th St N, STE 300
							</p>
							<p className="capitalize text-xs">
								St. Petersburg, <span className="uppercase">fl 33702</span>
							</p>
						</section>
					</section>

					<section className="md:mt-0 mt-5">
						<h3 className="font-Poppins font-bold leading-relaxed text-xs uppercase">
							get social
						</h3>
						<section className="flex justify-evenly space-x-3">
							<a
								href="https://twitter.com/3sidedcube"
								target="_blank"
								rel="noopener noreferrer"
								className="block underline hover:underline-offset-4">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								href="https://instagram.com/3sidedcube"
								target="_blank"
								rel="noopener noreferrer"
								className="block">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a
								href="https://facebook.com/3sidedcube"
								target="_blank"
								rel="noopener noreferrer"
								className="block">
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
							<a
								href="https://www.linkedin.com/company/3-sided-cube"
								target="_blank"
								rel="noopener noreferrer"
								className="block">
								<FontAwesomeIcon icon={faLinkedin} className="text-xs" />
							</a>
							<a
								href="https://youtube.com/3sidedcube"
								target="_blank"
								rel="noopener noreferrer"
								className="block ">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</section>
					</section>
				</div>

				<div className="font-AnonymousPro flex justify-between text-xs font-bold md:flex-row flex-col">
					<p className="text-center md:text-left leading-loose md:leading-none">
						© 2023 3 Sided Cube
					</p>
					<p className="text-center md:text-right">Let’s Build Tech For Good</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
