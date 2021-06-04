import * as React from "react";
import { Form } from "./Form";
import { Field } from "./Field";

//LoginForm is a specific instance of the Form component.
export const LoginForm: React.FunctionComponent = () => {
  return (
    <Form
      className="login-background"
      action="" //TODO: Update action when api/addresses are done
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Please enter your login credentials:
          </div>
          <Field id="email" label="Email" />
          <Field id="password" label="Password" />
        </React.Fragment>
      )}
    />
  );
};
