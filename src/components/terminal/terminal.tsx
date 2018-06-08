import Downshift from 'downshift';
import * as React from 'react';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { action, observable } from 'mobx';

import { observer } from 'mobx-react';


@observer
export class Terminal extends React.Component {
    @observable 
    public command: any;
    @observable
    public items = [
        { value: 'Load' },
        { value: 'Search' }
    ];

    public render() {
        return (
            <div className="terminal">
                {this.command && <Button color="primary">{this.command}</Button>}
                <Downshift
                    onChange={this.onSelected}
                    itemToString={this.itemToString}
                >
                    {({
                        getInputProps,
                        getItemProps,
                        getLabelProps,
                        isOpen,
                        inputValue,
                        highlightedIndex,
                        selectedItem,
                    }) => (
                            <div>
                                <Input
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <KeyboardArrowRight />
                                        </InputAdornment>
                                    }
                                    {...getInputProps()}
                                />
                                {isOpen ? (
                                    <Paper>
                                        {this.items
                                            .filter(item => !inputValue || item.value.includes(inputValue))
                                            .map((item, index) => (
                                                <div className="dropdown-item"
                                                    {...getItemProps({
                                                        index,
                                                        item,
                                                        key: item.value,
                                                        style: {
                                                            backgroundColor:
                                                                highlightedIndex === index ? 'lightgray' : 'white',
                                                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                                                        },
                                                    })}
                                                >
                                                    {item.value}
                                                </div>
                                            ))}
                                    </Paper>
                                ) : null}
                            </div>
                        )}
                </Downshift>
            </div>
        );
    }
    @action.bound
    private onSelected = (selection: {value: string}) => {
        this.command = selection.value;
        this.items = [{value: 'as34213asdas'}, {value: 'asdas213321'}];

    }
    
    private itemToString = (item: { value: string }) => {
        return item ? item.value : '';
    }
}
