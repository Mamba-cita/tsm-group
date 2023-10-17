import { useState } from "react";
import { Box, Typography, Dialog, TextField, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../Theme";
import { useTheme } from "@emotion/react";
import Header from "../components/header/Header";
import {
  useUpdateTruckMutation,
  useGetTrucksQuery,
  useDeleteTruckMutation,
} from "../slice/assets/trucksApiSlice.js";
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import EditIcon from "@mui/icons-material/Edit"; // Import Edit icon
import SaveIcon from "@mui/icons-material/Save"; // Import Save icon

export default function Trucks() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: trucksData, isLoading, isError, error } = useGetTrucksQuery();
  const updateTruckMutation = useUpdateTruckMutation();
  const deleteTruckMutation = useDeleteTruckMutation();
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "reg",
      headerName: "Truck Reg",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "make",
      headerName: "Make",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "model",
      headerName: "Model",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "value",
      headerName: "Value",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => {
        const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
        const [updatedValue, setUpdatedValue] = useState(row.value);
       

        const handleUpdateClick = () => {
          setIsEditDialogOpen(true);
        };

        const handleDeleteClick = (truckId) => {
          if (window.confirm("Are you sure you want to delete this truck?")) {
            deleteTruckMutation(truckId);
          }
        };

        const handleEditDialogClose = () => {
          setIsEditDialogOpen(false);
        };

        const handleUpdateTruck = () => {
          updateTruckMutation.mutate({ id: row.id, value: updatedValue });
          setIsEditDialogOpen(false);
        };
    
       
        return (
          <Box display="flex" justifyContent="center">
            <IconButton
              color="primary"
              onClick={handleUpdateClick}
              aria-label="Edit"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={() => handleDeleteClick(row.id)}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
            <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
              <Box p={2}>
                <Typography variant="h6">Edit Truck Value</Typography>
                <TextField
                  label="New Value"
                  variant="outlined"
                  fullWidth
                  value={updatedValue}
                  onChange={(e) => setUpdatedValue(e.target.value)}
                />
                <IconButton
                  color="primary"
                  onClick={handleUpdateTruck}
                  aria-label="Save"
                >
                  <SaveIcon />
                </IconButton>
              </Box>
            </Dialog>
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
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
            {access === "active" && (
              <span className="material-symbols-outlined">
                admin_panel_settings
              </span>
            )}
            {access === "deactivated" && (
              <span className="material-symbols-outlined">security</span>
            )}

            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
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
  const rows = trucksData.map((truck) => ({
    id: truck._id,
    reg: truck.reg,
    make: truck.make,
    model: truck.model,
    value: truck.value,
    status: truck.status,
  }));

  return (
    <Box m="20px">
      <Header title="TRUCKS" subtitle="Manage trucks" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            borderTop: "none",
            color: `${colors.grey[700]} !important `,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
     
    </Box>
  );
}
