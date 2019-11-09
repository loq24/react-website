import React from 'react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
	return (
		<div className='project-wrapper fadeIn'>
			<Helmet>
				<title>
					Lougie Quisel | ReactJS & React Native Developer | Recent Projects
				</title>
			</Helmet>
			<h1>Recent Projects</h1>
			<div>
				<h2>React Native</h2>
				<div className='project-row left'>
					<h3>Hungry Duma</h3>
					<p>
						This is my first ever React Native project that was published to the
						Google Play Store. Most of the contents in this app are being
						fetched from an API which is a Wordpress website. This project
						really helped me understand React Native more. It also taught me how
						to manage react-navigation as well.
					</p>
					<p className='tools'>
						<span>React Native</span>
						<span>React Native Maps</span>
						<span>React Redux</span>
						<span>WP REST API</span>
					</p>
					<a
						href='https://play.google.com/store/apps/details?id=com.randomdumagueterestaurant'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT PLAY STORE
					</a>
				</div>
				<div className='project-row left'>
					<h3>Freelancer Kiosk App</h3>
					<p>
						This is a simple app that records the Time In and Time Out of the
						company's interns. The submitted data is being saved into the API
						and can be exported easily.
					</p>
					<p className='tools'>
						<span>React Native</span>
						<span>React Redux</span>
						<span>WP REST API</span>
						<span>Typescript</span>
					</p>
					<a
						href='https://expo.io/@loq24/freelancer-kiosk-app-ts'
						rel='noopener noreferrer'
						target='_blank'
					>
						CHECK IN EXPO
					</a>
				</div>
			</div>
			<div>
				<h2>React JS</h2>
				<div className='project-row left'>
					<h3>The WOO</h3>
					<p>
						This is my first big ReactJS website project. I was able to work
						with a very talented people and learned a lot while working with
						this website. This project really helped me understand React core
						concepts. I also realized how good Next.js framework is for SSR. It
						makes me appreciate CSS transitions and animations without relying
						with Javascript. It also taught me how good SASS is and how to use
						several tools for better development.
					</p>
					<p className='tools'>
						<span>React.js</span>
						<span>Next.js</span>
						<span>Redux</span>
						<span>Redux Form</span>
						<span>WP REST API</span>
						<span>SASS</span>
					</p>
					<a
						href='https://thewoo.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT WEBSITE
					</a>
				</div>
				<div className='project-row left'>
					<h3>WP React Typescript</h3>
					<p>
						My personal project that helped me learn Typescript and made me
						realize how awesome it is for Javascript. After this project, I
						started to use Typescript in all of my next ReactJS & React Native
						projects. This project also taught me how to implement testing. I
						learned how to use JEST and Enzyme and it also made me realize how
						important testing is.
					</p>
					<p className='tools'>
						<span>React.js</span>
						<span>WP REST API</span>
						<span>Redux</span>
						<span>Typescript</span>
						<span>Jest</span>
						<span>Enzyme</span>
					</p>
					<a
						href='https://github.com/loq24/wp-react-typescript/'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT GIT
					</a>
				</div>
				<div className='project-row left'>
					<h3>Wordpress OAuth2 with React</h3>
					<p>
						This is a simple project that could serve as a guide for fellow
						developers on how to implement OAuth2 authentication into your
						ReactJS projects. Most of the time I only use JWT authentication for
						my projects but OAuth2 is sometimes a better approach depending on
						the type of project you are developing.
					</p>
					<p className='tools'>
						<span>React.js</span>
						<span>WP REST API</span>
						<span>Redux</span>
						<span>OAuth 2.0</span>
					</p>
					<a
						href='https://github.com/loq24/oauth-demo'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT GIT
					</a>
				</div>
				<div className='project-row left'>
					<h3>Fake News No More</h3>
					<p>
						One of the very first ReactJS project that I did for me to be able
						to familiarize the library. It's a simple News App that uses News
						API and Bulma.io.
					</p>
					<p className='tools'>
						<span>React.js</span>
						<span>Redux</span>
						<span>Bulma.io</span>
						<span>News API</span>
					</p>
					<a
						href='https://github.com/loq24/fakenews-no-more'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT GIT
					</a>
				</div>
			</div>
			<div>
				<h2>Wordpress</h2>
				<div className='project-row left'>
					<h3>WNA</h3>
					<p>
						Probably, the biggest website that I've helped developed so far.
						This is pure Wordpress website with a lot of customizations. I
						mostly build plugins for several features. I also created a report
						that is made with ReactJS for this website.
					</p>
					<p className='tools'>
						<span>Wordpress</span>
						<span>Custom Plugins</span>
						<span>Mailchimp</span>
						<span>Admin Reporting</span>
					</p>
					<a
						href='https://whatnowatlanta.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT WEBSITE
					</a>
				</div>
			</div>
			<div>
				<h2>CodeIgniter</h2>
				<div className='project-row left'>
					<h3>Onlinejobs.PH</h3>
					<p>
						Built with CodeIgniter framework. Most of the time, I'm assigned in
						building Admin reports and site optimizations. I was also one of the
						developers who have worked on it's redesign.
					</p>
					<p className='tools'>
						<span>PHP</span>
						<span>Database Management</span>
						<span>Data Reporting</span>
					</p>
					<a
						href='https://www.onlinejobs.ph/'
						rel='noopener noreferrer'
						target='_blank'
					>
						VISIT WEBSITE
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
