import React, { Component, Fragment } from 'react';
import MyButton from '../../util/myButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import {
    logoutUser
} from './actions';

export default class Navbar extends Component {
    // constructor(props) {
    //     super(props);


    // }

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser())
    }

    handleClear = () => {
        this.setState({
            hum: '',
            humx: '',
            other: '',
            tablets: '',
            jetpacks: '',
            virtual: '',
            desktop: '',
            whp: '',
            features: '',
            multi: '',
            single: '',
            techCoach: '',
            ew: '',
            additionalLine: '',
            accessories: ''
        })
    }

    render() {
        const { authenticated } = this.props;
        
        return (
            <AppBar id='appBar'>
                <Toolbar className='nav-container'>
                    {authenticated ? (
                        <Fragment>
                            <MyButton tip={'Clear'} onClick={this.handleClear}>
                                <ClearAllIcon />
                            </MyButton>
                            <DoneIcon id='logo'/>
                            <MyButton tip='Logout' onClick={this.handleLogout}>
                                <KeyboardReturnIcon />
                            </MyButton>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Typography>
                                Comp
                            </Typography>
                            <DoneIcon id='logo'/>
                            <Typography>
                                Tracker
                            </Typography>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}