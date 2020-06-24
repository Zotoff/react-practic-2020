import React,{ Component } from 'react';
import FormField from '../utils/formFields';
import {validate} from '../utils/validate';

class FormOne extends Component {

    state = {
        maxAge:80,
        loading: false,
        formData: {
            name: {
                element: 'input',
                value: '',
                config: {name: 'name_input', type: 'text', placeholder: 'Enter your name'},
                validation: {required: true},
                valid: false,
                touched: false,
                validationMessage: 'This field is required'
            },
            lastname: {
                element: 'input',
                value: '',
                config: {name: 'lastname_input', type: 'text', placeholder: 'Enter your lastname'},
                validation: {required: true},
                valid: false,
                touched: false,
                validationMessage: 'This field is required'
            },
            age: {
                element: 'select',
                value: '',
                config: {name: 'age_input', type: 'text'},
                validation: {required: true, minNum: 18},
                valid: false,
                touched: false,
                validationMessage: 'You must be at least 18 years old'
            },
            message: {
                element: 'textarea',
                value: '',
                config: {name: 'message_input', placeholder: 'Enter your message', rows: 3},
                validation: {required: true},
                valid: false,
                touched: false,
                validationMessage: 'This field is required'
            }
        }
    }

    generateOptions = () => {
        const ageArray = [];
        for(let i = 1; i < this.state.maxAge; i++){
            ageArray.push(i);
        }

        return ageArray.map((item, i)=>{
            return(
                <option key={i} value={item}>
                    {item}
                </option>
            )
        })
    }

    updateForm = (element) => {
        const newFormData = {
            ...this.state.formData
        }
        const newElement = {
            ...newFormData[element.id]
        }

        newElement.value = element.event.target.value;

        /*Validation*/
        let validateData = validate(newElement);

        newElement.valid = validateData[0];
        newElement.validationMessage = validateData[1];

        /*Catch blur*/
        if(element.blur) {
            newElement.touched = element.blur
        }

        newFormData[element.id] = newElement;

        this.setState({
            formData: newFormData
        })
    }

    onSuccess = () => {
        let formDataCopy = {
            ...this.state.formData
        }
        for(let key in this.state.formData) {
            formDataCopy[key].value = '';
            formDataCopy[key].valid = false;
            formDataCopy[key].touched = false;
        }

        this.setState({formData: formDataCopy});
        alert('Thank you...')
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid
        }

        if(formIsValid) {
            this.setState({loading: true})
            for(let key in this.state.formData) {
                dataToSubmit[key] = this.state.formData[key].value;
            }
            setTimeout(()=>{
                this.setState({loading: false})
            }, 2000)
            this.onSuccess()
        } else {
            alert("Sorry...")
        }
    }

    render(){
        return(
            <>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <FormField
                            formData = {
                                this.state.formData.name
                            }
                            id={"name"}
                            validation={this.state.validation}
                            change={(element)=>{this.updateForm(element)}}
                        />
                        {/*<input */}
                        {/*    type="text"*/}
                        {/*    className="form-control"*/}
                        {/*    name="name_input"*/}
                        {/*/>*/}
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <FormField
                            formData = {
                                this.state.formData.lastname
                            }
                            id={"lastname"}
                            validation={this.state.validation}
                            change={(element)=>{this.updateForm(element)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <FormField
                            formData = {
                                this.state.formData.age
                            }
                            id={"age"}
                            validation={this.state.validation}
                            change={(element)=>{this.updateForm(element)}}
                        >
                            {this.generateOptions()}
                        </FormField>

                        {/*<select*/}
                        {/*    name="age_input"*/}
                        {/*    className="form-control" */}
                        {/*>*/}
                        {/*    {this.generateOptions()}*/}
                        {/*</select>*/}
                    </div>
                    
                    <div className="form-group">
                        <label>Enter your message here</label>
                        <FormField
                            formData = {
                                this.state.formData.message
                            }
                            id={"message"}
                            validation={this.state.validation}
                            change={(element)=>{this.updateForm(element)}}
                        />
                        {/*<textarea */}
                        {/*    rows="3"*/}
                        {/*    placeholder="Add your message here..."*/}
                        {/*    className="form-control"*/}
                        {/*></textarea>*/}
                    </div>
                    
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        onClick={(event)=>this.submitForm(event)}
                        disabled={this.state.loading}
                    >
                        Submit
                    </button>

                </form>
            </>
        )
    }
}

export default FormOne;