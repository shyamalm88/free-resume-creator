import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import InfoIcon from "@mui/icons-material/Info";

import React from "react";
import { useFormContext } from "react-hook-form";
import BootStrapDialog, {
  Content,
  Footer,
} from "../Common/BootStrapDialog/BootStrapDialog";

type FormValues = {
  gender: "";
  visaStatus: "";
  passport: "";
  nationality: "";
};

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
    <BootStrapDialog
      open={open}
      setOpen={setOpen}
      title="Demo Graphic & Visa Details"
    >
      <Content>
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
      </Content>
      <Footer>
        <Button autoFocus onClick={() => setOpen(false)}>
          Save changes
        </Button>
      </Footer>
    </BootStrapDialog>
  );
};

export default DemographicAndVisaStatus;
