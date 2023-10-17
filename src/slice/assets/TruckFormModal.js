// TruckFormModal.js
import { useState } from "react";
import { Dialog, Box, Typography, TextField, Button } from "@mui/material";

function TruckFormModal({ isOpen, onClose, onSave, initialValues }) {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Box p={2}>
        <Typography variant="h6">
          {initialValues ? "Edit Truck" : "Add Truck"}
        </Typography>
        <TextField
          label="Truck Reg"
          name="reg"
          variant="outlined"
          fullWidth
          value={formData.reg}
          onChange={handleInputChange}
        />
        {/* Add more input fields as needed */}
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Dialog>
  );
}

export default TruckFormModal;
