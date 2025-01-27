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
import { Button, Menu, MenuItem, Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { expenseListFilters } from "../TS_Interface/GlobalInterface";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment, { Moment } from "moment";

class ExpenseListFilters extends React.Component<expenseListFilters> {
  state = {
    startDate: this.props.startDate ? moment(this.props.startDate) : null,
    endDate: this.props.endDate ? moment(this.props.endDate) : null,
    inputValue: this.props.text || "",
    dateMenuAnchorEl: null,
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

  removeStartDate = () => {
    this.setState({ startDate: null });
    this.props.dispatch(setStartDate(null));
  };

  removeEndDate = () => {
    this.setState({ endDate: null });
    this.props.dispatch(setEndDate(null));
  };

  // Open Date submenu
  handleDateMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ dateMenuAnchorEl: event.currentTarget });
  };

  // Close Date submenu
  handleDateMenuClose = () => {
    this.setState({ dateMenuAnchorEl: null });
  };

  // Handle Date submenu selection
  handleDateSortChange = (sortOrder: "asc" | "desc") => {
    this.props.dispatch(sortByDate(sortOrder));
    this.handleDateMenuClose();
  };

  render() {
    const { dateMenuAnchorEl } = this.state;
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
              this.props.dispatch(sortByDate("desc"));
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
          <MenuItem
            value="date"
            sx={{ color: "black" }}
            onClick={this.handleDateMenuOpen}
          >
            Date
          </MenuItem>
          <MenuItem value="amount" sx={{ color: "black" }}>
            Amount
          </MenuItem>
        </Select>

        <Menu
          anchorEl={dateMenuAnchorEl}
          open={Boolean(dateMenuAnchorEl)}
          onClose={this.handleDateMenuClose}
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          transformOrigin={{ vertical: "center", horizontal: "center" }}
          sx={{ marginTop: "-8px" }}
        >
          <MenuItem
            onClick={() => this.handleDateSortChange("asc")}
            sx={{ color: "black" }}
          >
            Ascending
          </MenuItem>
          <MenuItem onClick={() => this.handleDateSortChange("desc")}>
            Descending
          </MenuItem>
        </Menu>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {/* Start Date Picker */}
            <div style={{ position: "relative" }}>
              <DatePicker
                label="Start Date"
                value={this.state.startDate}
                disabled={this.props.sortBy !== "date"}
                onChange={this.onStartDateChange}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    margin: "dense",
                    sx: { width: "200px" },
                  },
                }}
              />
              {this.state.startDate && (
                <IconButton
                  onClick={this.removeStartDate}
                  size="small"
                  sx={{
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>

            {/* End Date Picker */}
            <div style={{ position: "relative" }}>
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
              {this.state.endDate && (
                <IconButton
                  onClick={this.removeEndDate}
                  size="small"
                  sx={{
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
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
    sortOrder: state.filters.sortOrder,
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
