import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import InfoIcon from "@mui/icons-material/Info";

import React from "react";
import { useFormContext } from "react-hook-form";

type FormValues = {
  gender: "";
  visaStatus: "";
  passport: "";
  nationality: "";
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DemographicAndVisaStatus = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <BootstrapDialog
      onClose={() => setOpen(false)}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Demo Graphic & Visa Details
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => setOpen(false)}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12}>
            <Box sx={{ m: 2, mb: 4 }}>
              <Typography variant="h3">
                Tell us more About your Gender, Nationality, Visa Status,
                Passport and Other Information
              </Typography>

              <Stack
                alignItems="center"
                direction="row"
                gap={2}
                alignContent={"center"}
                sx={{ bgcolor: "#f3f3f3", p: 1, pl: 1, mt: 2 }}
              >
                <InfoIcon fontSize="small" />
                <Typography variant="body1" component="div">
                  This is an optional section, and an excellent opportunity to
                  add relevant information.
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ m: 2 }} className="formControl">
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
                  <InputLabel className="formControl-label">Gender</InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="e.g. Male / Female"
                    fullWidth
                    size="small"
                    {...register(`gender`)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TaskAltIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
                  <InputLabel className="formControl-label">
                    Nationality
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="e.g. India"
                    fullWidth
                    size="small"
                    {...register(`nationality`)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TaskAltIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
                  <InputLabel className="formControl-label">
                    Visa Status
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="e.g. Full Working Capability"
                    fullWidth
                    size="small"
                    {...register(`visaStatus`)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TaskAltIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
                  <InputLabel className="formControl-label">
                    Passport
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="e.g. 12345678"
                    fullWidth
                    size="small"
                    {...register(`passport`)}
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
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setOpen(false)}>
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DemographicAndVisaStatus;
