import React from 'react';
import { Form, Input, Button } from 'antd';
import GameWaitingRoom from './GameWaitingRoom';
import { submitEntries, stopGame } from '../helpers';

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

class SBForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entriesSubmitted: false };
  }

  componentDidMount() {
    stopGame();
  }

  render() {
    if (this.state.entriesSubmitted) {
      return <GameWaitingRoom />;
    } else {
      const onFinish = (entryFields) => {
        // entryFields => { entry1: 'a', entry2: 'b' }
        const entries = Object.values(entryFields);
        const success = submitEntries(entries);

        if (success) {
          this.setState({ entriesSubmitted: true })
        }
      };

      return (
        <Form
          style={{ marginTop: 60 }}
          {...layout}
          name="basic"
          onFinish={values => onFinish(values)}
          onFinishFailed={error => console.log('Form error: ', error)}
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
    }
  }
};

export default SBForm;
