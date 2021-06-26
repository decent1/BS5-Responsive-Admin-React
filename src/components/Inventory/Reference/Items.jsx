import React, { Component } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import { Button, Modal } from 'react-bootstrap';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    openModal() {
        this.setState({ show: true })
    }

    closeModal() {
        this.setState({ show: false })
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col col-12">
                        <div className="card">
                            <div className="card-header">
                                Items
                            </div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Card title</h5> */}
                                <form className="row g-3 needs-validation form-control-all-sm" noValidate>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom02" className="form-label">Item Code</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom02" defaultValue="AMPIL250" required />
                                            <span className="input-group-text" onClick={() => { this.openModal() }}><i className="bi bi-search"></i></span>
                                        </div>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom01" className="form-label">Item Name</label>
                                        <input type="text" className="form-control" id="validationCustom01" defaultValue="AMPICLOX 250MG SYP" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="validationCustom04" className="form-label">Unit</label>
                                        <select className="form-select" id="validationCustom04" required>
                                            <option value>Choose...</option>
                                            <option>grams</option>
                                            <option>Kilograms</option>
                                            <option>Centimeter</option>
                                            <option>Pieces</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid unit.
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="validationCustom02" className="form-label"> </label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Active
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom02" className="form-label">Parent Item Code</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom02" defaultValue="MEDICINES" required />
                                            <span class="input-group-text"><i class="bi bi-search"></i></span>
                                        </div>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom01" className="form-label">Parent Item Name</label>
                                        <input type="text" className="form-control" id="validationCustom01" defaultValue="MEDICINES" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="validationCustom03" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="validationCustom03" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-header">
                                Items Detail
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                Item Code
                                            </th>
                                            <th>
                                                Item Name
                                            </th>
                                            <th>
                                                Description
                                            </th>
                                            <th>
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Paper
                                            </td>
                                            <td>
                                                Printing Papers
                                            </td>
                                            <td>
                                                Papers used for digital printing.
                                            </td>
                                            <td>
                                                Active
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12">
                        <div className="col-md-4">
                            <Modal show={this.state.show}>
                                <Modal.Header>
                                    This is header
                                </Modal.Header>
                                <Modal.Body>
                                    This is modal body
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => { this.closeModal() }}>Close Modal</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Items;