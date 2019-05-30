import ptBR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class MonthPicker extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    dateFormat: PropTypes.string,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    placeholder: '',
    maxDate: new Date(),
    dateFormat: 'MM/yyyy',
    fullScreen: false,
    inline: false,
    hasIcon: true
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: undefined
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      selectedDate: date
    });
    this.props.onSelect(date);
  }

  render() {
    const {
      placeholder,
      name,
      dateFormat,
      minDate,
      maxDate,
      fullScreen,
      inline
    } = this.props;
    return (
      <div>
        <DatePicker
          placeholderText={placeholder}
          dateFormat={dateFormat}
          isClearable={true}
          withPortal={fullScreen}
          inline={inline}
          minDate={minDate}
          maxDate={maxDate}
          className="form-control"
          onChange={this.handleChange}
          selected={this.state.selectedDate}
          locale={ptBR}
          showMonthYearPicker
          id={name}
          name={name}
        />
      </div>
    );
  }
}
