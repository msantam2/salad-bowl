import React from 'react';
import { Form, Input, Button } from 'antd';
import { submitEntries } from '../helpers';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SBForm = () => {
  return (
    <Form
      style={{ marginTop: 60 }}
      {...layout}
      name="basic"
      onFinish={submitEntries}
      onFinishFailed={err => console.log('Err: ', err)}
    >
      <Form.Item
        label="Entry 1"
        name="entry1"
        rules={[
          {
            required: true,
            message: 'Please input Entry 1 ya bish!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Entry 2"
        name="entry2"
        rules={[
          {
            required: true,
            message: 'Please input Entry 2 ya bish!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Entry 3"
        name="entry3"
        rules={[
          {
            required: true,
            message: 'Please input Entry 3 ya bish!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Entry 4"
        name="entry4"
        rules={[
          {
            required: true,
            message: 'Please input Entry 4 ya bish!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Entry 5"
        name="entry5"
        rules={[
          {
            required: true,
            message: 'Please input Entry 5 ya bish!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SBForm;
