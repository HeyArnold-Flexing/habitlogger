import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
<<<<<<< HEAD
<<<<<<< HEAD
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
=======
import Larrow from './Larrow.jsx';
>>>>>>> component based animation system
=======
import Paper from 'material-ui/Paper';
import Larrow from './LarrowIcon.jsx';
>>>>>>> clock anim component rough

const WAIT_INTERVAL = 1250;
const style = {
  marginLeft: 20,
};

export default class EventCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: '',
      units: '',
      limit: '',
      currentFocus: 0
    };

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleTimeFrame = this.handleTimeFrame.bind(this);
    this.handleDeadline = this.handleDeadline.bind(this);
  }

  componentDidMount() {
    this.timer = null;
  }

  handleTextFieldChange(e) {
    this.props.updateHabit(e);
    let self = this;
    let picker = {
      'event': 1,
      'units': 2,
      'limit': 3
    };
    const target = e.target;
    const name = target.name;

    this.setState({ [name]: target.value });

    this.timer = setTimeout(function() {
      self.handleFocus(picker[name])
    }, WAIT_INTERVAL);

  }

  handleFocus(cV) {
    this.setState({
      currentFocus: cV
    })
  }

  handleSubmit() {
    this.props.createHabit(this.state.event, this.state.units, this.state.limit);
    this.setState({
      event: '',
      units: '',
      limit: '',
      currentFocus: 4
    });
  }

  handleTimeFrame(e, index) {
    this.props.handleChange(e, index);
  }

  handleDeadline(e, date) {
    this.props.handleDeadlineChange(e, date);
  }

  render() {
    return (
      <div className="eventCreator">
<<<<<<< HEAD
        <Larrow currentFocus={this.state.currentFocus}/>
        <TextField
          name="event"
          value={this.props.event}
          hintText="Habit name"
          style={style}
          underlineShow={false}
          onChange={this.handleTextFieldChange}
        />
        <Divider />
        <TextField
          name="units"
          hintText="Habit units"
          style={style}
          underlineShow={false}
          onChange={this.handleTextFieldChange}
          value={this.props.units}
        />
        <Divider />
        <TextField
          name="limit"
          value={this.props.limit}
          type="number"
          hintText="Goal/Limit"
          style={style}
          underlineShow={false}
          onChange={this.handleTextFieldChange}
        />
        <Divider />
        <SelectField floatingLabelText="Choose Timeframe" value={this.props.value} onChange={this.handleTimeFrame}>
          {this.props.timeframes.map((timeframe, index) => (
            <MenuItem key={index} value={index} primaryText={timeframe} />
          ))}
        </SelectField>
        <DatePicker
          autoOk={true}
          floatingLabelText="Deadline"
          defaultDate={new Date()}
          disableYearSelection={false}
          onChange={this.handleDeadline}
        />
=======
        <h1>Habit Creator</h1>
        <Larrow currentFocus={this.state.currentFocus}/>
        <Paper zDepth={1} style={{ width: '50%' }}>
          <TextField
            name="event"
            value={this.state.event}
            hintText="Habit name"
            style={style}
            underlineShow={false}
            onChange={this.handleTextFieldChange}
          />
          <Divider />
          <TextField
            name="units"
            hintText="Habit units"
            style={style}
            underlineShow={false}
            onChange={this.handleTextFieldChange}
            value={this.state.units}
          />
          <Divider />
          <TextField
            name="limit"
            value={this.state.limit}
            type="number"
            hintText="Goal/Limit"
            style={style}
            underlineShow={false}
            onChange={this.handleTextFieldChange}
          />
          <Divider />
        </Paper>
        <br />
        <button onClick={this.handleSubmit}>Create Habit</button>
        <br />
>>>>>>> clock anim component rough
      </div>
    );
  }
}

EventCreator.propTypes = {
  event: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  updateHabit: PropTypes.func.isRequired,
  handleDeadlineChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
