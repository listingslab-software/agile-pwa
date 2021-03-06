import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatchAction from '../../store/dispatchAction';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './NewIssue.Style';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    withMobileDialog,
} from '@material-ui/core/';

class NewIssue extends Component {
    render (){
        const { 
            classes,
            newIssue,
            fullScreen,
        } = this.props;
        if (!newIssue.open){
            return null;
        }
        // console.log ('NewIssue', newIssue);
        return (
            <Dialog
                className={cn(classes.newIssue)}
                fullScreen={fullScreen}
                open={true}
                onClose={() => dispatchAction({type: `SYSTEM/CLOSE/NEWISSUE`})}
                aria-labelledby="new-issue"
                maxWidth={`md`}
            >
                <DialogTitle id="new-issue">
                    {`Create New Issue`}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        A quick way to create a new issue on GitHub is  
                        useful for capturing ideas and bugs quickly
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    
                    <Button 
                        onClick={(e) => {
                            e.preventDefault();
                            dispatchAction({type: `SYSTEM/CLOSE/NEWISSUE`});
                        }} 
                        color={`secondary`}>
                        No
                    </Button>

                    <Button 
                        autoFocus
                        variant={`contained`}
                        onClick={(e) => {
                            e.preventDefault();
                            dispatchAction({type: `SYSTEM/CLOSE/NEWISSUE`});
                        }} 
                        color={`primary`}>
                        Yes
                    </Button>

                </DialogActions>
        </Dialog>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        newIssue: store.system.newIssue
	};
};

export default (
	withMobileDialog()(connect(
		mapStateToProps, null
	)(withStyles(styles, { withTheme: true })(NewIssue)))
);
