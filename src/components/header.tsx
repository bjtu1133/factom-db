import AppBar from 'material-ui/AppBar';
import * as React from 'react';

export class Header extends React.Component {
    public render() {
        return (
            <AppBar
                title="Factom Database"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}
