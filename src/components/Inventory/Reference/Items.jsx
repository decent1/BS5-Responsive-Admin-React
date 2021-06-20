import React from 'react';

const Items = () => {
    return (
        <>
             <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Items
                            </div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Card title</h5> */}
                                <form className="row g-3 needs-validation form-control-all-sm" noValidate>
                                    <div className="col-md-5">
                                        <label htmlFor="validationCustom01" className="form-label">Unit Name</label>
                                        <input type="text" className="form-control" id="validationCustom01" defaultValue="Kilogram" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="validationCustom02" className="form-label">Unit Code</label>
                                        <input type="text" className="form-control" id="validationCustom02" defaultValue="KG" required />
                                        <div className="valid-feedback">
                                            Looks good!
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
                        </div>
                    </div>
                </div>
        </>
    )
};

export default Items;