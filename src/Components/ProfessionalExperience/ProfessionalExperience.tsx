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
  MenuItem,
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
const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  experience: {
    jobTitle: string;
    company: string;
    startMonth: string;
    startYear: number | null;
    endMonth: string;
    endYear: number | null;
    isCurrentJob: boolean;
    location: string;
    description: string;
  }[];
};

const ProfessionalExperience = () => {
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "experience",
    control,
  });

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        jobTitle: "",
        company: "",
        startMonth: "",
        startYear: null,
        endMonth: "",
        endYear: null,
        isCurrentJob: false,
        location: "",
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
                        Company
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. ABC Company"
                        fullWidth
                        size="small"
                        {...register(`experience.${index}.company` as const, {
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
                        Location
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. Bengaluru"
                        fullWidth
                        size="small"
                        {...register(`experience.${index}.location`)}
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
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          Start Date
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(`experience.${index}.startMonth`)}
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
                          fullWidth
                          placeholder="Month"
                          {...register(`experience.${index}.startYear`)}
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
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 12, sm: 12, md: 12 }}
                    >
                      <Grid item xs={12} md={6} lg={6} sx={{ p: 1 }}>
                        <InputLabel className="formControl-label">
                          End Date
                        </InputLabel>
                        <Select
                          fullWidth
                          placeholder="Month"
                          {...register(`experience.${index}.endMonth`)}
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
                          {...register(`experience.${index}.endYear`)}
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
                </Box>
                <Divider sx={{ my: 4, mx: 2 }}>
                  {`End of Experience ${index + 1}`}
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
              jobTitle: "",
              company: "",
              startMonth: "",
              startYear: null,
              endMonth: "",
              endYear: null,
              isCurrentJob: false,
              location: "",
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

export default ProfessionalExperience;
