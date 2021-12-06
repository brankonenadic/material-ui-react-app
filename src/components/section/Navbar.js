import React, { Fragment } from 'react';
import { AppBar , Toolbar} from '@material-ui/core';


const Navbar = () => {
    return (
        <Fragment>
            <AppBar position="static" color="secondary" >
                <Toolbar />
            </AppBar>
        </Fragment>
    )
}

export default Navbar
