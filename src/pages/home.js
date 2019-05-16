import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    return(
        <div className="fadeIn">
            <Helmet>
              <title>Lougie Quisel | About Me</title>
            </Helmet>
            <h1>About Me</h1>
            <p><img src={`assets/img/me.jpg`} alt="" />I'm Lougie Quisel, a Web Developer from Dumaguete City, Philippines. I'm currently working at <a href="https://thewoo.com/" rel="noopener noreferrer" target="_blank">TheWoo</a> creating React Apps with Wordpress REST API. I also make Wordpress plugins and websites using different theme builders. I also work at <a href="https://www.onlinejobs.ph/" rel="noopener noreferrer" target="_blank">Onlinejobs.ph</a> maintaining the website with CodeIgniter framework, creating admin reports and currently working on the new design of the website.</p>
            <p>I have several small personal projects that you can check on my <a rel="noopener noreferrer" href="https://github.com/loq24" target="_blank">Github</a> account. You can check <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.randomdumagueterestaurant">my React Native app</a> too! If you want some help with your project, <Link to="/hire-me">you may contact me!</Link></p>
            <p>When I'm not working, I enjoy playing Badminton and playing DOTA 2. I also love traveling!</p>
        </div>
    );
}

export default Home;