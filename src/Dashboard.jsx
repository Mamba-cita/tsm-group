// import { Container } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { colorModeContext, useMode } from "./Theme";
// import {  CssBaseline, ThemeProvider  } from '@mui/material';
// import Topbar from "./components/global/Topbar";
// import Sidebar from "./components/global/Sidebar";



// export default function Dashboard() {
//   const [theme, colorMode] = useMode();
//   return (
//     <colorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <div className="app">
//     <Sidebar />
//     <main className="content">
//     <Topbar />
//     <ToastContainer />
//     <Container className="my-2">
//         <Outlet />
//       </Container>
//     </main>
//     </div>
//     </ThemeProvider>
//     </colorModeContext.Provider>
//   );
// }

// src/components/Dashboard.js

import { useDispatch, useSelector } from 'react-redux';
import { logout } from './slice/authSlice';

export default function Dashboar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => !!state.auth.userInfo);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
