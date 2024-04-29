import React, { Suspense } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddIcon from "@mui/icons-material/Add";
import TipTapEditor from "../Common/Tiptap/TipTap";
import { useFormContext, useFieldArray } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FormValidationError from "../Common/FormValidationError/FormValidationError";
import ResumeTemplateChoose from "../Common/ResumeTemplateChoose/ResumeTemplateChoose";
import useResumeDataContextProvider from "../../hooks/useResumeDataContextProvider";

const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  projects: {
    title: string | null;
    subTitle: string | null;
    description: string;
  }[];
};

const Projects = () => {
  const {
    register,
    setValue,
    control,
    getValues,
    formState: { errors, dirtyFields },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "projects",
    control,
  });

  const { resumeData, setResumeData } = useResumeDataContextProvider();

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        title: null,
        subTitle: null,
        description: "",
      });
    }
  }, [fields]);

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

  const appendNew = () => {
    append({
      title: null,
      subTitle: null,
      description: "",
    });
    setResumeData((prevData: any) => {
      return {
        ...prevData,
        projects: [
          ...prevData.projects,
          {
            title: "",
            subTitle: "",
            description: "",
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
            <Typography variant="h3">
              Share with us some of the projects you've found most challenging
              or those you take the most pride in.
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
                        Project Title
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. Project XYZ"
                        fullWidth
                        size="small"
                        {...register(`projects.${index}.title` as const, {
                          pattern: {
                            value: /^[a-z\d\-_\s]+$/i,
                            message:
                              "Only Alphanumeric characters and spaces are allowed.",
                          },
                          minLength: {
                            value: 2,
                            message: "Please Provide Project Name",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.projects?.[index]?.title ? (
                                !errors?.projects?.[index]?.title ? (
                                  getValues(`projects.${index}.title`) ? (
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
                        errorText={errors?.projects?.[index]?.title?.message}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                      <InputLabel className="formControl-label">
                        Project Subtitle
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. Project XYZ"
                        fullWidth
                        size="small"
                        {...register(`projects.${index}.subTitle` as const, {
                          pattern: {
                            value: /^[a-z\d\-_\s]+$/i,
                            message:
                              "Only Alphanumeric characters and spaces are allowed.",
                          },
                          minLength: {
                            value: 2,
                            message: "Please Provide Project Name",
                          },
                        })}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {dirtyFields?.projects?.[index]?.subTitle ? (
                                !errors?.projects?.[index]?.subTitle ? (
                                  getValues(`projects.${index}.subTitle`) ? (
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
                        errorText={errors?.projects?.[index]?.subTitle?.message}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ m: 2 }} className="formControl">
                  <InputLabel className="formControl-label">
                    Description
                  </InputLabel>
                  <TipTapEditor
                    placeHolder={"Write Poll Question Here"}
                    handleChange={(e: any) =>
                      handleEditorChange(e, `projects.${index}.description`)
                    }
                    handleEditorClick={() => {}}
                    handleEditorBlur={() => {}}
                    editable={true}
                    dataContext={field.description}
                    shouldUpdate={false}
                  />
                  <input
                    type="text"
                    {...register(`projects.${index}.description`)}
                  />
                </Box>
                <Divider sx={{ my: 4, mx: 2 }}>
                  {`End of Project ${index + 1}`}
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

export default Projects;
