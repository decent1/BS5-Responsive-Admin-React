import React, { Component } from 'react';

class LeftSidebar extends Component {
    toggleSidebar = () => {
        // var newColor = this.state.color == 'white' ? 'black' : 'white';
        var menu_toggleer = document.getElementById('menu-toggle');

        // this.setState({ color: newColor });
        console.log(menu_toggleer.parentNode.parentNode.getAttribute('class'));
        let sidebarToggledClassName = menu_toggleer.parentNode.parentNode.getAttribute('class');
        if(sidebarToggledClassName=='full-outer')
        {
            menu_toggleer.parentNode.parentNode.classList.remove('full-outer');
            menu_toggleer.parentNode.parentNode.classList.add('full-outer-toggled');
        }else{
            menu_toggleer.parentNode.parentNode.classList.remove('full-outer-toggled');
            menu_toggleer.parentNode.parentNode.classList.add('full-outer');
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
                        <a href="#item-1" className="list-group-item">
                            <i className="glyphicon glyphicon-chevron-right" />Item 1
                        </a>
                        <div className="list-group " id="item-1">
                            <a href="#item-1-1" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 1.1
                            </a>
                            <div className="list-group" id="item-1-1">
                                <a href="#" className="list-group-item">Item 1.1.1</a>
                                <a href="#" className="list-group-item">Item 1.1.2</a>
                                <a href="#" className="list-group-item">Item 1.1.3</a>
                            </div>
                            <a href="#item-1-2" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 1.2
                            </a>
                            <div className="list-group " id="item-1-2">
                                <a href="#" className="list-group-item">Item 1.2.1</a>
                                <a href="#" className="list-group-item">Item 1.2.2</a>
                                <a href="#" className="list-group-item">Item 1.2.3</a>
                            </div>
                            <a href="#item-1-3" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 1.3
                            </a>
                            <div className="list-group " id="item-1-3">
                                <a href="#" className="list-group-item">Item 1.3.1</a>
                                <a href="#" className="list-group-item">Item 1.3.2</a>
                                <a href="#" className="list-group-item">Item 1.3.3</a>
                            </div>
                        </div>
                        <a href="#item-2" className="list-group-item">
                            <i className="glyphicon glyphicon-chevron-right" />Item 2
                        </a>
                        <div className="list-group" id="item-2">
                            <a href="#item-2-1" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 2.1
                            </a>
                            <div className="list-group" id="item-2-1">
                                <a href="#" className="list-group-item">Item 2.1.1</a>
                                <a href="#" className="list-group-item">Item 2.1.2</a>
                                <a href="#" className="list-group-item">Item 2.1.3</a>
                            </div>
                            <a href="#item-2-2" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 2.2
                            </a>
                            <div className="list-group" id="item-2-2">
                                <a href="#" className="list-group-item">Item 2.2.1</a>
                                <a href="#" className="list-group-item">Item 2.2.2</a>
                                <a href="#" className="list-group-item">Item 2.2.3</a>
                            </div>
                            <a href="#item-2-3" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 2.3
                            </a>
                            <div className="list-group" id="item-2-3">
                                <a href="#" className="list-group-item">Item 2.3.1</a>
                                <a href="#" className="list-group-item">Item 2.3.2</a>
                                <a href="#" className="list-group-item">Item 2.3.3</a>
                            </div>
                        </div>
                        <a href="#item-3" className="list-group-item">
                            <i className="glyphicon glyphicon-chevron-right" />Item 3
                        </a>
                        <div className="list-group" id="item-3">
                            <a href="#item-3-1" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 3.1
                            </a>
                            <div className="list-group" id="item-3-1">
                                <a href="#" className="list-group-item">Item 3.1.1</a>
                                <a href="#" className="list-group-item">Item 3.1.2</a>
                                <a href="#" className="list-group-item">Item 3.1.3</a>
                            </div>
                            <a href="#item-3-2" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 3.2
                            </a>
                            <div className="list-group" id="item-3-2">
                                <a href="#" className="list-group-item">Item 3.2.1</a>
                                <a href="#" className="list-group-item">Item 3.2.2</a>
                                <a href="#" className="list-group-item">Item 3.2.3</a>
                            </div>
                            <a href="#item-3-3" className="list-group-item">
                                <i className="glyphicon glyphicon-chevron-right" />Item 3.3
                            </a>
                            <div className="list-group" id="item-3-3">
                                <a href="#" className="list-group-item">Item 3.3.1</a>
                                <a href="#" className="list-group-item">Item 3.3.2</a>
                                <a href="#" className="list-group-item">Item 3.3.3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LeftSidebar;