import React, {useEffect} from 'react';
import about from '../images/about.png';
import { backgroundImageDataAttribute, spacerDataAttribute, progressWaypoint } from '../custom';

function About() {

  useEffect(() => {
    spacerDataAttribute();
    progressWaypoint();
  }, [])

  return (
    <>
    <section className="shadow-blue white-bg padding">
      <span class="hash-anchor" id="about"></span>
			<h3 className="section-title">About Me</h3>
			<div className="spacer" data-height="80"></div>

			<div className="row">
				<div className="col-md-3">
					<img src={about} alt="about" />
				</div>
				<div className="col-md-9">
					<p className="mb-0">Rich experience in web site design, building and customization, coming from yearly hard work. Most experience I have in building WordPress and customizing it using new technology like React, Next ... This is only one of many more skills I have. In the last period I"m focused on Python and Blockchain payment, It"s pleasure to be part of the time when Web3.0 is almost out. Giving the best of myself to be ready and prepared when the new age of Web is out. To be motivated to work where I"m the best, in time when I”m free my focus is on spending time in nature, doing sport and traveling, exploring new places in the world.</p>
					<div className="row my-4">
						<div className="col-md-6">
							<p className="mb-2">Name: <span className="text-dark">Benjamin Peleto</span></p>
							<p className="mb-0">Birthday: <span className="text-dark">April, 1992</span></p>
						</div>
						<div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
							<p className="mb-2">Location: <span className="text-dark">Zenica, BiH</span></p>
							<p className="mb-0">Email: <span className="text-dark">benjophp(at)gmail.com</span></p>
						</div>
					</div>
					<a href="https://drive.google.com/file/d/1d1ec8GjzPx3SAzmAsKCP0qNPz00Q3CA4/view?usp=sharing" target="_blank" className="btn btn-default mr-3"><i className="icon-cloud-download"></i>Download CV</a>
					<a href="#contact" className="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i className="icon-envelope"></i>Contact me</a>
				</div>
			</div>
		</section>
    </>
  )
}

export default About
