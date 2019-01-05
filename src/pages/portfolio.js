import React from 'react';
import { Helmet } from 'react-helmet';

const Portfolio = () =>{
    return(
        <div className="project-wrapper fadeIn">
            <Helmet>
              <title>Lougie Quisel | Recent Projects</title>
            </Helmet>
            <h1>Recent Projects</h1>
            <div>
                <h2>React</h2>
                <div className="project-row right">
                    <h3>The WOO</h3>
                    <p className="tools">
                        <span>React.js</span>
                        <span>Next.js</span>
                        <span>Redux</span>
                        <span>Redux Form</span>
                        <span>SASS</span>
                    </p>
                    <a href="https://thewoo.com/" rel="noopener noreferrer" target="_blank">VISIT SITE</a>
                </div>
                <div className="project-row left">
                    <h3>Erin Brockovich</h3>
                    <p className="tools">
                        <span>React.js</span>
                        <span>Next.js</span>
                        <span>Redux</span>
                        <span>Redux Form</span>
                        <span>SASS</span>
                    </p>
                    <a href="https://ebmeso.com/" rel="noopener noreferrer" target="_blank">VISIT SITE</a>
                </div>
                <div className="project-row right">
                    <h3>WP React</h3>
                    <p className="tools">
                        <span>React.js</span>
                        <span>Wordpress API</span>
                        <span>Redux</span>
                        <span>Redux Form</span>
                    </p>
                    <a href="https://github.com/loq24/wp-react" rel="noopener noreferrer" target="_blank">VISIT GIT</a>
                </div>
                <div className="project-row left">
                    <h3>Fake News No More</h3>
                    <p className="tools">
                        <span>React.js</span>
                        <span>Redux</span>
                        <span>Bulma.io</span>
                        <span>News API</span>
                    </p>
                    <a href="https://github.com/loq24/fakenews-no-more" rel="noopener noreferrer" target="_blank">VISIT GIT</a>
                </div>
                <div className="project-row right">
                    <h3>Data Table With Filter Form</h3>
                    <p className="tools">
                        <span>React.js</span>
                    </p>
                    <a href="https://codesandbox.io/s/lrv7zmvro7" rel="noopener noreferrer" target="_blank">VISIT CODESANDBOX</a>
                </div>
                <div className="project-row left">
                    <h3>Simple Modal</h3>
                    <p className="tools">
                        <span>React.js</span>
                    </p>
                    <a href="https://codesandbox.io/s/23r0l11q6y" rel="noopener noreferrer" target="_blank">VISIT CODESANDBOX</a>
                </div>
            </div>
            <div>
                <h2>Wordpress</h2>
                <div className="project-row right">
                    <h3>WNA</h3>
                    <p className="tools">
                        <span>Wordpress</span>
                        <span>Custom Plugins</span>
                        <span>Mailchimp</span>
                        <span>Admin Reporting</span>
                    </p>
                    <a href="https://whatnowatlanta.com/" rel="noopener noreferrer" target="_blank">VISIT SITE</a>
                </div>
            </div>
            <div>
                <h2>CodeIgniter</h2>
                <div className="project-row right">
                    <h3>Onlinejobs.PH</h3>
                    <p className="tools">
                        <span>PHP</span>
                        <span>Database Management</span>
                        <span>Data Reporting</span>
                    </p>
                    <a href="https://www.onlinejobs.ph/" rel="noopener noreferrer" target="_blank">VISIT SITE</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;