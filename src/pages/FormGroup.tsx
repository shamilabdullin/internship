import React from "react";
import { Form } from "react-bootstrap";

interface IFormGroup {
    title: string,
    onChange: React.ChangeEventHandler<any>,
    placeholder: string,
    name: string,
    value: string,
    valueValid: boolean
}

export const FormGroup = (props: IFormGroup): JSX.Element => {
  return (
    <div className="form-group mb-3">
      <Form.Group controlId="">
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          type="text"
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </Form.Group>
      {/* {!valueValid && (
        <div style={{ color: "red" }}>Введите корректные данные</div>
      )} */}
    </div>
  );
};