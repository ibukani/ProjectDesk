import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ProjectInputInfoForm } from '../components/form/ProjectInputInfoForm';
import { LayoutHeader } from '../components/layout/LayoutHeader';

const { Content, Header } = Layout;

export const AddProjectPage = function () {
  const navigate = useNavigate();

  // Click to back
  function handleBack() {
    navigate('/');
  }

  return (
    <div id="addProjectPage">
      <Layout>
        <Header>
          <LayoutHeader title="AddProject" />
        </Header>
        <Content>
          <ProjectInputInfoForm />
        </Content>
      </Layout>
    </div>
  );
};
