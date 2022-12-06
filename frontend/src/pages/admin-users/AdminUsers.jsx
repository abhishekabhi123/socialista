import React, { useState } from "react";
import { useEffect } from "react";
import News from "../../components/news/News";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Top from "../../components/top/Top";
import "./AdminUsers.css";
import axios from "../../admin-axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { DataGrid } from "@mui/x-data-grid";

function AdminUsers() {
  let navigate = useNavigate();
  const columns = [
    { field: "_id", headerName: "id", width: 200 },
    {
      field: "fullname",
      headerName: "Full name",
      width: 150,
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  ];
  const [users, setUsers] = useState();

  const rows = users ?? {};

  useEffect(() => {
    axios.get("/admin/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  const handleBlock = (userid) => {
    console.log(userid);
    axios.patch(`/admin/users/${userid}/block`).then(() => {
      axios.get("/admin/users").then((res) => {
        console.log(res);
        setUsers(res.data);
      });
    });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {params.row.isBlocked ? (
              <div
                className="viewButton"
                onClick={() => handleBlock(params.id)}
              >
                unblock
              </div>
            ) : (
              <div
                className="viewButton2"
                onClick={() => handleBlock(params.id)}
              >
                Block
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      {/* <Top /> */}
      <div className="admin-users">
        <div className="mainContainer">
          <div className="sidebar">
            <span style={{ marginTop: "2rem" }}>Dashboard</span>
            <span onClick={() => navigate("/admin")}>Home</span>
            <span onClick={() => navigate("/admin/users")}>Users</span>
            <span>Posts</span>
            <span>Reports</span>
          </div>
          <div className="pad">
            <DataGrid
              rows={rows}
              columns={columns.concat(actionColumn)}
              getRowId={(row) => row._id}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </div>
          {/* <Sidebar /> */}
          {/* <News /> */}
          {/* <Rightbar /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminUsers;
