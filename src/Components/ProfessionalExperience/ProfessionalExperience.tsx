import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  // MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddIcon from "@mui/icons-material/Add";
import TipTapEditor from "../Common/Tiptap/TipTap";
import { useFormContext, useFieldArray } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import { Month } from "../../data/Month";
import FormValidationError from "../Common/FormValidationError/FormValidationError";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ResumeTemplateChoose from "../Common/ResumeTemplateChoose/ResumeTemplateChoose";
import useResumeDataContextProvider from "../../hooks/useResumeDataContextProvider";

const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  experience: {
    jobTitle: string | null;
    company: string | null;
    startMonth: string | null;
    startYear: number | null;
    endMonth: string | null;
    endYear: number | null;
    isCurrentJob: boolean | null;
    location: string | null;
    description: string | null;
  }[];
};

const ProfessionalExperience = () => {
  const {
    register,
    control,
    // setValue,
    getValues,
    // watch,
    // trigger,
    formState: { errors, dirtyFields },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "experience",
    control,
  });

  const { setResumeData } = useResumeDataContextProvider();

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        jobTitle: null,
        company: null,
        startMonth: null,
        startYear: null,
        endMonth: null,
        endYear: null,
        isCurrentJob: false,
        location: null,
        description: "",
      });
    }
  }, [fields]);

  const appendNew = () => {
    append({
      jobTitle: null,
      company: null,
      startMonth: null,
      startYear: null,
      endMonth: null,
      endYear: null,
      isCurrentJob: false,
      location: null,
      description: "",
    });
    setResumeData((prevData: any) => {
      return {
        ...prevData,
        experience: [
          ...prevData.experience,
          {
            jobTitle: "",
            company: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            isCurrentJob: false,
            location: "",
            description: "",
          },
        ],
      };
    });
  };

  const handleEditorChange = ({ editor }: any, control: any) => {
    const element = document.getElementsByName(control)[0];
    const nativeInputValueSetter = (Object as any).getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    let val: any = editor.getHTML().replace(/\s/g, "&nbsp;");
    nativeInputValueSetter.call(element, val);
    const event = new Event("change", { bubbles: true, cancelable: false });
    element.dispatchEvent(event);
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
            <Typography variant="h3">
              Tell us about your most recent job
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
                We’ll start there and work backward.
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
                        Job Title
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. SDE"
                        fullWidth
                        size="small"
                        {...register(`experience.${index}.jobTitle` as const, {
                          required: {
                            value: true,
                            message: "This field cannot be empty.",
                          },
                          pattern: {
                            value: /^[a-z\d\-_\s]+$/i,
                            message:
                              "Only Alphanumeric characters and spaces are allowed.",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.experience?.[index]?.jobTitle ? (
                                !errors?.experience?.[index]?.jobTitle ? (
                                  <TaskAltIcon color="success" />
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
                          errors?.experience?.[index]?.jobTitle?.message
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                      <InputLabel className="formControl-label">
                        Company
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. ABC Company"
                        fullWidth
                        size="small"
                        {...register(`experience.${index}.company` as const, {
                          required: {
                            value: true,
                            message: "This field cannot be empty.",
                          },
                          pattern: {
                            value: /^[a-z\d\-_\s]+$/i,
                            message:
                              "Only Alphanumeric characters and spaces are allowed.",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.experience?.[index]?.company ? (
                                !errors?.experience?.[index]?.company ? (
                                  <TaskAltIcon color="success" />
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
                          errors?.experience?.[index]?.company?.message
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
                        {...register(`experience.${index}.location` as const, {
                          pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "Only Alphabets are allowed.",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.experience?.[index]?.location ? (
                                !errors?.experience?.[index]?.location ? (
                                  getValues(`experience.${index}.location`) ? (
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
                          errors?.experience?.[index]?.location?.message
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ m: 2 }} className="formControl">
                  <Stack direction="column" gap={4}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 12, sm: 12, md: 12 }}
                    >
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          Start Date
                        </InputLabel>

                        <Select
                          fullWidth
                          native
                          placeholder="Month"
                          {...register(
                            `experience.${index}.startMonth` as const,
                            {
                              required: {
                                value: true,
                                message: "Start Month is required.",
                              },
                            }
                          )}
                        >
                          <option value="">Please Select</option>
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
                        <FormValidationError
                          errorText={
                            errors?.experience?.[index]?.startMonth?.message
                          }
                        />
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                {...register(
                                  `experience.${index}.isCurrentJob` as const
                                )}
                              />
                            }
                            label="Is your current Job"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          &nbsp;
                        </InputLabel>
                        <Select
                          native
                          fullWidth
                          placeholder="Month"
                          {...register(
                            `experience.${index}.startYear` as const,
                            {
                              required: {
                                value: true,
                                message: "Start Year is required.",
                              },
                            }
                          )}
                        >
                          <option value="">Please Select</option>
                          {Year.map((x) => {
                            return (
                              <option value={x} key={x}>
                                {x}
                              </option>
                            );
                          })}
                        </Select>
                        <FormValidationError
                          errorText={
                            errors?.experience?.[index]?.startYear?.message
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 12, sm: 12, md: 12 }}
                    >
                      {!getValues(`experience.${index}.isCurrentJob`) && (
                        <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                          <InputLabel className="formControl-label">
                            End Date
                          </InputLabel>
                          <Select
                            fullWidth
                            native
                            placeholder="Month"
                            {...register(
                              `experience.${index}.endMonth` as const,
                              {
                                required: {
                                  value: !getValues(
                                    `experience.${index}.isCurrentJob`
                                  ),
                                  message: "End Month is required.",
                                },
                              }
                            )}
                          >
                            <option value="">Please Select</option>
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
                          <FormValidationError
                            errorText={
                              errors?.experience?.[index]?.endMonth?.message
                            }
                          />
                        </Grid>
                      )}

                      {!getValues(`experience.${index}.isCurrentJob`) && (
                        <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                          <InputLabel className="formControl-label">
                            &nbsp;
                          </InputLabel>
                          <Select
                            fullWidth
                            native
                            placeholder="Year"
                            {...register(`experience.${index}.endYear`, {
                              required: {
                                value: !getValues(
                                  `experience.${index}.isCurrentJob`
                                ),
                                message: "End Year is required.",
                              },
                            })}
                          >
                            <option value="">Please Select</option>
                            {Year.map((x) => {
                              return (
                                <option value={x} key={x}>
                                  {x}
                                </option>
                              );
                            })}
                          </Select>
                          <FormValidationError
                            errorText={
                              errors?.experience?.[index]?.endYear?.message
                            }
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Stack>
                </Box>
                <Box sx={{ m: 2 }} className="formControl">
                  <InputLabel className="formControl-label">
                    Description
                  </InputLabel>

                  <TipTapEditor
                    placeHolder={"Write Poll Question Here"}
                    handleChange={(e: any) =>
                      handleEditorChange(e, `experience.${index}.description`)
                    }
                    handleEditorClick={() => {}}
                    handleEditorBlur={() => {}}
                    editable={true}
                    dataContext={field.description}
                    shouldUpdate={false}
                  />
                  <input
                    type="text"
                    {...register(`experience.${index}.description`)}
                  />
                </Box>
                <Divider sx={{ my: 4, mx: 2 }}>
                  {`End of Experience ${index + 1}`}
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

export default ProfessionalExperience;
