import React, {Component} from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export default class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите правильный e-mail',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите правильный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    validateControl(value, validation){
        if(!validation) {
            return true
        }
        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (validation.minLength) {
           isValid = value.length >= validation.minLength && isValid
        }

        return isValid;
    }

    onChangeHandler = (event, controlName) => {

        // Предотвращаем мутации state
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        // Валидация всей формы
        let isFormValid = true;

        Object.keys(formControls).forEach(name=>{
            isFormValid = formControls[name].valid && isFormValid
        })


        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
       return Object.keys(this.state.formControls).map((controlName, index)=>{
           const control = this.state.formControls[controlName];
            return (
                <Input key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={event=>this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = (e) => {
        e.preventDefault();
    }
    render(){
        return(
            <div
                className={classes.Auth}
            >
                <div>
                    <h1>Auth</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}
                        {/* <Input label="Email" errorMessage={'Test'} />
                        <Input label="Пароль"/> */}
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >Логин</Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}