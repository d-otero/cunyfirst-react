import React from 'react';
import Name from './Name';
import sidebarNav from './sidebarNavigation';

function NavMaster(props) {
    return (
      <ul className='nav__master'>
        {props.children}
      </ul>
    )
}
function ListMaster(props) {
    return (
      <li className='list-item'>
        {props.children}
      </li>
    )
}
  


export default class SidebarItems extends React.Component {
    render() {
        return (
            <NavMaster>
                <NavItems />
                <ListMaster>
                    <SecondaryNavItems />
                </ListMaster>
            </NavMaster>
        )
    }
}


function SecondaryNavItems() {  
    return sidebarNav.map((item) => <Name name={item.dropdown}/>)
}

function NavItems() {
    return sidebarNav.map((item) => <Name name={item.name}/>)
}