import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import {
    updateMetrics,
    getUserMetrics,
    updateMetricsState,
    updateAccState
} from './actions';

export default class Home extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getUserMetrics());
    }

    handleChange = (e) => {
        const { dispatch } = this.props;
        const metric = {[e.target.name]: parseInt(e.target.value) || 0};
        dispatch(updateMetricsState(metric))
    }

    handleAccChange = (e) => {
        const { dispatch } = this.props;
        const metric = {[e.target.name]: e.target.value};
        dispatch(updateAccState(metric))
    }

    handleSubmit = () => {
        const { dispatch, hum, humx, other, tablets, jetpacks, virtual, desktop, whp, features, multi, single, techCoach, ew, addLine, accessories } = this.props;
        const userMetrics = {
            hum,
            humx,
            other,
            tablets,
            jetpacks,
            virtual,
            desktop,
            whp,
            features,
            multi,
            single,
            techCoach,
            ew,
            addLine,
            accessories
        };
        dispatch(updateMetrics(userMetrics));
    }

    render() {
        const { quota, metrics, hum, humx, other, tablets, jetpacks, virtual, desktop, whp, features, multi, single, techCoach, ew, addLine, accessories } = this.props;

        let newLines;
        let upgrades;

        if(!!quota) {
            newLines = quota.newLines;
            upgrades = quota.upgrades;
        } else {
            newLines = 0;
            upgrades = 0
        }

        let total = newLines + upgrades;

        let bucket;

        if(!!metrics) {
            bucket = (hum*50 + humx*200 + other*50 + tablets*200 + jetpacks*200 + virtual*75 + desktop*50 + whp*200 + multi*200 + single*70 + techCoach*35 + ew*4 + addLine*9 + accessories*.35).toFixed(2);
        } else {
            bucket = ''
        }

        const d = new Date();
        let month = [];

        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        const currentMonth = month[d.getMonth()];

        return (
            <Paper className='root'>
                <Table className='table' size='small'>
                    <TableHead>
                        <TableRow style={{backgroundColor: 'red'}}>
                            <TableCell style={{color: 'whitesmoke'}}><b>{currentMonth}</b></TableCell>
                            <TableCell style={{textAlign: 'center', color: 'black'}}><b>New</b></TableCell>
                            <TableCell style={{textAlign: 'center', color: 'black'}}><b>Upgrades</b></TableCell>
                            <TableCell style={{textAlign: 'center', color: 'black'}}><b>Quota</b></TableCell>
                        </TableRow>
                        <TableRow style={{backgroundColor: 'black'}}>
                            <TableCell style={{color: 'whitesmoke'}}><b>Metrics</b></TableCell>
                            <TableCell style={{textAlign: 'center', color: 'whitesmoke'}}><b>{newLines}</b></TableCell>
                            <TableCell style={{textAlign: 'center', color: 'whitesmoke'}}><b>{upgrades}</b></TableCell>
                            <TableCell style={{textAlign: 'center', color: 'whitesmoke'}}><b>{total.toString()}</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Connected</b>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Hum
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="hum" name="hum" type="text" value={hum === 0 ? ('') : (hum)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 50</TableCell>
                            <TableCell align="right">{hum*50 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Hum X
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="humx" name="humx" type="text" value={humx === 0 ? ('') : (humx)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{humx * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Other
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="other" name="other" type="text" value={other === 0 ? ('') : (other)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 50</TableCell>
                            <TableCell align="right">{other * 50 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Tablets</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="tablets" name="tablets" type="text" value={tablets === 0 ? ('') : (tablets)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{tablets * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Jetpacks</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="jetpacks" name="jetpacks" type="text" value={jetpacks === 0 ? ('') : (jetpacks)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{jetpacks * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>OneTalk</b>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Virtual
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="virtual" name="virtual" type="text" value={virtual === 0 ? ('') : (virtual)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 75</TableCell>
                            <TableCell align="right">{virtual * 75 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Desktop
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="desktop" name="desktop" type="text" value={desktop === 0 ? ('') : (desktop)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 50</TableCell>
                            <TableCell align="right">{desktop * 50 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>WHP</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="whp" name="whp" type="text" value={whp === 0 ? ('') : (whp)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{whp * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Features</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="features" name="features" type="text" value={features === 0 ? ('') : (features)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>TMP</b>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Multi
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="multi" name="multi" type="text" value={multi === 0 ? ('') : (multi)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{multi * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Single
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="single" name="single" type="text" value={single === 0 ? ('') : (single)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 70</TableCell>
                            <TableCell align="right">{single * 70 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Tech Coach
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="techCoach" name="techCoach" type="text" value={techCoach === 0 ? ('') : (techCoach)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 35</TableCell>
                            <TableCell align="right">{techCoach * 35 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                EW
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="ew" name="ew" type="text" value={ew === 0 ? ('') : (ew)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 4</TableCell>
                            <TableCell align="right">{ew * 4 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Additional Line
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="addLine" name="addLine" type="text" value={addLine === 0 ? ('') : (addLine)} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 9</TableCell>
                            <TableCell align="right">{addLine * 9 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Accessories</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="accessories" name="accessories" type="text" value={accessories === 0 ? ('') : (accessories)} onChange={this.handleAccChange} fullWidth/>
                            </TableCell>
                            <TableCell align="right">x 35%</TableCell>
                            <TableCell align="right">{accessories === 0 || accessories === '' ? ('') : ((accessories * .35).toFixed(2))}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Total Bucket</b>
                            </TableCell>
                            <TableCell align="right"> </TableCell>
                            <TableCell align="right"> </TableCell>
                            <TableCell align="right">{bucket}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Grid container>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <div style={{margin: 'auto'}}>
                            <Button variant='text' onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}