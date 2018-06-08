import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';


let id = 0;
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

@observer
export class TerminalConsole extends React.Component {
    @observable
    public value: number = 0;

    public render() { 
        return (
            <Paper>
                <Tabs value={this.value} onChange={this.handleSwitchTab}>
                    <Tab label="Result" />
                    <Tab label="Console" />
                </Tabs>
                {this.value === 0 && 
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell component="th" scope="row">
                                            {n.name}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                }
                {this.value === 1 &&
                    <ul>
                        <li>Loading...</li>
                        <li>Updating...</li>
                        <li>Done!</li>
                    </ul>
                }
            </Paper>
        );
    }

    @action.bound
    private handleSwitchTab = (event: any, value: number) => {
        this.value = value;
    }
}