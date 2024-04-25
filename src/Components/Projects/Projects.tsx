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

const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  projects: {
    title: string;
    description: string;
  }[];
};

const Projects = () => {
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "projects",
    control,
  });

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        title: "",
        description: "",
      });
    }
  }, [fields]);

  const handleEditorChange = ({ editor }: any, control: any) => {
    // setQuestion(encodedHtml);
    setValue(control, editor.getHTML().replace(/\s/g, "&nbsp;"), {
      shouldDirty: true,
      shouldTouch: true,
    });
  };

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
                </Box>
                <Divider sx={{ my: 4, mx: 2 }}>
                  {`End of Project ${index + 1}`}
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
              title: "",
              description: "",
            })
          }
        >
          Add New
        </Button>
      </Box>
    </>
  );
};

export default Projects;
