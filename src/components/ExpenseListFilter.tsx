import { connect } from "react-redux";
import React from "react";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  setAmountFilter,
  sortByDate,
} from "../actions/filters";
import { MenuItem, Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { expenseListFilters } from "../TS_Interface/GlobalInterface";
import moment, { Moment } from "moment";

class ExpenseListFilters extends React.Component<expenseListFilters> {
  state = {
    startDate: this.props.startDate ? moment(this.props.startDate) : null,
    endDate: this.props.endDate ? moment(this.props.endDate) : null,
    inputValue: this.props.text || "",
  };

  onStartDateChange = (date: Moment | null) => {
    this.setState({ startDate: date });
    if (this.props.sortBy === "date") {
      this.props.dispatch(setStartDate(date ? date.valueOf() : null));
    }
  };

  onEndDateChange = (date: Moment | null) => {
    this.setState({ endDate: date });
    if (this.props.sortBy === "date") {
      this.props.dispatch(setEndDate(date ? date.valueOf() : null));
    }
  };

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    this.setState({ inputValue: value });
    this.props.dispatch(setTextFilter(value));
    this.props.dispatch(setAmountFilter(value));
  };

  render() {
    return (
      <div style={{ padding: "10px", maxWidth: "600px", margin: "10px" }}>
        <input
          type="text"
          placeholder="Search"
          value={this.state.inputValue}
          onChange={this.onInputChange}
          style={{
            width: "40%",
            padding: "8px",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
        />

        <Select
          value={this.props.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(setStartDate(null));
              this.props.dispatch(setEndDate(null));
              this.props.dispatch(sortByAmount());
              this.setState({ startDate: null, endDate: null });
            }
          }}
          displayEmpty
          sx={{
            width: "100px",
            height: "35px",
            padding: "8px",
            paddingTop: "13px",
            marginBottom: "10px",
            boxSizing: "border-box",
            color: "black",
            backgroundColor: "white",
            ".MuiSelect-icon": {
              color: "black",
            },
          }}
        >
          <MenuItem value="" disabled>
            <em style={{ color: "black" }}>Sort By</em>
          </MenuItem>
          <MenuItem value="date" sx={{ color: "black" }}>
            Date
          </MenuItem>
          <MenuItem value="amount" sx={{ color: "black" }}>
            Amount
          </MenuItem>
        </Select>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <DatePicker
              label="Start Date"
              value={this.state.startDate}
              onChange={this.onStartDateChange}
              disabled={this.props.sortBy !== "date"}
              slotProps={{
                textField: {
                  variant: "outlined",
                  margin: "dense",
                  sx: { width: "200px" },
                },
              }}
            />
            <DatePicker
              label="End Date"
              value={this.state.endDate}
              onChange={this.onEndDateChange}
              disabled={this.props.sortBy !== "date"}
              minDate={this.state.startDate || undefined}
              slotProps={{
                textField: {
                  variant: "outlined",
                  margin: "dense",
                  sx: { width: "200px" },
                },
              }}
            />
          </div>
        </LocalizationProvider>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    text: state.filters.text,
    sortBy: state.filters.sortBy,
    startDate:
      state.filters.sortBy === "date" && state.filters.startDate
        ? moment(state.filters.startDate)
        : null,
    endDate:
      state.filters.sortBy === "date" && state.filters.endDate
        ? moment(state.filters.endDate)
        : null,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
