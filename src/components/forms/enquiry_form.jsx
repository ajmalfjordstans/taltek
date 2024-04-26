import { Button, Input, MenuItem, Option, Select, Textarea } from '@material-tailwind/react';
import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function EnquiryForm() {
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
          className='py-[5px]'
        />
      )}
    </Field>
  );

  const renderSelectField = (name, label) => (
    <Field name={name}>
      {({ field }) => (
        <Select
          {...field}
          label={label}
        >
          <Option value="">Select an Option</Option>
          <Option value="We have a high priority project">We have a high priority project</Option>
          <Option value="Our team needs an expert boost">Our team needs an expert boost</Option>
          <Option value="Our team is a person down">Our team is a person down</Option>
          <Option value="We're ready to team up with a new consulting firm">We&apos;re ready to team up with a new consulting firm</Option>
          <Option value="Our project is behind schedule">Our project is behind schedule</Option>
          <Option value="We need an unbiased audit">We need an unbiased audit</Option>
          <Option value="Something Else">Something Else</Option>
        </Select>
      )
      }
    </Field >
  );
  return (
    <div className='bg-white rounded-[10px] w-[100%] max-w-[500px] mt-[40px] shadow-lg px-[35px] py-[40px] mx-auto'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          jobTitle: '',
          situation: '',
          additionalInfo: ''
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=''>
            <div className='grid gap-5 mb-[15px]'>
              <div>
                {renderTextField('firstName', 'First Name')}
                {/* <ErrorMessage name="firstName" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('lastName', 'Last Name')}
                {/* <ErrorMessage name="lastName" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('email', 'Email')}
                {/* <ErrorMessage name="email" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('phone', 'Phone')}
                {/* <ErrorMessage name="phone" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('companyName', 'Company Name')}
                {/* <ErrorMessage name="companyName" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderTextField('jobTitle', 'Job Title')}
                {/* <ErrorMessage name="jobTitle" component="div" className="text-red-600" /> */}
              </div>
              <div>
                {renderSelectField('situation', "What's your situation?")}
                {/* <ErrorMessage name="selectOption" component="div" className="text-red-600" /> */}
              </div>
              <Field name={"additionalInfo"}>
                {({ field }) => (
                  <Textarea
                    {...field}
                    label="Additional Info"
                    variant="outlined"
                    // fullWidth
                    margin="normal"
                    className='py-[5px] '
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
