import React from 'react';
import { Helmet } from 'react-helmet';

const HireMe = () => {
    return(
        <div className="fadeIn">
            <Helmet>
              <title>Lougie Quisel | Hire Me</title>
            </Helmet>
            <p>My experiences include:</p>
            <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>OOP PHP</li>
                <li>Wordpress</li>
                <li>Wordpress API</li>
                <li>Wordpress Plugin Development</li>
                <li>Database Management and many more</li>
            </ul>
            <p>Send me an <a href="mailto:lougie.quisel@gmail.com">email</a> if you're interested and we'll work something out!</p>
        </div>
    );
}

export default HireMe;