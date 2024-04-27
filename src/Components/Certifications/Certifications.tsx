import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddIcon from "@mui/icons-material/Add";
import { useFormContext, useFieldArray } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import FormValidationError from "../Common/FormValidationError/FormValidationError";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { Month } from "../../data/Month";
const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  certifications: {
    certificationName: string;
    issueMonth: string;
    issueYear: number | null;
    expirationMonth: string;
    expirationYear: number | null;
  }[];
};

const Certifications = () => {
  const {
    register,
    getValues,
    control,
    formState: { errors, dirtyFields },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "certifications",
    control,
  });

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        certificationName: "",
        issueMonth: "",
        issueYear: null,
        expirationMonth: "",
        expirationYear: null,
      });
    }
  }, [fields]);
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12}>
          <Box sx={{ m: 2, mb: 4 }}>
            <Typography variant="h3">
              Tell us about your Certifications
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
                Certifications can make you a more attractive candidate to
                employers and increase your chances of career success and
                advancement..
              </Typography>
            </Stack>
          </Box>
          {fields.map((field, index) => {
            return (
              <React.Fragment key={index}>
                <Box sx={{ m: 2 }} className="formControl">
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={12} md={12} lg={12} sx={{ p: 1 }}>
                      <InputLabel className="formControl-label">
                        Certification Name
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. Microsoft AZ900 "
                        fullWidth
                        size="small"
                        {...register(
                          `certifications.${index}.certificationName` as const,
                          {
                            pattern: {
                              value: /^[a-z\d\-_\s]+$/i,
                              message: "Only Alphanumeric characters and spaces are allowed."
                            },
                          }
                        )}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                               {dirtyFields?.certifications?.[index]?.certificationName ? !errors?.certifications?.[index]?.certificationName ? getValues(`certifications.${index}.certificationName`) ? <TaskAltIcon color="success" /> : <></> : <ErrorOutlineIcon color="error" /> : <></>}
                            </InputAdornment>
                          ),
                        }}
                      />
                       <FormValidationError errorText={errors?.certifications?.[index]?.certificationName?.message}/>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ m: 2 }} className="formControl">
                  <Stack direction="row" gap={4}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 12, sm: 12, md: 12 }}
                    >
                      <Grid item xs={12} md={3} lg={3} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          Issue Date
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(`certifications.${index}.issueMonth`)}
                        >
                          {Month.map((x) => {
                            return (
                              <MenuItem
                                value={x.abbreviation}
                                key={x.abbreviation}
                              >
                                {x.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={3} lg={3} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          &nbsp;
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Year"
                          {...register(`certifications.${index}.issueYear`)}
                        >
                          {Year.map((x) => {
                            return (
                              <MenuItem value={x} key={x}>
                                {x}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={3} lg={3} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          Expiration Date
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(
                            `certifications.${index}.expirationMonth`
                          )}
                        >
                          {Month.map((x) => {
                            return (
                              <MenuItem
                                value={x.abbreviation}
                                key={x.abbreviation}
                              >
                                {x.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={3} lg={3} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          &nbsp;
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(
                            `certifications.${index}.expirationYear`
                          )}
                        >
                          {Year.map((x) => {
                            return (
                              <MenuItem value={x} key={x}>
                                {x}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>

                <Divider sx={{ my: 4, mx: 2 }}>
                  {`End of Certification ${index + 1}`}
                </Divider>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>

      <Box sx={{ px: 2 }}>
        <Button
          variant="outlined"
          color="warning"
          className="customActionBtn default"
          fullWidth
          startIcon={<AddIcon />}
          onClick={() =>
            append({
              certificationName: "",
              issueMonth: "",
              issueYear: null,
              expirationMonth: "",
              expirationYear: null,
            })
          }
        >
          Add New
        </Button>
      </Box>
    </>
  );
};

export default Certifications;
