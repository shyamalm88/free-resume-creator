import {
  Box,
  Button,
  CardActions,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PersonalLinks from "../PersonalLinks/PersonalLinks";
import { useFormContext } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import { templateData } from "../../data/templateData";

import BootStrapDialog, {
  Content,
  Footer,
} from "../Common/BootStrapDialog/BootStrapDialog";
import React from "react";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";

const components = {
  Template1,
  Template2,
};

function PersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [openTemplateChooseModal, setOpenTemplateChooseModal] =
    React.useState(false);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={8}>
        <Box sx={{ m: 2, mb: 4 }}>
          <Typography variant="h3">
            What’s the best way for employers to contact you?
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
              We suggest including an email and phone number.
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
              <InputLabel className="formControl-label">First Name</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. John"
                fullWidth
                size="small"
                {...register(`firstName` as const, {
                  required: true,
                })}
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
              <InputLabel className="formControl-label">Middle Name</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Middle"
                fullWidth
                size="small"
                {...register(`middleName`)}
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
              <InputLabel className="formControl-label">Last Name</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Doe"
                fullWidth
                size="small"
                {...register(`lastName` as const, {
                  required: true,
                })}
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
              <InputLabel className="formControl-label">Profession</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Software Developer"
                fullWidth
                size="small"
                {...register(`profession` as const, {
                  required: true,
                })}
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
              <InputLabel className="formControl-label">City</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Bengaluru"
                fullWidth
                size="small"
                {...register(`city` as const, {
                  required: true,
                })}
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
              <InputLabel className="formControl-label">Country</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. India"
                fullWidth
                size="small"
                {...register(`country` as const, {
                  required: true,
                })}
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
              <InputLabel className="formControl-label">Pin Code</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. 123456"
                fullWidth
                size="small"
                {...register(`pinCode` as const, {
                  required: true,
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <TaskAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">Mobile No.</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. 9876543210"
                fullWidth
                size="small"
                {...register(`mobileNo` as const, {
                  required: true,
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <TaskAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">
                Email Address
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. john.doe@email.com"
                fullWidth
                size="small"
                {...register(`email` as const, {
                  required: true,
                })}
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
        <PersonalLinks />
      </Grid>
      <Grid item xs={4} sx={{ mt: 10 }}>
        <Box
          sx={{
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "hidden",
            maxHeight: "540px",
            display: "flex",
            marginLeft: "auto",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transform: "scale(0.494)",
              position: "relative",
              top: "-120px",
            }}
          >
            <Template1 />
          </div>
        </Box>
        <Box sx={{ justifyContent: "center", display: "flex", mt: 4 }}>
          <Button
            variant="outlined"
            className="customActionBtn"
            onClick={() => setOpenTemplateChooseModal(true)}
          >
            Change Template
          </Button>
        </Box>

        <BootStrapDialog
          open={openTemplateChooseModal}
          setOpen={setOpenTemplateChooseModal}
          title="Choose From Templates"
        >
          <Content>
            <Container>
              <Box sx={{ display: "flex" }}>
                {templateData.map((item) => {
                  const SpecificComponent = (components as any)[item.template];
                  return (
                    <Box sx={{ maxWidth: 275 }} key={item.id}>
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                          {item.template}
                        </Typography>
                        <Box
                          sx={{
                            border: "1px solid #ccc",
                            background: "#fff",
                            maxHeight: "340px",
                            display: "flex",
                            marginLeft: "auto",
                            justifyContent: "center",
                            overflowY: "auto",
                            overflowX: "hidden",
                          }}
                        >
                          <div
                            style={{
                              transform: "scale(0.294)",
                              position: "relative",
                              top: "-110px",
                            }}
                          >
                            <SpecificComponent />
                          </div>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Choose</Button>
                      </CardActions>
                    </Box>
                  );
                })}
              </Box>
            </Container>
          </Content>
          <Footer>
            <Button autoFocus onClick={() => setOpenTemplateChooseModal(false)}>
              Save changes
            </Button>
          </Footer>
        </BootStrapDialog>
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;
