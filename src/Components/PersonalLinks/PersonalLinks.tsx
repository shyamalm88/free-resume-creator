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
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FormValidationError from "../Common/FormValidationError/FormValidationError";

type FormValues = {
  linkedin: "";
  github: "";
  personalWebSite: "";
};
const PersonalLinks = () => {
  const {
    register,
    formState: { errors, dirtyFields },
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
              {...register(`linkedin` as const, {
                pattern: {
                  value: /(^((https?:\/\/)?((www|\w\w)\.)?)linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gmi,
                  message: "not a valid linkedin url."
                },
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {dirtyFields.linkedin ? !errors.linkedin ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                  </InputAdornment>
                ),
              }}
            />
            <FormValidationError errorText={(errors as any)?.linkedin?.message}/>
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
              {...register(`personalWebSite` as const, {
                pattern: {
                  value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                  message: "not a valid url."
                },
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {dirtyFields.personalWebSite ? !errors.personalWebSite ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                  </InputAdornment>
                ),
              }}
            />
            <FormValidationError errorText={(errors as any)?.personalWebSite?.message}/>
          </Grid>
          <Grid item xs={12} sx={{ p: 1 }}>
            <InputLabel className="formControl-label">Github</InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="e.g. https://www.github.com/username"
              fullWidth
              size="small"
              {...register(`github` as const, {
                pattern: {
                  value: /((http|git|ssh|http(s)|file|\/?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)(\/)?/,
                  message: "not a valid Github url."
                },
              })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {dirtyFields.github ? !errors.github ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                  </InputAdornment>
                ),
              }}
            />
            <FormValidationError errorText={(errors as any)?.github?.message}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonalLinks;
