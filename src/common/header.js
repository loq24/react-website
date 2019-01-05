import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component{
    render(){
        const { pathname } = this.props.location || {};
        return(
            <header>
                <Link to="/">
                    <div className="logo">Lougie<br /> Q Quisel</div>
                </Link>
                <nav>
                    <ul>
                        <li className={pathname === `/` ? `current` : ``}><Link to="/">About</Link></li>
                        <li className={pathname === `/recent-projects` ? `current` : ``}><Link to="/recent-projects">Portfolio</Link></li>
                        <li className={pathname === `/hire-me` ? `current` : ``}><Link to="/hire-me">Hire Me</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);