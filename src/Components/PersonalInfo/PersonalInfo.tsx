import {
  Box,
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
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import React from "react";
import FormValidationError from "../Common/FormValidationError/FormValidationError";
import ResumeTemplateChoose from "../Common/ResumeTemplateChoose/ResumeTemplateChoose";


function PersonalInfo() {
  const {
    register,
    getValues,
    formState: { errors, isDirty, dirtyFields },
  } = useFormContext();
  const [openTemplateChooseModal, setOpenTemplateChooseModal] =
    React.useState(false);

    console.log(errors);

      
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
              <InputLabel className="formControl-label">First Name *</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. John"
                fullWidth
                size="small"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "This field cannot be empty."
                  },
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "Only Alphabets are allowed."
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters are required."
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 characters are required."
                  }
                  
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.firstName ? !errors.firstName ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.firstName?.message}/>
            </Grid>
            <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">Middle Name</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Middle"
                fullWidth
                size="small"
                {...register(`middleName` as const, {
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "Only Alphabets are allowed."
                  },
                  
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                     {dirtyFields.middleName ? !errors.middleName ?  getValues(`middleName`) ? <TaskAltIcon color="success" /> : <></> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.middleName?.message}/>
            </Grid>
            <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">Last Name *</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. Doe"
                fullWidth
                size="small"
                {...register(`lastName` as const, {
                  required: {
                    value: true,
                    message: "This field cannot be empty."
                  },
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "Only Alphabets are allowed."
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters are required."
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 characters are required."
                  }
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.lastName ? !errors.lastName ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.lastName?.message}/>
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
                  required: {
                    value: true,
                    message: "This field cannot be empty."
                  },
                  pattern: {
                    value: /^[a-z\d\-_\s]+$/i,
                    message: "Only Alphanumeric characters and spaces are allowed."
                  },
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters are required."
                  },
                  
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.profession ? !errors.profession ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.profession?.message}/>
              
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
                  pattern: {
                    value: /^[a-z\d\-_\s]+$/i,
                    message: "Only Alphanumeric characters and spaces are allowed."
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.city ? !errors.city ? getValues(`city`) ? <TaskAltIcon color="success" /> : <></> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.city?.message}/>
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
                  pattern: {
                    value: /^[a-z\d\-_\s]+$/i,
                    message: "Only Alphanumeric characters and spaces are allowed."
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.country ? !errors.country ? getValues(`country`) ? <TaskAltIcon color="success" /> : <></> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.country?.message}/>
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
                  pattern: {
                    value: /^\d+$/,
                    message: "Only Numbers are allowed"
                  },
                  
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.pinCode ? !errors.pinCode ? getValues(`pinCode`) ? <TaskAltIcon color="success" /> : <></> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.pinCode?.message}/>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">Mobile No. *</InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. 9876543210"
                fullWidth
                size="small"
                {...register(`mobileNo` as const, {
                  required:{
                    value: true,
                    message: "This field is required"
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Only Numbers are allowed"
                  },
                  maxLength: {
                    value: 10,
                    message: "Mobile Number can contain only 10 digits"
                  }
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                     {dirtyFields.mobileNo ? !errors.mobileNo ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.mobileNo?.message}/>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">
                Email Address *
              </InputLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="e.g. john.doe@email.com"
                fullWidth
                size="small"
                {...register(`email` as const, {
                  required: {
                    value: true,
                    message: "This Field is required."
                  },
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Provide valid Email Address"
                  }
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {dirtyFields.email ? !errors.email ? <TaskAltIcon color="success" /> : <ErrorOutlineIcon color="error" /> : <></>}
                    </InputAdornment>
                  ),
                }}
              />
              <FormValidationError errorText={(errors as any)?.email?.message}/>
            </Grid>
          </Grid>
        </Box>
        <PersonalLinks />
      </Grid>
     <ResumeTemplateChoose/>
    </Grid>
  );
}

export default PersonalInfo;
