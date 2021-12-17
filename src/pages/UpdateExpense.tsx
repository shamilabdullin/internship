import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import styles from './add-expense-modal.module.scss';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { FormGroup } from './FormGroup';

interface IUpdateExpenseModal {
    handleClose: React.MouseEventHandler<HTMLButtonElement>,
    handleShow: React.MouseEventHandler<HTMLButtonElement>,
    show: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement>
}

export const UpdateExpenseModal = (props: IUpdateExpenseModal): JSX.Element => {

    const [validDescription, setValidDescription] = useState(true);
    const [validAmount, setValidAmount] = useState(true);
    const [validCategory, setValidCategory] = useState(true);

    const [descriptionValue, setDescriptionValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        
    };
    const handleAmountInput = (e: ChangeEvent<HTMLInputElement>) => {

    };

    return(
        <>
        <Button variant="warning" onClick={props.handleShow}>
          Update
        </Button>
  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Row>
                <Col>
                  <Form onSubmit={props.handleSubmit}>
                    <FormGroup
                      title={"Enter description"}
                      onChange={handleNameInput}
                      name="description"
                      value={descriptionValue}
                      placeholder="description"
                      valueValid={validDescription}
                    />
                    <FormGroup
                      title={"Enter amount"}
                      onChange={handleAmountInput}
                      name="amount"
                      value={amountValue}
                      placeholder="amount"
                      valueValid={validAmount}
                    />
                    <Form.Group controlId="">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={
                            validDescription && validAmount && validCategory
                            ? props.handleClose
                            : props.handleShow
                        }
                      >
                        Update
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}