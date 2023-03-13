import { Layout } from 'antd';
import { LayoutHeader } from '../components/layout/LayoutHeader';
import { ProjectList } from '../components/ProjectList/ProjectList';

const { Header, Content } = Layout;

export const StartPage = function () {
  return (
    <div id="start-page">
      <Layout style={{ height: '100vh' }}>
        <Header>
          <LayoutHeader />
        </Header>
        <Content style={{ height: '100%', backgroundColor: '#FFFFFF' }}>
          <ProjectList />
        </Content>
      </Layout>
    </div>
  );
};
