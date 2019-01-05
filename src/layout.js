import React, { Component } from 'react';
import Header from './common/header';
import Footer from './common/footer';

function Layout (Child) {
  return class WrappedComponent extends Component {
        render(){
            return(
              <div className="main-wrapper">
                    <Header />
                    <main id="page-wrap">
                        <Child {...this.props} />
                    </main>
                    <Footer />
              </div>
            );
        }
    }
}

export default Layout;