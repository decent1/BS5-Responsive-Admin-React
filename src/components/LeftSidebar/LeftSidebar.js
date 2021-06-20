import React, { Component } from 'react';

class LeftSidebar extends Component {
    toggleSidebar = () => {
        // var newColor = this.state.color == 'white' ? 'black' : 'white';
        var menu_toggleer = document.getElementById('menu-toggle');

        // this.setState({ color: newColor });
        console.log(menu_toggleer.parentNode.parentNode.getAttribute('class'));
        let sidebarToggledClassName = menu_toggleer.parentNode.parentNode.getAttribute('class');
        if (sidebarToggledClassName === 'full-outer') {
            menu_toggleer.parentNode.parentNode.classList.remove('full-outer');
            menu_toggleer.parentNode.parentNode.classList.add('full-outer-toggled');
        } else {
            menu_toggleer.parentNode.parentNode.classList.remove('full-outer-toggled');
            menu_toggleer.parentNode.parentNode.classList.add('full-outer');
        }
    }
    menuItemClicked = (e) => {
        console.log(e)
        let nextSibling = e.target.nextSibling;//.className
        if (nextSibling.style.display == 'block') {
            nextSibling.style.display = 'none';
        } else {
            nextSibling.style.display = 'block';
        }
    }
    render() {
        return (
            <>
                <div className="btn-sidebar-toggler" id="menu-toggle" onClick={this.toggleSidebar}>
                    <i className="bi bi-list" />
                </div>
                <div className="sidebar-inner">
                    <div className="list-group list-group-root well">
                        <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                            <i className="glyphicon glyphicon-chevron-right" />Purchase
                        </a>
                        <div className="list-group " id="item-1">
                            <a href="#item" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Master
                            </a>
                            <div className="list-group " id="item-1-2">
                                <a href="#" className="list-group-item">Item Category Wise Approval Authorities</a>
                                <a href="#" className="list-group-item">Approval Authorities Ceiling Wise</a>
                            </div>
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Transaction
                            </a>
                            <div className="list-group " id="item-1-3">
                                <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">Requisition</a>
                                <div className="list-group " id="item-1-3">
                                    <a href="#" className="list-group-item">Purchase Requisition</a>
                                    <a href="#" className="list-group-item">Purchase Requisition Approval</a>
                                    <a href="#" className="list-group-item">Purchase Requisition Status</a>
                                </div>
                                <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">Indent</a>
                                <div className="list-group " id="item-1-3">
                                    <a href="#" className="list-group-item">Purchase Indent</a>
                                    <a href="#" className="list-group-item">Purchase Indent Approval</a>
                                    <a href="#" className="list-group-item">Purchase Indent Quantity Adjustment</a>
                                </div>
                                <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">Purchase Order</a>
                            </div>
                        </div>
                        <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                            <i className="glyphicon glyphicon-chevron-right" />Inventory
                        </a>
                        <div className="list-group" id="item-2">
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Reference
                            </a>
                            <div className="list-group" id="item-2-1">
                                <a href="#" className="list-group-item">Locations</a>
                                <a href="#" className="list-group-item">Items</a>
                                <a href="#" className="list-group-item">Items Mapping With Account Code</a>
                                <a href="#" className="list-group-item">Supplier</a>
                            </div>
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Master
                            </a>
                            <div className="list-group" id="item-2-2">
                                <a href="#" className="list-group-item">Location Wise Approval Authority</a>
                                <a href="#" className="list-group-item">Location Shelf Par Level Defination</a>
                                <a href="#" className="list-group-item">User Wise Location</a>
                                <a href="#" className="list-group-item">Approval of Items</a>
                                <a href="#" className="list-group-item">Item Wise Unit Mapping</a>
                                <a href="#" className="list-group-item">Material wise Standard Potency</a>
                            </div>
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Transaction
                            </a>
                            <div className="list-group" id="item-2-3">
                                <a href="#" className="list-group-item">Goods Receipt Note</a>
                                <a href="#" className="list-group-item">Direct Goods Receipt Note</a>
                                <a href="#" className="list-group-item">Inspection of Items</a>
                                <a href="#" className="list-group-item">Gate Pass</a>
                                <a href="#" className="list-group-item">Requisition of Items</a>
                                <a href="#" className="list-group-item">Issuance of Items</a>
                            </div>
                        </div>
                        <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                            <i className="glyphicon glyphicon-chevron-right" />Financial Accounts
                        </a>
                        <div className="list-group" id="item-3">
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Reference
                            </a>
                            <div className="list-group" id="item-3-1">
                                <a href="#" className="list-group-item">Chart Of Accounts</a>
                                <a href="#" className="list-group-item">Journal Setup</a>
                                <a href="#" className="list-group-item">Branch Wise Department</a>
                            </div>
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Master
                            </a>
                            <div className="list-group" id="item-3-2">
                                <a href="#" className="list-group-item">Currency Exchange Rate</a>
                                <a href="#" className="list-group-item">Budget Allocation</a>
                            </div>
                            <a href="#" onClick={(event) => this.menuItemClicked(event)} className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Voucher Templates
                            </a>
                            <div className="list-group" id="item-3-3">
                                <a href="#" className="list-group-item">Bank Payment Voucher</a>
                                <a href="#" className="list-group-item">Bank Receipt Voucher</a>
                                <a href="#" className="list-group-item">Cash Payment Voucher</a>
                                <a href="#" className="list-group-item">Cash Receipt Voucher</a>
                                <a href="#" className="list-group-item">Journal Voucher</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LeftSidebar;