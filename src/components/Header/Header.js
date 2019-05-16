import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 id="main-logo">CUNYfirst</h1>
                <input id="search" input type="text" onfocus="this.value=''" placeholder="Search"></input>
                <div id="profile">
                    <div id="profile-pic"></div>
                    <div className="cta-small"><img src={require("./assets/arrow-with-circle-down.svg")} /></div>
                </div>
            </header>
        )
    }
}