import { ErrorMessage } from "formik";
import React from "react";


export interface IPropsErrorContainer {
    name: string;
    errorClassName?: string;
    otherAttributes?: any;
}

class ErrorContainer extends React.Component<IPropsErrorContainer, { [key: keyof any]: any }> {
    render() {
        return (<React.Fragment>
            <div className={(this.props.errorClassName ? this.props.errorClassName : "text-danger")} 
            {...this.props.otherAttributes}>   
                <ErrorMessage name={this.props.name} />
                {this.props.children}
            </div>
        </React.Fragment>);
    }

}

export default ErrorContainer;