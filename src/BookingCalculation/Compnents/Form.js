import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";

momentLocalizer(moment);

const renderDateTimePicker = ({input: {onChange, value}, variant}) => {
  return (
    <DateTimePicker
      onChange={onChange}
      min={new Date("2017-12-29T00:00:00.000Z")}
      max={new Date("2018-03-28T00:00:00.000Z")}
      value={!value ? null : new Date(value)}
    />
  )
};

class VariantDropdownList extends Component {
  constructor(...args) {
    super(...args);
    this.state = { value: '--' };
  }
  
  render() {
    const {variants} = this.props;
    console.log(variants);
    return(
      <Fragment>
        <DropdownList
          data={variants}
          value={this.state.value}
          valueField='id' //Will be name later
          textField='id'
          onChange={(value) =>{
            console.log(value);
            this.setState({value});
          }}
        />
      </Fragment>
    )
    // return (
    //   <Fragment>
    //     <DropdownList
    //       data={this.colors}
    //       value={this.state.value}
    //       valueField='color'
    //       textField='color'
    //       onChange={(value) => {
    //           console.log(value);
    //           this.setState({ value })
    //         }
    //       }
    //     />
    //   </Fragment>
    // )
  }
}


let ReactWidgetsForm = props => {
  const {handleSubmit, pristine, reset, submitting, variants, colors} = props;
  //In the variantName. I choose id because name is `null` and will not be able to show in the widget
  // console.log(props.variants);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <VariantDropdownList variants={props.variants}/>
        <Field
          name="dob"
          component={renderDateTimePicker}
        />
      </div>
    </form>
  )
};

// ReactWidgetsForm = reduxForm({
//   form: 'reactWidgets'  // a unique identifier for this form
// })(ReactWidgetsForm);
//
// export default ReactWidgetsForm;

export default ReactWidgetsForm;