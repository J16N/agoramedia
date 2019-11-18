import React, { Component } from 'react'
import { Divider } from 'antd'
import MainLayout from '../layouts/mainLayout'
import styles from '../styles/aboutStyle'

class About extends Component {
	render() {
		return (
			<MainLayout headerText="About Us">
				<div className="about-content">
					<p>
						<div className="blockquote-header">
							<blockquote>
								<h1><em>
									"It is time to re-imagine how life is organized on Earth. We’re accelerating into a future 
									shaped less by countries than by connectivity. Mankind has a new maxim—connectivity is destiny—and 
									the most connected powers, and people, will win."
								</em></h1>
							</blockquote>	
							<div>— CONNECTOGRAPHY: MAPPING THE FUTURE OF GLOBAL CIVILIZATION</div>
						</div>
					</p>

					<Divider className="space" />

					<p>
						We’re a youth-led, international media startup that explores global issues and cultural trends 
						through a uniquely interdisciplinary means. Cinematic arts, music, photography, theater, visual 
						arts, writing—the possibilities are endless! Centered on a mission to <b><em>#resettherouter</em></b> 
						to restore connectivity between individuals, disciplines, and ideologies, our members transcend 
						frontiers daily by pioneering innovative solutions to create a brighter, more connected future.
					</p>

					<p>
						This is AGORA. These are the pillars of our organization—how we'll counter forces of division, 
						cultivate personal growth for the individual, effect widespread unity for the collective, and generate 
						the change-makers the world has been waiting for:
					</p>

					<div style={{'marginBottom': '5rem', 'padding': '0 5%'}}>
						<h2>ισορροπία—"Balance"</h2>
						<h3>Greek; architecture</h3>
						<p>
							The abstract Corinthian column in our logo exemplifies harmony, balance, and proportion. 
							This image starkly juxtaposes with the imbalance that characterized humans' progression from the 
							middle to the top of the food chain within just the last 100,000 years. Many historical calamities, 
							from deadly wars to ecological catastrophes, have resulted from this hasty jump.
						</p>

						<h2>我们不知道—"We do not know"</h2>
						<h3>Mandarin; biology</h3>
						<p>
							In being willing to admit ignorance (acknowledging that no concept, idea, or theory is sacred 
							and beyond challenge), we've forged an intellectual marketplace that's more dynamic, supple, and 
							inquisitive than any previous establishment.
						</p>
						<p>
							<div className="blockquote">
								<b>Noun: neuroplasticity</b><br />
								(njʊərəʊplaˈstɪsɪti)<br /><div style={{'marginBottom': '1%'}} />

								The ability of the brain to form and reorganize synaptic connections, especially in response 
								to learning or experience or following injury.
							</div>
						</p>
						<p>We are a global connectome—where mind meets minds.</p>

						<h2>Внимательность—"Mindfulness"</h2>
						<h3>Russian; psychology</h3>
						<p>
							Mindfulness is a longstanding mainstay of our organizational culture. There’s something about 
							feeling present and calm that brings out the best in people. 
						</p>
						<p>
							<img src="/images/about-image-1.jpg" />
							<img src="/images/about-image-2.jpg" />
							<img src="/images/about-image-3.png" />
						</p>

						<h2>Exploração e Inquérito—"Exploration & Inquiry" in pursuit of the truth</h2>
						<h3>Portuguese; history</h3>
						<p>
							Absence of inquiry: This scientific mindset is illustrated by the example of Columbus vs. Vespucci. 
							Columbus reached the Bahamas and the Americas in 1492, but he did not want to believe that there 
							existed a new continent which the Bible and all other religious texts could have missed. Vespucci 
							reached the Americas around 1500, yet he argued that this was a new continent unknown till then. 
						</p>
						<p>
							Absence of exploration and inquiry: Lack of interest in the world beyond their empire ended up 
							being costly for the Incas and the Aztecs.
						</p>
						<p>
							Need more be said on the merits of this pillar?
						</p>

						<h2>समझदारी और बहुमुखी प्रतिभा—"Prudence & Versatility"</h2>
						<h3>Hindi; divinity</h3>
						<p>
							"Prudence" which degenerates into fear is very seldom the path to safety; true prudence 
							necessitates eclipsing fear itself by adapting to new needs even before they are acknowledged 
							as such. This is our lifestyle at AGORA.
						</p>
						<p>
							<div className='blockquote'>
								<blockquote>
									“The dog is a loyal, lovable animal but Hindu scriptures do not treat it as an auspicious 
									creature perhaps because loyalty feeds on fear and the purpose of Vedic scriptures is to 
									outgrow fear by expanding the mind.”
								</blockquote>	
								<em>—Sita: An Illustrated Retelling of the Ramayana,</em> Devdutt Pattanaik
							</div>
						</p>

						<h2>Akili—"Inventiveness"</h2>
						<h3>Swahili; Science, Technology, and Innovation (STI)</h3>
						<p>
							The creative impulses of a single active mind generating aesthetic intuition yield possibilities 
							for change. But those of a network of active minds? Radical change.
						</p>
						<p>
							<div className='blockquote'>
								<blockquote>
										"If STI is defined, conceptualized, and understood as a mechanism that is, for example, 
										useful in converting African history, stories and folklores, crafts, culture and traditions, 
										and so on into world-class arts, music, movies, cartoons, apps, books, merchandise, resulting 
										in some form of Silicon Valley–styled network of actors, businesses, incubators, and venture 
										capitalists and creating millions of jobs, then STI may take on a different conceptual meaning, 
										value, and relevance. <br /><br />

										This change can help diffuse the tension between “mission-oriented” and “grassroots” 
										innovation policies and contribute toward a balanced innovation policy approach that strives 
										to increase national innovation capabilities, inclusive growth, and sustainable development 
										while reducing poverty levels, inequality, and exclusion of all forms and at all levels."
								</blockquote>
								<em>—What Do Science, Technology, and Innovation Mean from Africa?</em> Clapperton Chakanetsa Mavhunga
							</div>
						</p>

						<h2>الاتصال—"Connectivity"</h2>
						<h3>Arabic; anthropology</h3>
						<p>
							<div className='blockquote'>
								<blockquote>
									Unlike the self-consistent laws of physics, cultures have contradictions within them. Solving 
									them leads to change. The modern world continuously fights with contradictory ideas of equality 
									and liberty. All cultures, from a psychological perspective, are “cognitively dissonant.” But 
									the human worlds have unified and connected to each other over time and have similar ideas, 
									nation-states, similar concepts of monetary transactions (currency), and even similar legal systems 
									(international law). For a long while, humans still believed in “us” vs. “them.” Merchants, 
									prophets, and conquerors aiming to expand their territories of customers, believers, and subjects 
									made us believe in a new imagined reality of the global brotherhood.
								</blockquote>
								—Insights from <em>Sapiens: A Brief History of Humankind, Yuval Noah Harari</em>
							</div>
						</p>
						<p>
							We're here to turn this imagined world into a reality. The arrow of history gravitates toward 
							the bullseye of connectivity; it's the trend of the future.
						</p>
					</div>

					<Divider className="space" />

					<h1>CONNECTIVITY BEGINS WITH YOU.</h1>
					<p>
						To you, dear Reader, we just want to say how grateful we are to have you here with us right now. 
						Please reach out to us via email, our contact form, or social media—we'd be thrilled to connect 
						with you! Ultimately, if you’re a young person with a big heart who’s excited about sharing ideas 
						and facilitating conversations, there will always be something for you to do here. The time to start 
						making waves toward a brighter, more connected future is now. We want you to be a part of AGORA.
					</p>
					<p>
						Cheers,<br />
						<b>Laurel Bridgette Prime</b><br />
						Founder + CEO, AGORA Media
					</p>

					<div className='disclaimer'>	
						<em>
							*Disclaimer: The works presented on this site do not reflect the views of the organization but rather 
							those espoused by our contributors.
						</em>
					</div>

					<style jsx>{styles}</style>
				</div>
			</MainLayout>
		)
	}
}

export default About