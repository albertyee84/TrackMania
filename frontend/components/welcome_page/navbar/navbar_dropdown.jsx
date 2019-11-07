import React from 'react';

export default() => {
return(
    <div className="Navbar-dropdown">
        <div className="dropdown">Product <i className="down"></i>
            <ul className="dropdown-content">
                <p className="dropDownItem">Features</p>
                <p className="dropDownItem">Pricing</p>
                <p className="dropDownItem">Integration</p>
                <p className="dropDownItem">Enterprise</p>
            </ul>
        </div>
        <div className="dropdown">Community <i className="down"></i>
            <ul className="dropdown-content">
                <p className="dropDownItem">Events</p>
                <p className="dropDownItem">BuildTV</p>
                <p className="dropDownItem">Customer Stories</p>
                <p className="dropDownItem">Consultancy Directory</p>
            </ul>
        </div>
        <div>Blog</div>
    </div>
);
}; 