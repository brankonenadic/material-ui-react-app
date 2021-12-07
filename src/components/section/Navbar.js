import React, { Fragment } from 'react';
import { AppBar , IconButton, Toolbar} from '@material-ui/core';
import {MenuIcon} from 'material-ui-icons'


const Navbar = () => {
    return (
        <Fragment>
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Navbar
