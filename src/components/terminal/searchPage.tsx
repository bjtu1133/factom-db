import * as React from 'react';

import { action, observable } from 'mobx';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import { Card } from 'material-ui';

export class SearchPage extends React.Component {
    @observable private  tag: string;
    @observable private description: string;
    public render() {
        return (
            <div className="search-page">
                <Card className="search-card"> 
                    <div>
                        <TextField
                            label="Description"
                            value={this.description}
                            onChange={this.onDescriptionChange}
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" onClick={this.searchDescription}>Search By Description</Button>
                    </div>
                </Card>
                
                <Card className="search-card"> 
                    <TextField
                        label="Tag"
                        value={this.tag}
                        onChange={this.onTagChange}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={this.searchTag}>Search By Tags</Button>
                </Card>
            </div>
        );
    }

    @action
    private searchTag = () => {
        alert(this.tag);
    }

    @action
    private searchDescription = () => {
        alert(this.description);
    }

    @action
    private onDescriptionChange = (event: any) => {
        this.description = event.target.value;
    }

    @action
    private onTagChange = (event: any) => {
        this.tag = event.target.value
    }
}
