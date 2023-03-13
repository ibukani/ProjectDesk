import List from 'antd/es/list';
import { ProjectData } from '../../structures/Project';
import { MoreOutlined } from '@ant-design/icons';
import { HoverBackground } from '../common/Hover';

type Props = {
  data: ProjectData;
};

export const ProjectListItem = function (props: Props) {
  const onClick = () => {
    console.log('click');
  };

  return (
    <HoverBackground
      color="#f0f0f0"
      isPointer={true}
    >
      <div className="project-list-item">
        <List.Item
          actions={[<MoreOutlined onClick={onClick} />]}
          onClick={onClick}
          style={{ borderBottom: '1px solid #f0f0f0' }}
        >
          <List.Item.Meta
            title={<h2>{props.data.name}</h2>}
            description={props.data.description}
          />
          Path: {props.data.description}
        </List.Item>
      </div>
    </HoverBackground>
  );
};
