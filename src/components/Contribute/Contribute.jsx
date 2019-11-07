import React, {Component} from 'react';
import { Divider } from 'antd';
import Menubar from '../Menubar/Menubar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContributeForm from './ContributeForm'
import './Contribute.css';

class Contribute extends Component {
	render () {
		return (
			<>
				<div style={{"backgroundColor": "#e45722"}}>
					<Menubar />
					<Header title="Join Us." />
				</div>
				
				<div className="contribute-content">
					<h2>What does becoming a contributor entail?</h2>
					<p>
						AGORA Media contributors are ambassadors of our mission to <em>#resettherouter</em>; 
						they view the human condition through a lens of connectivity—relentlessly 
						striving to further this ideal between individuals, disciplines, and ideologies.
					</p>

					<p>
						Publishing with AGORA Media as a contributor would mean a monthly commitment of 1-2 compositions 
						of any discipline. All our works undergo two rounds of blind edits, but we do ensure a short 
						turnaround time, i.e. 24-48 hours. We typically accept fully written compositions that are 
						750-1250 words long and compositions with written supplements that are 200-300 words long. 
						We also accept longer research and analysis pieces that have no word limitations, but we would 
						like to be made aware of those before you submit them. For all submissions, we require in-text 
						hyperlinks for citations and titles to be 10-12 words.
					</p>

					<p>
						We accept submissions from writers and artists of all ages, and from anywhere in the world. 
						However, we do request that all submissions be primarily written in English 
						(works with some words in a different language are acceptable, as long as the content is 
						predominantly in English).
					</p>

					<Divider className="space" />

					<p style={{'textAlign': 'center'}}>
						<em>To become a contributor, please apply through the form below.</em>
					</p>

					<ContributeForm />

					<Divider className="space" />

					<h2>"No Censorship": A note on our policy</h2>
					<p>
						One of the aims of AGORA Media is to publish works without <strong>censorship</strong>. This means 
						we will not dismiss any submissions based purely on content that may be deemed "inappropriate" by some. 
						This may include profanity, sexual content, or controversial topics. As artists, we understand 
						that freedom of expression is integral to creating art that means something. Please note, however, 
						that literary and artistic merit comes first. These things must contribute to the overall quality of 
						the work; in short, they should add to the work and be there for a reason, just like any other 
						literary or artistic devices that artists use. Submissions with an overabundance of the above 
						"censor triggers" that do not contribute to the overall tone and quality of the piece are not 
						following this rule for its intended purpose. The aim of our no-censorship policy is to allow artists 
						to freely express themselves, without the fear of their work being turned away. Having said that, 
						<strong> we will not publish any works that are racist, queerphobic, misogynistic, 
						transphobic, etc.</strong>
					</p>

					<h3>Author Rights</h3>

					<p>
						We ask for First North American Serial Rights (FNASR) to publish, as well as the permission 
						to permanently archive works online, and credit AGORA Media as your work's first appearance in a 
						publication. Following publication, all rights revert back to the contributor.
					</p>

					<div className="topics" style={{'padding': '5% 0 3% 0'}}>
						<img src={require("../../images/topics.svg")} style={
							{
								'float': 'left',
								'width': '35%',
								'height': '35%'
							}
						}
						/>
						<div>	
							<h3>Topics</h3>
							<ul>
								<li>World</li> <li>Sports</li>
								<li>United States</li> <li>Arts</li>
								<li>Business</li> <li>Books</li>
								<li>Technology</li> <li>Fashion & Style</li>
								<li>Science</li> <li>Food</li>
								<li>Health</li> <li>Travel</li>
							</ul>
						</div>
					</div>

					<Divider className="space" />

					<div className="guidelines" style={{'padding': '3% 0 5% 0'}}>
						<img src={require("../../images/guidelines.svg")} style={
							{
								'float': 'right',
								'width': '40%',
								'height': '40%'
							}
						}
						/>
						<div>
							<h3>Submission Guidelines</h3>
							<ul>
								<li>
									Any discipline—including but not limited to Cinematic Arts, Classical Music, Dance, 
									Designs, Jazz, Photography, Theater, Visual Arts, Voice, and Writing
								</li>
								<li>
									Fully written compositions should be 750-1250 words in length.
								</li>
								<li>
									Written supplements of other composition types should be 200-300 words long.
								</li>
								<li>
									Longer research and analysis pieces have no word limitations.
								</li>
								<li>
									In-text hyperlinks must be used for citations; titles should not exceed 10-12 words.
								</li>
								<li>
									Visual Art of any medium must be able to be viewed in 2D format.
								</li>
								<li>
									We encourage simultaneous submissions; however, please notify us as soon as possible if 
									it is accepted elsewhere for publication.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<Footer />
			</>
		)
	}
}

export default Contribute;