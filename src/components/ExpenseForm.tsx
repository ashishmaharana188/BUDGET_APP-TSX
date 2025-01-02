
import React from "react";
import moment, { Moment } from "moment";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ExpenseFormProps, ExpenseFormState } from "../TS_Interface/GlobalInterface";



export default class ExpenseForm extends React.Component<ExpenseFormProps, ExpenseFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            description: props.expense?.description || '',
            note: props.expense?.note || '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdDt: props.expense ? moment(props.expense.createdDt) : moment(),
            error: ''
        };
    }


    onDescriptionChange = (e: any) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e: any) => {
        const note = e.target.value.replace(/\n/g, ' '); 
        this.setState(() => ({ note }));
    };
    onAmountChange = (e: any) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };
    onDateChange = (createdDt: Moment | null) => {

        if (createdDt) {
            this.setState(() => ({ createdDt }))
        }
    };
    onFocus = () => {
        // Set the date to today when the date picker is focused
        if (!this.state.createdDt) {
            this.setState(() => ({ createdDt: moment() }));
        }
    };
    onSubmit = (e: any) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: "Please provide Description and Amount."
            }));
            console.log()
            } 
        else {
            this.setState(() => ({
                error: '',
            }));
            if (!this.state.createdDt) {
                this.setState(() => ({
                    createdDt: moment()
                }));
            };
            if(this.props.onSubmit) {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdDt: this.state.createdDt.valueOf(),
                note: this.state.note
            });
        }
            }
    };

    render() {
        return (
            <div>
                {this.state.error &&  <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description*"
                        autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount*"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            value={this.state.createdDt}
                            onChange={this.onDateChange}
                    />
                    </LocalizationProvider>
                    <textarea 
                    placeholder="Add note"
                    value = {this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}