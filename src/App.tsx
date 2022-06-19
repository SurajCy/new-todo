import { FC, memo } from "react";
import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./Components/TodoPage";
import UserPage from "./Components/UserPage";



const App: FC = () => {
  return <div className="p-10">
    <div className="p-5 bg-green-400 rounded-md "> 
      <Link to="/">TODOS</Link>
      <Link to="/user"> USERS</Link>
    </div>
    <Routes>
      <Route index element={<TodoPage/>}/>
      <Route path="/user" element={<UserPage/>}/>
    </Routes>
  </div>;
};

App.defaultProps = {};

export default memo(App);