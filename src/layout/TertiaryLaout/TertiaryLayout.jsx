import React from 'react';
import NavigationVar from '../../pages/NavigationBar/NavigationVar';
import { Outlet } from 'react-router-dom';

const TertiaryLayout = () => {
    return (
        <>
        <NavigationVar></NavigationVar>
        <Outlet></Outlet>
        </>
    );
};

export default TertiaryLayout;