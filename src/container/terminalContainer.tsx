import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import * as React from 'react';
import { Terminal } from '../components/terminal/terminal';
import { TerminalConsole } from '../components/terminal/terminalConsole';

import './terminalContainer.css'

export class TerminalContainer extends React.Component {
    public render() {
        return (
            <Card>
                <CardContent className="terminal-container">
                    <Terminal />
                     <TerminalConsole />
                </CardContent>
            </Card>
        );
    }
}