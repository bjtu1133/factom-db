import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import * as React from 'react';

import { TerminalConsole } from '../components/terminal/terminalConsole';

import { CreateChain } from '../components/terminal/createChain';

import './terminalContainer.css'

export class TerminalContainer extends React.Component {
    public render() {
        return (
            <Card>
                <CardContent className="terminal-container">
                    <CreateChain />
                     <TerminalConsole />
                </CardContent>
            </Card>
        );
    }
}