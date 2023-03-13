import List from 'antd/es/list';
import { ProjectData } from '../../structures/Project';
import { faker } from '@faker-js/faker';
import { ProjectListHeader } from './ProjectListHeader';
import { ProjectListItem } from './ProjectListItem';

function generateProjects(num: number): ProjectData[] {
  const projects: ProjectData[] = [];
  for (let i = 0; i < num; i++) {
    const project: ProjectData = {
      name: faker.system.fileName(),
      description: faker.system.commonFileName(),
      location: faker.system.filePath(),
    };

    projects.push(project);
  }

  return projects;
}

export const ProjectList = function () {
  //const [projects, setProjects] = useState<ProjectData[]>();

  //invoke<ProjectData[]>('get_projects')
  //.then((data) => setProjects(data))
  //.catch((error) => console.log(error));

  return (
    <div className="project-list">
      <ProjectListHeader />
      <List
        style={{ overflowY: 'scroll', height: 'calc(100vh - 113px)' }}
        size="small"
        bordered={false}
        dataSource={generateProjects(100)}
        renderItem={(item) => <ProjectListItem data={item} />}
      />
    </div>
  );
};
