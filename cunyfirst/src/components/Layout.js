import React from 'react';
import './Layout.scss';
import AllCards from './AllCards';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default class Layout extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Sidebar />
                <AllCards />
            </div>
        )
    }
}