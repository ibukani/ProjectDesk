import { invoke } from '@tauri-apps/api';
import { Form, Input } from 'antd';
import Button from 'antd/es/button';
import { useNavigate } from 'react-router-dom';

export const ProjectInputInfoForm = function () {
  const navigate = useNavigate();

  const onFinish = function (value: any) {
    invoke('add_project', { project: value });
    navigate('/');
  };

  return (
    <div
      className="project-info-form"
      style={{ marginTop: '8px' }}
    >
      <Form
        name="project-info"
        labelCol={{ span: 3, offset: 1 }}
        labelAlign={'left'}
        wrapperCol={{ span: 17 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your project name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please input your project file path' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
