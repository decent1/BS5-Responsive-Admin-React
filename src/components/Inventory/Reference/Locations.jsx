import React from 'react';

const Locations = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Location
                        </div>
                        <div className="card-body">
                            <form className="row g-3 needs-validation form-control-all-sm" noValidate>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom02" className="form-label">Location Code</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom02" defaultValue="Loc1" required />
                                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                                    </div>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom01" className="form-label">Location Name</label>
                                    <input type="text" className="form-control" id="validationCustom01" defaultValue="Location 1" required />
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


                                <div className="col-md-4">
                                    <label htmlFor="validationCustom02" className="form-label">Parent Location Code</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom02" defaultValue="ParentLoc1" required />
                                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                                    </div>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom01" className="form-label">Parent Location Name</label>
                                    <input type="text" className="form-control" id="validationCustom01" defaultValue="Parent Location 1" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Locations;