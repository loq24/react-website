import React from 'react';
import { Helmet } from 'react-helmet';

const Page404 = () => {
    return(
        <div className="fadeIn">
            <Helmet>
              <title>Error 404</title>
            </Helmet>
            <h1>Error 404 not found.</h1>
        </div>
    );
}

export default Page404;