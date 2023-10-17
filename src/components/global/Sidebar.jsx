import { useState } from "react";
import Logo from "../../assets/brans.png";
import { useDispatch } from "react-redux";
import { logout } from '../../slice/authSlice.js'
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import PropTypes from 'prop-types';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClick = () => {
    if (setSelected) {
      setSelected(title);
    }
  };

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={handleClick} 
    >
      <Typography> {title} </Typography>
      <Link to={to} />
    </MenuItem>
  );
};
Item.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  selected: PropTypes.string, 
  setSelected: PropTypes.func, 
};


export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logging out...");

    dispatch(logout());
   
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: " transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <span className="material-symbols-outlined">menu</span>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <span className="material-symbols-outlined">menu</span>{" "}
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={Logo}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  TSM GROUP
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={
                <span className="material-symbols-outlined">dashboard</span>
              }
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Moves"
              to="/moves"
              icon={
                <span className="material-symbols-outlined">dashboard</span>
              }
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              title="Assets"
              icon={
                <span className="material-symbols-outlined">dashboard</span>
              }
            >
              <Item
                title="Trucks"
                to="/trucks"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Trailer"
                to="/trailer"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Driver"
                to="/driver"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Employees"
                to="/team"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Finance"
              icon={
                <span className="material-symbols-outlined">dashboard</span>
              }
            >
              <Item
                title="Invoiced"
                to="/invoiced"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Uninvoiced"
                to="/uninvoiced"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Paid"
                to="/paid"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu
              title="Stations"
              icon={
                <span className="material-symbols-outlined">dashboard</span>
              }
            >
              <Item
                title="Fuel Orders"
                to="/fuelorders"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Garage Orders"
                to="/garageorders"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Entities"
              icon={
                <span className="material-symbols-outlined">dashboard</span>
              }
            >
              <Item
                title="Garage"
                to="/garage"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Fuel Station"
                to="/fuelstation"
                icon={
                  <span className="material-symbols-outlined">dashboard</span>
                }
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
           
            
            <button onClick={handleLogout} >logout</button>
           
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
