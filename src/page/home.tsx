import * as React from 'react';
import { Header } from '../components/header';
import { TerminalContainer } from '../container/terminalContainer'; 
export class Home extends React.Component {

    public render() {
        return (
            <React.Fragment>
                <Header />
                <TerminalContainer />
            </React.Fragment>
        );
    }
}
