import { CloseCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;

export const ProjectListHeader = function () {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');

  function onClickAddProject() {
    navigate('/addproject');
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    console.log(searchValue);
  }

  return (
    <div
      style={{
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <div
        style={{
          display: 'flex',
          marginTop: '16px',
          marginBottom: '16px',
        }}
      >
        <Search
          allowClear
          placeholder="Search projects"
          style={{ flex: 1, marginRight: '16px', marginLeft: '8px' }}
          onChange={onChange}
          value={searchValue}
        />
        <Space
          align="center"
          style={{ float: 'right', marginRight: '8px' }}
        >
          <Button
            type="primary"
            onClick={onClickAddProject}
          >
            Add Project
          </Button>
        </Space>
      </div>
    </div>
  );
};
