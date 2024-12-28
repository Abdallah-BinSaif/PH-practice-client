import React from 'react';
import {Outlet} from "react-router-dom";

const EntryLayout = () => {
    return (
        <div>
            <div>Main</div>
            <Outlet></Outlet>
        </div>
    );
};

export default EntryLayout;