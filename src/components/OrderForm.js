import React from "react";
import { Button, Form, FormGroup, Label, Input, UncontrolledAlert } from 'reactstrap';
import './OrderForm.css';

export default function OrderForm (props) {
    const {inputOnChangeHandler, onSubmitHandler, disabled, errors} = props;

    return (
        <Form>
            <div className="row">
                <div className="col">
                    <h2>Build your own pizza</h2>
                </div>
            </div>
            
            <div className="row">
                {
                    Object.keys(errors).map((item, key) => {
                        if (errors[item]) {
                            return (
                                <div className="col">
                                    <UncontrolledAlert color="danger" key={key}>
                                        {errors[item]}
                                    </UncontrolledAlert>
                                </div>
                            );
                        }
                        return null;
                    })
                }
            </div>
            
            <div className="row">
                <div className="col-lg-4">
                    
                    <FormGroup>
                        <h4>Select size:</h4>
                        <Input type="select" id="size" name="size" onChange={inputOnChangeHandler}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </Input>
                    </FormGroup>
                
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    
                    <div>
                        <h4>Select sauce:</h4>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="original" onChange={inputOnChangeHandler} />{' '}
                                Original red
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="ranch" onChange={inputOnChangeHandler} />{' '}
                                Garlic Ranch
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="bbq" onChange={inputOnChangeHandler} />{' '}
                                Barbeque sauce
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="spinach" onChange={inputOnChangeHandler} />{' '}
                                Spinach Alfredo
                            </Label>
                            
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="habanero" onChange={inputOnChangeHandler} />{' '}
                                Habanero
                            </Label>
                            
                        </FormGroup>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div>
                        <h4>Add toppings:</h4>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingPepperoni" value="yes" id="toppingPepperoni" onChange={inputOnChangeHandler} />{' '}
                                Pepperoni  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingSausage" value="yes" id="toppingSausage" onChange={inputOnChangeHandler} />{' '}
                                Sausage  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingBacon" value="yes" id="toppingBacon" onChange={inputOnChangeHandler} />{' '}
                                Bacon  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingOnions" value="yes" id="toppingOnions" onChange={inputOnChangeHandler} />{' '}
                                Onions  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingBellPepper" value="yes" id="toppingBellPepper" onChange={inputOnChangeHandler} />{' '}
                                Bell pepper  
                            </Label>
                        </FormGroup>
                        
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-6">
                    <h4>Your name: (required)</h4>
                    <FormGroup>
                        <Input type="text" name="name" id="name" onChange={inputOnChangeHandler} />
                    </FormGroup>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-6">
                    <h4>Special Instructions:</h4>
                    <FormGroup>
                        <Input type="textarea" name="instructions" id="instructions" placeholder="Anything else you'd like to add?" onChange={inputOnChangeHandler} />
                    </FormGroup>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Button color="danger" disabled={disabled} onClick={onSubmitHandler}>Add to order</Button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <pre></pre>
                </div>
            </div>
        </Form>
    );
}