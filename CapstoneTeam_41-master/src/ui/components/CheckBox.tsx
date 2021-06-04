import React from "react";
import "./CheckBox.css";

interface IProps {
  label?: string;
  name?: string;
  className?: string;
}

interface IState {
  toggle: boolean;
}

class CheckBox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  //changes state of checkbox on click
  handleChange = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={this.state.toggle}
            onClick={this.handleChange}
            required
          />
        </label>
        {this.props.label}
      </div>
    );
  }
}
export default CheckBox;
