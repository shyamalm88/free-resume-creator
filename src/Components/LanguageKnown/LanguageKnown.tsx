import React from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddIcon from "@mui/icons-material/Add";
import { useFormContext, useFieldArray } from "react-hook-form";

const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  language: {
    languageKnown: string;
  }[];
};

const LanguageKnown = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "language",
    control,
  });

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        languageKnown: "",
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
              Tell us about your Fluency in which Languages
            </Typography>
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
                        Fluent in Language
                      </InputLabel>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="e.g. English "
                        fullWidth
                        size="small"
                        {...register(
                          `language.${index}.languageKnown` as const,
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
                  </Grid>
                </Box>
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
              languageKnown: "",
            })
          }
        >
          Add New
        </Button>
      </Box>
    </>
  );
};

export default LanguageKnown;
