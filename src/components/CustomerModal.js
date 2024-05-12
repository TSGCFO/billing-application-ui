import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const customerSchema = Yup.object().shape({
  companyName: Yup.string().required('Company name is required'),
  legalBusinessName: Yup.string().required('Legal business name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip code is required'),
  country: Yup.string().required('Country is required')
});

const CustomerModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Customer</DialogTitle>
      <Formik
        initialValues={{
          companyName: '',
          legalBusinessName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          country: ''
        }}
        validationSchema={customerSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values); // Logs form values to the console
          setSubmitting(false);
          handleClose(); // Closes the modal after form submission
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <DialogContent>
              <Field as={TextField} name="companyName" label="Company Name" fullWidth />
              <Field as={TextField} name="legalBusinessName" label="Legal Business Name" fullWidth />
              <Field as={TextField} name="email" label="Email" fullWidth />
              <Field as={TextField} name="phone" label="Phone" fullWidth />
              <Field as={TextField} name="address" label="Address" fullWidth />
              <Field as={TextField} name="city" label="City" fullWidth />
              <Field as={TextField} name="state" label="State" fullWidth />
              <Field as={TextField} name="zip" label="Zip" fullWidth />
              <Field as={TextField} name="country" label="Country" fullWidth />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" color="primary">Save and Close</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default CustomerModal;
