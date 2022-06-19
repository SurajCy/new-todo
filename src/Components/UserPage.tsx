import { FC, memo } from "react";

type UserPageProps = {};

const UserPage: FC<UserPageProps> = (props) => {
  return <div>
      <h1 className="text-center font-bold text-3xl text-rose-400"> USER  PAGE</h1>
  </div>;
};

UserPage.defaultProps = {};

export default memo(UserPage);