import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import React from "react";
import { useFormContext } from "react-hook-form";
type FormValues = {
  linkedin: "";
  github: "";
  personalWebSite: "";
};
const PersonalLinks = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1" color="initial">
        Add additional information to your resume (optional)
      </Typography>

      <Box sx={{ mt: 2 }} className="formControl">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sx={{ p: 1 }}>
            <InputLabel className="formControl-label">Linkedin</InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="e.g. https://www.linkedin.com/in/xxx-xxx"
              fullWidth
              size="small"
              {...register(`linkedin`)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TaskAltIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ p: 1 }}>
            <InputLabel className="formControl-label">
              Personal Website
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="e.g. https://www.example.com"
              fullWidth
              size="small"
              {...register(`personalWebSite`)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TaskAltIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ p: 1 }}>
            <InputLabel className="formControl-label">Github</InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="e.g. https://www.github.com/username"
              fullWidth
              size="small"
              {...register(`github`)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <TaskAltIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonalLinks;
