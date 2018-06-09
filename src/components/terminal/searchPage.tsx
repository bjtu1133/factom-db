import * as React from 'react';

import { action, observable } from 'mobx';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

export class SearchPage extends React.Component {
    @observable private  chainId: string;
    @observable private description: string;
    @observable private url: string;
    public render() {
        return (
            <React.Fragment>
                <TextField
                    label="URL"
                    value={this.url}
                    onChange={this.onUrlChange}
                    margin="normal"
                />
                <TextField
                    label="Chain ID"
                    value={this.chainId}
                    onChange={this.onChainIdChange}
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={this.description}
                    onChange={this.onDescriptionChange}
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={this.search}>Search</Button>

            </React.Fragment>
        );
    }

    @action
    private search = () => {
        alert(this.chainId + this.description);
    }

    @action
    private onChainIdChange = (event: any) => {
        this.chainId = event.target.value;
    }

    @action
    private onDescriptionChange = (event: any) => {
        this.description = event.target.value;
    }

    @action
    private onUrlChange = (event: any) => {
        this.url = event.target.value;
    }
}
