import React, { Component } from 'react';

class ModalDialog extends Component {
    constructor(props) {
        super(props);

        console.log('i am executed');

    }

    menuItemClicked = () => {
        console.log('inside dialog');
    }

    render() {
        return (
            <>
                <div className="modal fade" id="bsModalDialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ModalDialog;