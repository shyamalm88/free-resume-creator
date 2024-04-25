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

import { Month } from "../../data/Month";
import { Degree } from "../../data/degree";
const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  education: {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    completionMonth: string;
    completionYear: number | null;
    location: string;
  }[];
};

const Education = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "education",
    control,
  });

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        institutionName: "",
        fieldOfStudy: "",
        degree: "",
        completionMonth: "",
        completionYear: null,
        location: "",
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
            <Typography variant="h3">Tell us about your Education</Typography>

            <Stack
              alignItems="center"
              direction="row"
              gap={2}
              alignContent={"center"}
              sx={{ bgcolor: "#f3f3f3", p: 1, pl: 1, mt: 2 }}
            >
              <InfoIcon fontSize="small" />
              <Typography variant="body1" component="div">
                Enter your education so far, even if you are a current student
                or did not graduate.
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
                    <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                      <InputLabel className="formControl-label">
                        Institution Name
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. ABC College"
                        fullWidth
                        size="small"
                        {...register(
                          `education.${index}.institutionName` as const,
                          {
                            required: true,
                          }
                        )}
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
                        Field Of Study
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. Computer Science"
                        fullWidth
                        size="small"
                        {...register(
                          `education.${index}.fieldOfStudy` as const,
                          {
                            required: true,
                          }
                        )}
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
                        Location
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. Bengaluru"
                        fullWidth
                        size="small"
                        {...register(`education.${index}.location`)}
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
                <Box sx={{ m: 2 }} className="formControl">
                  <Stack direction="row" gap={4}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 12, sm: 12, md: 12 }}
                    >
                      <Grid item xs={12} md={12} lg={12} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          Degree
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(`education.${index}.degree`)}
                        >
                          {Degree.map((x) => {
                            return (
                              <MenuItem value={x.name} key={x.name}>
                                {x.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 12, sm: 12, md: 12 }}
                    >
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          Completion Date
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(`education.${index}.completionMonth`)}
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
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          &nbsp;
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(`education.${index}.completionYear`)}
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
                  {`End of Education ${index + 1}`}
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
              institutionName: "",
              fieldOfStudy: "",
              degree: "",
              completionMonth: "",
              completionYear: null,
              location: "",
            })
          }
        >
          Add New
        </Button>
      </Box>
    </>
  );
};

export default Education;
