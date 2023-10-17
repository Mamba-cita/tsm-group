import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../Theme";
import Header from "../components/header/Header";
import { useGetUsersQuery } from "../slice/users/usersApiSlice.js";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: usersData, isLoading, isError, error } = useGetUsersQuery();

  // Define columns as you did before
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Tel No.",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "access",
      headerName: "Accesss Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && (
              <span className="material-symbols-outlined">
                admin_panel_settings
              </span>
            )}
            {access === "Manager" && (
              <span className="material-symbols-outlined">security</span>
            )}
            {access === "user" && (
              <span className="material-symbols-outlined">lock_open</span>
            )}
            <Typography color={colors.grey[100]} sx={{ml:'5px'}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const rows = usersData.map((user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    access: user.access,
  }));

  return (
    <Box m='20px'>
      <Header title="TEAM" subtitle="Manage team" />
      <Box m='40px 0 0 0' height='75vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: 'none'
        },
        "& .MuiDataGrid-cell": {
            border: 'none'
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
        },
        "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: 'none',
          backgroundColor: colors.blueAccent[700]

        },
        }}>
        <DataGrid rows={rows} columns={columns}  />
      </Box>
    </Box>
  );
}
