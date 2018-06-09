import * as React from 'react';

import { action, observable } from 'mobx';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { Card } from 'material-ui';

export class RetrieveEntry extends React.Component {
    @observable private chainId: string;
    public render() {
        return (
            <div className="retrieve-entry">
                <Card className="retrieve-card"> 
                    <div>
                        <TextField
                            className="chain-id-input"
                            label="Chain ID"
                            value={this.chainId}
                            onChange={this.onChainIdChange}
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={this.retrieve}>Retrieve By Chain ID</Button>
                    </div>
                </Card>
            </div>
        );
    }

    @action
    private retrieve = () => {
        alert(this.chainId);
    }

    @action
    private onChainIdChange = (event: any) => {
        this.chainId = event.target.value;
    }
}
