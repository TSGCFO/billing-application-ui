import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Formik, Form, Field, FieldArray } from 'formik';
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
  country: Yup.string().required('Country is required'),
  accountName: Yup.string().required('Name is required'),
  accountEmail: Yup.string().email('Invalid email').required('Email is required'),
  accountPhone: Yup.string().required('Phone number is required'),
  businessType: Yup.string().required('Business type is required')
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
          country: '',
          accountName: '',
          accountEmail: '',
          accountPhone: '',
          businessType: ''
        }}
        validationSchema={customerSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          handleClose();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <DialogContent>
              {/* Customer Information Fields */}
              <Field as={TextField} name="companyName" label="Company Name" fullWidth />
              <Field as={TextField} name="legalBusinessName" label="Legal Business Name" fullWidth />
              {/* More customer fields here */}
              {/* Account Payable Information Fields */}
              <Field as={TextField} name="accountName" label="Account Payable Name" fullWidth />
              <Field as={TextField} name="accountEmail" label="Account Payable Email" fullWidth />
              <Field as={TextField} name="accountPhone" label="Account Payable Phone" fullWidth />
              {/* Type of Business */}
              <RadioGroup name="businessType">
                <FormControlLabel value="Sole Proprietorship" control={<Radio />} label="Sole Proprietorship" />
                <FormControlLabel value="Partnership" control={<Radio />} label="Partnership" />
                <FormControlLabel value="Corporation" control={<Radio />} label="Corporation" />
                <FormControlLabel value="LLC" control={<Radio />} label="LLC" />
                <FormControlLabel value="Non-Profit" control={<Radio />} label="Non-Profit" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
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