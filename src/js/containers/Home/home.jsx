import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hum: 0,
            humx: 0,
            other: 0,
            tablets: 0,
            jetpacks: 0,
            virtual: 0,
            desktop: 0,
            whp: 0,
            features: 0,
            multi: 0,
            single: 0,
            techCoach: 0,
            ew: 0,
            additionalLine: 0,
            accessories: 0
        }
    }

    mapMetricsToState = (metrics) => {
        this.setState({
            hum: metrics && metrics[0].hum ? parseInt(metrics[0].hum) : 0,
            humx: metrics && metrics[0].humx ? parseInt(metrics[0].humx) : 0,
            other: metrics && metrics[0].other ? parseInt(metrics[0].other) : 0,
            tablets: metrics && metrics[0].tablets ? parseInt(metrics[0].tablets) : 0,
            jetpacks: metrics && metrics[0].jetpacks ? parseInt(metrics[0].jetpacks) : 0,
            virtual: metrics && metrics[0].virtual ? parseInt(metrics[0].virtual) : 0,
            desktop: metrics && metrics[0].desktop ? parseInt(metrics[0].desktop) : 0,
            whp: metrics && metrics[0].whp ? parseInt(metrics[0].whp) : 0,
            features: metrics && metrics[0].features ? parseInt(metrics[0].features) : 0,
            multi: metrics && metrics[0].multi ? parseInt(metrics[0].multi) : 0,
            single: metrics && metrics[0].single ? parseInt(metrics[0].single) : 0,
            techCoach: metrics && metrics[0].techCoach ? parseInt(metrics[0].techCoach) : 0,
            ew: metrics && metrics[0].ew ? parseInt(metrics[0].ew) : 0,
            additionalLine: metrics && metrics[0].additionalLine ? parseInt(metrics[0].additionalLine) : 0,
            accessories: metrics && metrics[0].accessories ? parseFloat(metrics[0].accessories).toFixed(2) : 0
        })
    }

    componentDidMount() {
        const { metrics } = this.props;
        this.mapMetricsToState(metrics);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    // handleSubmit = () => {
    //     const userMetrics = {
    //         hum: this.state.hum,
    //         humx: this.state.humx,
    //         other: this.state.other,
    //         tablets: this.state.tablets,
    //         jetpacks: this.state.jetpacks,
    //         virtual: this.state.virtual,
    //         desktop: this.state.desktop,
    //         whp: this.state.whp,
    //         features: this.state.features,
    //         multi: this.state.multi,
    //         single: this.state.single,
    //         techCoach: this.state.techCoach,
    //         ew: this.state.ew,
    //         additionalLine: this.state.additionalLine,
    //         accessories: this.state.accessories
    //     }
    // }

    render() {
        const { quota, metrics } = this.props;
        console.log('metrics', metrics);

        let newLines;
        let upgrades;

        if(!!quota) {
            newLines = parseInt(quota.new);
            upgrades = parseInt(quota.upgrades);
        } else {
            newLines = 0;
            upgrades = 0
        }

        let total = newLines + upgrades;

        let bucket;

        if(isNaN(this.state.hum)) {
            bucket = this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.humx)) {
            bucket = this.state.hum*50 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.other)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.tablets)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.jetpacks)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.virtual)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.desktop)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.whp)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(!this.state.multi || isNaN(this.state.multi)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + 0 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.single)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.techCoach)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.ew)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.additionalLine*9 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.additionalLine)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.accessories*.35;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(this.state.accessories)) {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9;
        } else {
            bucket = this.state.hum*50 + this.state.humx*200 + this.state.other*50 + this.state.tablets*200 + this.state.jetpacks*200 + this.state.virtual*75 + this.state.desktop*50 + this.state.whp*200 + this.state.multi*200 + this.state.single*70 + this.state.techCoach*35 + this.state.ew*4 + this.state.additionalLine*9 + this.state.accessories*.35;
        }

        if(isNaN(bucket)) {
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
                            <TableCell style={{textAlign: 'center', color: 'whitesmoke'}}><b>{total}</b></TableCell>
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
                                <TextField id="hum" name="hum" type="number" value={this.state.hum} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 50</TableCell>
                            <TableCell align="right">{this.state.hum * 50 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Hum X
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="humx" name="humx" type="number" value={this.state.humx} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{this.state.humx * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Other
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="other" name="other" type="number" value={this.state.other} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 50</TableCell>
                            <TableCell align="right">{this.state.other * 50 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Tablets</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="tablets" name="tablets" type="number" value={this.state.tablets} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{this.state.tablets * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Jetpacks</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="jetpacks" name="jetpacks" type="number" value={this.state.jetpacks} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{this.state.jetpacks * 200 || ''}</TableCell>
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
                                <TextField id="virtual" name="virtual" type="number" value={this.state.virtual} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 75</TableCell>
                            <TableCell align="right">{this.state.virtual * 75 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Desktop
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="desktop" name="desktop" type="number" value={this.state.desktop} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 50</TableCell>
                            <TableCell align="right">{this.state.desktop * 50 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>WHP</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="whp" name="whp" type="number" value={this.state.whp} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{this.state.whp * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Features</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="features" name="features" type="number" value={this.state.features} onChange={this.handleChange}/>
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
                                <TextField id="multi" name="multi" type="number" value={this.state.multi} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 200</TableCell>
                            <TableCell align="right">{this.state.multi * 200 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Single
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="single" name="single" type="number" value={this.state.single} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 70</TableCell>
                            <TableCell align="right">{this.state.single * 70 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Tech Coach
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="techCoach" name="techCoach" type="number" value={this.state.techCoach} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 35</TableCell>
                            <TableCell align="right">{this.state.techCoach * 35 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                EW
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="ew" name="ew" type="number" value={this.state.ew} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 4</TableCell>
                            <TableCell align="right">{this.state.ew * 4 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Additional Line
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="additionalLine" name="additionalLine" type="number" value={this.state.additionalLine} onChange={this.handleChange}/>
                            </TableCell>
                            <TableCell align="right">x 9</TableCell>
                            <TableCell align="right">{this.state.additionalLine * 9 || ''}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Accessories</b>
                            </TableCell>
                            <TableCell align="right">
                                <TextField id="accessories" name="accessories" type="number" value={this.state.accessories} onChange={this.handleChange} fullWidth/>
                            </TableCell>
                            <TableCell align="right">x 35%</TableCell>
                            <TableCell align="right">{this.state.accessories * .35 || ''}</TableCell>
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
            </Paper>
        );
    }
}