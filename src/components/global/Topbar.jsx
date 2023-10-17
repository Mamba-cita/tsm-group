import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from "react";
import { colorModeContext, tokens } from "../../Theme";
import { InputBase, Icon } from "@mui/material";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Global Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Icon className="material-symbols-outlined">search</Icon>
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton>
          <Icon className="material-symbols-outlined">notifications</Icon>
        </IconButton>
        <IconButton>
          <Icon className="material-symbols-outlined">settings</Icon>
        </IconButton>
        <IconButton>
          <Icon className="material-symbols-outlined">person</Icon>
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Icon className="material-symbols-outlined">dark_mode</Icon>
          ) : (
            <Icon className="material-symbols-outlined">light_mode</Icon>
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
