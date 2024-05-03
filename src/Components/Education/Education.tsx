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
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { Month } from "../../data/Month";
import { Degree } from "../../data/degree";
import ResumeTemplateChoose from "../Common/ResumeTemplateChoose/ResumeTemplateChoose";
import useResumeDataContextProvider from "../../hooks/useResumeDataContextProvider";
import { DisabledByDefault } from "@mui/icons-material";
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
    CGPA: string;
  }[];
};

const Education = () => {
  const {
    register,
    control,
    getValues,
    formState: { errors, dirtyFields },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "education",
    control,
  });

  const { resumeData, setResumeData } = useResumeDataContextProvider();

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
        CGPA: "",
      });
    }
  }, [fields]);

  const appendNew = () => {
    append({
      institutionName: "",
      fieldOfStudy: "",
      degree: "",
      completionMonth: "",
      completionYear: null,
      location: "",
      CGPA: "",
    });
    setResumeData((prevData: any) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            institutionName: "",
            fieldOfStudy: "",
            degree: "",
            completionMonth: "",
            completionYear: null,
            location: "",
          },
        ],
      };
    });
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={8}>
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
                            pattern: {
                              value: /^[a-z\d\-_\s]+$/i,
                              message:
                                "Only Alphanumeric characters and spaces are allowed.",
                            },
                          }
                        )}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.education?.[index]
                                ?.institutionName ? (
                                !errors?.education?.[index]?.institutionName ? (
                                  getValues(
                                    `education.${index}.institutionName`
                                  ) ? (
                                    <TaskAltIcon color="success" />
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <ErrorOutlineIcon color="error" />
                                )
                              ) : (
                                <></>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormValidationError
                        errorText={
                          errors?.education?.[index]?.institutionName?.message
                        }
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
                            pattern: {
                              value: /^[a-z\d\-_\s]+$/i,
                              message:
                                "Only Alphanumeric characters and spaces are allowed.",
                            },
                          }
                        )}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.education?.[index]?.fieldOfStudy ? (
                                !errors?.education?.[index]?.fieldOfStudy ? (
                                  getValues(
                                    `education.${index}.fieldOfStudy`
                                  ) ? (
                                    <TaskAltIcon color="success" />
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <ErrorOutlineIcon color="error" />
                                )
                              ) : (
                                <></>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormValidationError
                        errorText={
                          errors?.education?.[index]?.fieldOfStudy?.message
                        }
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
                        {...register(`education.${index}.location` as const, {
                          pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "Only Alphabets are allowed.",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.education?.[index]?.location ? (
                                !errors?.education?.[index]?.location ? (
                                  getValues(`education.${index}.location`) ? (
                                    <TaskAltIcon color="success" />
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <ErrorOutlineIcon color="error" />
                                )
                              ) : (
                                <></>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormValidationError
                        errorText={
                          errors?.education?.[index]?.location?.message
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                      <InputLabel className="formControl-label">
                        CGPA
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. 9"
                        fullWidth
                        size="small"
                        {...register(`education.${index}.CGPA` as const, {
                          pattern: {
                            value: /^\d*(\.\d+)?$/,
                            message: "Only Numerics are allowed.",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.education?.[index]?.CGPA ? (
                                !errors?.education?.[index]?.CGPA ? (
                                  getValues(`education.${index}.CGPA`) ? (
                                    <TaskAltIcon color="success" />
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <ErrorOutlineIcon color="error" />
                                )
                              ) : (
                                <></>
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormValidationError
                        errorText={errors?.education?.[index]?.CGPA?.message}
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
                          native
                          placeholder="Month"
                          defaultValue={""}
                          {...register(`education.${index}.degree`)}
                        >
                          <option value={""}>Please Select</option>
                          {Degree.map((x) => {
                            return (
                              <option value={x.name} key={x.name}>
                                {x.name}
                              </option>
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
                          native
                          defaultValue={""}
                          placeholder="Month"
                          {...register(`education.${index}.completionMonth`)}
                        >
                          <option value={""} disabled>
                            {"Please Select"}
                          </option>
                          {Month.map((x) => {
                            return (
                              <option
                                value={x.abbreviation}
                                key={x.abbreviation}
                              >
                                {x.name}
                              </option>
                            );
                          })}
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          &nbsp;
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          placeholder="Month"
                          defaultValue={""}
                          {...register(`education.${index}.completionYear`)}
                        >
                          <option value={""} disabled>
                            {"Please Select"}
                          </option>
                          {Year.map((x) => {
                            return (
                              <option value={x} key={x}>
                                {x}
                              </option>
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
        <ResumeTemplateChoose />
      </Grid>

      <Box sx={{ px: 2 }}>
        <Button
          variant="outlined"
          color="warning"
          className="customActionBtn default"
          fullWidth
          startIcon={<AddIcon />}
          onClick={appendNew}
        >
          Add New
        </Button>
      </Box>
    </>
  );
};

export default Education;
