import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import * as React from 'react';

import { CreateChain } from '../components/terminal/createChain';

import './terminalContainer.css'

import { action, observable } from 'mobx';

import { observer } from 'mobx-react';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { SearchPage } from '../components/terminal/searchPage';

import { RetrieveEntry } from '../components/terminal/retrieveEntry';

@observer
export class TerminalContainer extends React.Component {
    @observable private pageNum: number = 0;
    public render() {
        return (
            <Card>
                <CardContent className="terminal-container">
                    <Tabs value={this.pageNum} onChange={this.handleSwitchPage}>
                        <Tab label="Create An Schreenshot" />
                        <Tab label="Search" />
                        <Tab label="Retrieve an Webshot" />
                    </Tabs>
                    {this.pageNum === 0 && <CreateChain />}
                    {this.pageNum === 1 && <SearchPage />}
                    {this.pageNum === 2 && <RetrieveEntry />}
                </CardContent>
            </Card>
        );
    }
    @action
    private handleSwitchPage = (event: any, value: number) => {
        this.pageNum = value;
    }
}