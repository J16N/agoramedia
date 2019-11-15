import React, {Component} from 'react'
import { Tabs, Carousel, Card, Icon, Divider, Input, Button, Form } from 'antd'
import MainLayout from '../layouts/mainLayout'
import styles from '../styles/indexStyle'

const { TabPane } = Tabs;
const { Meta } = Card;
const { Group } = Input;

var carouselSettings_1 = {
	dots: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
}

var carouselSettings_2 = {
	...carouselSettings_1,
	slidesToShow: 2,
	slidesToScroll: 2,
	rtl: true,
}



//const features = []
/*for (var i=1; i<10; i++) {
	var src = i===2?featuresImage["feature"+i+".png"]:featuresImage["feature"+i+".jpg"]
	features.push(<Card cover={<img src={require(src)} />}><Meta title="" description='' /></Card>)
}*/

class Content extends Component {
	render() {
		return (
			<MainLayout headerText="Reset The Router">
				<div className="card-container">
					<Tabs type="card" tabBarGutter={20}>
						<TabPane tab="FEATURES" key="features">
							<Carousel {...carouselSettings_1}>
				
								<Card cover={<img src="/images/features/feature1.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature2.png" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature3.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature4.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature5.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature6.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature7.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature8.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/features/feature9.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

							</Carousel>
						</TabPane>
						
						<TabPane tab="STORIES" key="stories">
							<Carousel {...carouselSettings_2}>

								<Card cover={<img src="/images/stories/stories1.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/stories/stories2.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/stories/stories3.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

								<Card cover={<img src="/images/stories/stories4.jpg" />}>
									<Meta 
									title="" 
									description='' 
									/>
								</Card>

							</Carousel>
						</TabPane>
					</Tabs>
				</div>

				<div className="content">
					<p className="newsletter">SUBSCRIBE TO THE NEWSLETTER</p>
					<Form layout="inline">
						<Group compact style={{display: 'flex', justifyContent: 'center'}}>
							<Input placeholder="Email Address" size="large" className="newsletter-inp" />
							<Button size="large" className="newsletter-btn">SIGN UP</Button>
						</Group>
					</Form>
				</div>

				<div className='scroll-bg' style={
					{
						'backgroundImage': 'url("/images/bg-scroll.png")',
						'margin': '10% 0'
					}
				}>
					<img src='/images/bg-fixed.jpg' style={{maxWidth: '100%', height: 'auto'}} />
					<div className="img-text">
						<a 
						href=""
						style={
							{
								fontSize: '3.5rem',
								fontWeight: 'bold',
								lineHeight: '1.2',
								color: 'white',

							}
						}
						>
							CONNECTIVITY IS DESTINY.
						</a>
						<Divider style={{backgroundColor: 'white', width: '80%'}} />
						<h3
						style={{letterSpacing: '10px', fontWeight: 'bold', color: 'white', fontSize: '1.75rem'}}
						>
							EST. 2017
						</h3>
					</div>
				</div>

				<div className='quote-container'>
					<div className='quote'>
						<p style={{color: '#ba4f28', fontSize: '1.7em', fontWeight: '300'}}>
							A CELEBRATION OF LIFE & THE TRANSFORMATIVE POWER OF TOGETHERNESS.
						</p>
						<blockquote style={{fontSize: '1.25rem', color: '#ec5a09'}}>
							<em>
								“Everybody dies—some suddenly, some slowly, some painfully, some peacefully. No one can escape death. The point is to make the most of life—enjoy it, celebrate it, learn from it, make sense of it, share it with fellow human beings—so that when death finally comes, it will not be such a terrible thing.”
							</em>
						</blockquote>
					</div>
				</div>


				<div className='scroll-bg' style={
					{
						'backgroundImage': "url('/images/bg-scroll2.png')",
						'marginTop': '10%'
					}
				}>
					<div className='embed-responsive embed-responsive-16by9'>
						<iframe className="embed-responsive-item" scrolling="no" frameBorder="0" src="https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F461014011&amp;show_artwork=true&amp;callback=YUI.Env.JSONP.yui_3_17_2_1_1533138991002_92518&amp;wmode=opaque" />
					</div>
				</div>

				<style jsx>{styles}</style>
			</MainLayout>

		)
	}
}

export default Content;