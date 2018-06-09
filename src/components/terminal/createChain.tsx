import * as React from 'react';

import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';

import StepLabel from '@material-ui/core/StepLabel';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export class CreateChain extends React.Component {
    @observable private activeStep=0;
    @observable private skipped = new Set<number>();
    @observable private url: string;
    @observable private description: string;
    public render() {
        return (
            <div>
                <Stepper activeStep={this.activeStep}>
                    {this.steps.map((label, index) => {
                        const props = {} as {completed: boolean};
                        const labelProps = {} as {optional: any};
                        if (this.isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.activeStep === this.steps.length ? (
                        <div>
                            <Typography>
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleReset}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                            <div>
                                <Typography>{this.getStepContent(this.activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={this.activeStep === 0}
                                        onClick={this.handleBack}
                                    >
                                        Back
                                    </Button>
                                    {this.isStepOptional(this.activeStep) && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleSkip}
                                        >
                                            Skip
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                    >
                                        {this.activeStep === this.steps.length - 1 ? 'Create Entry' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }

    private renaderUrlTextField = () => {
        return (
            <TextField
                label="URL"
                value={this.url}
                onChange={this.onUrlChange}
                margin="normal"
        />);
    }

    private renderAddDescription = () => {
        return (
            <TextField
                label="URL"
                value={this.description}
                onChange={this.onDescriptionChange}
                margin="normal"
            />
        );
    } 

    private isStepOptional = (step: number) => {
        return step === 1;
    }

    private isStepSkipped = (step: number) => {
        return this.skipped.has(step);
    }

    private getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return this.renaderUrlTextField();
            case 1:
                return 'Add Tags for your entry';
            case 2:
                return this.renderAddDescription();
            default:
                return 'Unknown step';
        }
    }

    @computed
    get steps() {
        return ['Input target URL', 'Add Tags for your entry', 'Add a Description'];
    }

    private handleNext = () => {
        if (this.isStepSkipped(this.activeStep)) {
          this.skipped = new Set(this.skipped.values());
          this.skipped.delete(this.activeStep);
        }
        this.activeStep ++;
    };
    @action
    private  handleBack = () => {
        this.activeStep --;
    };
    @action
    private handleSkip = () => {
        if (!this.isStepOptional(this.activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
        this.skipped = new Set(this.skipped.values());
        this.skipped.add(this.activeStep);
        this.activeStep ++;
    };
    @action
    private handleReset = () => {
        this.activeStep = 0;
    };

    @action
    private onUrlChange = (event: any) => {
        this.url = event.target.value;
    }

    @action
    private onDescriptionChange = (event: any) => {
        this.description = event.target.value;
    }
}