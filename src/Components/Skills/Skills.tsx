import {
  Box,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  topTechnicalSkills,
  topSoftSkills,
  toolsSkills,
} from "../../data/technicalSkills";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { v4 as uuidv4 } from "uuid";
import InfoIcon from "@mui/icons-material/Info";

const filter = createFilterOptions<any>();
function Skills() {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const [technicalSkills, setTechnicalSkills] = React.useState<any>(
    getValues("technicalSkills")
  );
  const [softSkills, setSoftSkills] = React.useState<any>(
    getValues("softSkills")
  );
  const [tools, setTools] = React.useState<any>(getValues("tools"));

  React.useEffect(() => {
    setValue("technicalSkills", technicalSkills);
  }, [technicalSkills]);
  React.useEffect(() => {
    setValue("softSkills", softSkills);
  }, [softSkills]);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={8}>
        <Box sx={{ m: 2, mb: 4 }}>
          <Typography variant="h3">
            What skills would you like to highlight?
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
              We suggest including top leadership / soft skills and technical
              skills.
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ m: 2 }} className="formControl">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} md={12} lg={12} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">
                Technical Skills
              </InputLabel>
              <Autocomplete
                value={technicalSkills}
                multiple
                fullWidth
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.label
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      id: uuidv4(),
                      label: inputValue,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={topTechnicalSkills}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }
                  if ((option as any).inputValue) {
                    return (option as any).inputValue;
                  }
                  if ((option as any).label) {
                    return (option as any).label;
                  }
                  return option;
                }}
                onChange={(e: any, newValue: any) => {
                  if (typeof newValue === "string") {
                    setTechnicalSkills(newValue);
                  } else if (newValue && (newValue as any).inputValue) {
                    // Create a new value from the user input
                    setTechnicalSkills((newValue as any).inputValue);
                  } else {
                    setTechnicalSkills(newValue);
                  }
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.label}</li>
                )}
                freeSolo
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ m: 2 }} className="formControl">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} md={12} lg={12} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">
                Leadership Skills & Soft Skills
              </InputLabel>
              <Autocomplete
                value={softSkills}
                multiple
                fullWidth
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.label
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      id: uuidv4(),
                      label: inputValue,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={topSoftSkills}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }
                  if ((option as any).inputValue) {
                    return (option as any).inputValue;
                  }
                  if ((option as any).label) {
                    return (option as any).label;
                  }
                  return option;
                }}
                onChange={(e: any, newValue: any) => {
                  if (typeof newValue === "string") {
                    setSoftSkills(newValue);
                  } else if (newValue && (newValue as any).inputValue) {
                    // Create a new value from the user input
                    setSoftSkills((newValue as any).inputValue);
                  } else {
                    setSoftSkills(newValue);
                  }
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.label}</li>
                )}
                freeSolo
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ m: 2 }} className="formControl">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} md={12} lg={12} sx={{ p: 1 }}>
              <InputLabel className="formControl-label">Tools</InputLabel>
              <Autocomplete
                value={tools}
                multiple
                fullWidth
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some(
                    (option) => inputValue === option.label
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      id: uuidv4(),
                      label: inputValue,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={toolsSkills}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }
                  if ((option as any).inputValue) {
                    return (option as any).inputValue;
                  }
                  if ((option as any).label) {
                    return (option as any).label;
                  }
                  return option;
                }}
                onChange={(e: any, newValue: any) => {
                  if (typeof newValue === "string") {
                    setTools(newValue);
                  } else if (newValue && (newValue as any).inputValue) {
                    // Create a new value from the user input
                    setTools((newValue as any).inputValue);
                  } else {
                    setTools(newValue);
                  }
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.label}</li>
                )}
                freeSolo
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}

export default Skills;
