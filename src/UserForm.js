// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './Firebase';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const UserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    var templateParams = {
      link: 'http://localhost:3000?isRegistered=true',
      reply_to: data.email,
    };

    emailjs
      .send(
        'service_dr1xxwn',
        'template_i9lo7y7',
        templateParams,
        'lO0mULDSuClmkCm33'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    try {
      const docRef = await addDoc(
        collection(firestore, 'UserRegistration'),
        data
      );
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <Modal show={props.show} cancel={props.close} onHide={props.close}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                // autoFocus
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p
                  style={{ color: 'red', fontSize: '14px', marginLeft: '5px' }}
                >
                  This field is required
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Organization"
                {...register('organization', { required: true })}
              />
              {errors.organization && (
                <p
                  style={{ color: 'red', fontSize: '14px', marginLeft: '5px' }}
                >
                  This field is required
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p
                  style={{ color: 'red', fontSize: '14px', marginLeft: '5px' }}
                >
                  This field is required
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                {...register('phoneNumber', { required: true })}
              />
              {errors.phoneNumber && (
                <p
                  style={{ color: 'red', fontSize: '14px', marginLeft: '5px' }}
                >
                  This field is required
                </p>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UserForm;
