import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return (
        <div class="sidemenu">
            <Menu>
                <header>
                    <h1>Employee Dashboard</h1>
                    

                </header>
            </Menu>
        </div>
    );
};

