import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './OrderForm.css';

export default function OrderForm () {
    return (
        <Form>
            <div className="row">
                <div className="col">
                    <h2>Build your own pizza</h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4">
                    
                    <FormGroup>
                        <h4>Select size:</h4>
                        <Input type="select" id="size" name="size">
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
                                <Input type="radio" name="sauce" value="original" />{' '}
                                Original red
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="ranch" />{' '}
                                Garlic Ranch
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="bbq" />{' '}
                                Barbeque sauce
                            </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="spinach" />{' '}
                                Spinach Alfredo
                            </Label>
                            
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="sauce" value="habanero" />{' '}
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
                            <Input type="checkbox" name="toppingPepperoni" id="toppingPepperoni" />{' '}
                                Pepperoni  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingSausage" id="toppingSausage" />{' '}
                                Sausage  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingBacon" id="toppingBacon" />{' '}
                                Bacon  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingOnions" id="toppingOnions" />{' '}
                                Onions  
                            </Label>
                        </FormGroup>
                        
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="toppingBellPepper" id="toppingBellPepper" />{' '}
                                Bell pepper  
                            </Label>
                        </FormGroup>
                        
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-6">
                    <h4>Special Instructions:</h4>
                    <FormGroup>
                        <Input type="textarea" name="text" id="instructions" placeholder="Anything else you'd like to add?" />
                    </FormGroup>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Button color="danger">Add to order</Button>
                </div>
            </div>
        </Form>
    );
}