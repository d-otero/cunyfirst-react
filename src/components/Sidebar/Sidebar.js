import React from 'react';
import Name from './Name';
import sidebarNav from './sidebarNavigation';
import './Sidebar.scss';

// function SidebarMaster(props) {
//     return (
//         <div className="sidebar">
//         <h2 className='sidebar__title'>Boards</h2>
//             {props.children}
//         </div> 
//     )
// }

export default class Sidebar extends React.Component {
    
    render() {
        return (
            <div className="sidebar">
                <h2 className='sidebar__title'>Boards</h2>
                <NavItems />
            </div>
        )
    }
}

// function SecondaryNavItems() {  
//     return sidebarNav.map((item) => <Name name={item.dropdown}/>)
// }

function NavItems() {
    return sidebarNav.map((item) => <Name name={item.name}/>)
}