type Props = {
  title: string;
};

export const LayoutHeader = function (props: Props) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  );
};

LayoutHeader.defaultProps = {
  title: 'ProjectDesk',
};
