'use client'
import { Button, Input, Textarea } from '@material-tailwind/react';
import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function ContactForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const renderTextField = (name, label) => (
    <Field name={name}>
      {({ field }) => (
        <Input
          {...field}
          label={label}
          className='py-[5px] bg-white'
        />
      )}
    </Field>
  );


  return (
    <div className='bg-gray rounded-[10px] w-[100%] max-w-[500px] mt-[40px] shadow-lg px-[15px] py-[30px] mx-auto'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: ''
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=''>
            <div className='grid gap-5 mb-[15px]'>
              <div>
                {renderTextField('name', 'Name')}
                {/* <ErrorMessage name="lastName" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('email', 'Email')}
                {/* <ErrorMessage name="email" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('subject', 'Subject')}
                {/* <ErrorMessage name="phone" component="div" className="text-red-600" /> */}
              </div>
              <Field name={"message"}>
                {({ field }) => (
                  <Textarea
                    {...field}
                    label="Additional Info"
                    variant="outlined"
                    // fullWidth
                    margin="normal"
                    className='py-[5px] bg-white'
                  />
                )}
              </Field>
            </div>
            <Button
              type="submit"
              variant="contained"
              className='bg-primary mt-[10px]'
              fullWidth
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
