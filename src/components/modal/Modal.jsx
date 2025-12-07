import { Component } from "react";
import "./Modal.css";

export class Modal extends Component {
    render() {
        return (
            <div className="backdrop">
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
