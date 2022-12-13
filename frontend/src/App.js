import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./pages/account/Account";
import AdminHome from "./pages/admin-home/AdminHome";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminUsers from "./pages/admin-users/AdminUsers";
import Friends from "./pages/friends/Friends";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import NewFriends from "./pages/newfriends/NewFriends";
import OUserProfile from "./pages/ouserprofile/OUserProfile";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/friends" element={<Friends />} />
          {<Route path="/user/:id" element={<OUserProfile />} />}
          <Route path="/add" element={<NewFriends />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
