import React from "react";
import { connect } from "react-redux";
import { addUser } from "../store/Slice/PostSlice";
export class Form extends React.Component {
  // dispatch=useDispatch()
  constructor() {
    super();
    this.state = {
    
      name: "",
      age: "",
    };
  }
  handleInputChanged = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
  

    this.props.addUser({
   
      name: this.state.name,
      age: this.state.age,
    });
    alert("done");
   
  };

  render() {
    return (
      <>
        <h1>Form</h1>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state?.name}
            onChange={(e) => this.handleInputChanged(e)}
            name="name"
          />
          <input
            type="text"
            placeholder="Enter Age"
            value={this.state?.age}
            onChange={(e) => this.handleInputChanged(e)}
            name="age"
          />
        </div>
        <input type="button" onClick={()=>this.onSubmit()} value="button"/>
          
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
  };
};
const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
