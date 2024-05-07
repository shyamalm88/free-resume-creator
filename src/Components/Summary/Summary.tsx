import React, { Suspense } from "react";
import { Box, Grid, InputLabel, Stack, Typography } from "@mui/material";
import TipTapEditor from "../Common/Tiptap/TipTap";
import { useFormContext, useFieldArray } from "react-hook-form";
import InfoIcon from "@mui/icons-material/Info";
import ResumeTemplateChoose from "../Common/ResumeTemplateChoose/ResumeTemplateChoose";

const Year: any[] = [];
const nowYear = new Date().getFullYear();
for (let i = nowYear; i > nowYear - 60; i--) {
  Year.push(i);
}

type FormValues = {
  summary: {
    profileSummary: string;
  }[];
};

const Summary = () => {
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "summary",
    control,
  });

  React.useEffect(() => {
    console.log(fields);
    if (fields.length === 0) {
      remove(0);
      append({
        profileSummary: "",
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
              At the forefront of my resume, I present a succinct showcase of my
              skills, achievements, and qualifications tailored to excel in the
              role at hand.
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
                Your summary shows employers you’re right for their job.
              </Typography>
            </Stack>
          </Box>
          {fields.map((field, index) => {
            return (
              <React.Fragment key={index}>
                <Box sx={{ m: 2 }} className="formControl">
                  <InputLabel className="formControl-label">
                    Description
                  </InputLabel>
                  <TipTapEditor
                    placeHolder={"Write Poll Question Here"}
                    handleChange={(e: any) =>
                      handleEditorChange(e, `summary.${index}.profileSummary`)
                    }
                    handleEditorClick={() => {}}
                    handleEditorBlur={() => {}}
                    editable={true}
                    dataContext={field.profileSummary}
                    shouldUpdate={false}
                  />
                  <input
                    type="text"
                    {...register(`summary.${index}.profileSummary`)}
                  />
                </Box>
              </React.Fragment>
            );
          })}
        </Grid>
        <ResumeTemplateChoose />
      </Grid>
    </>
  );
};

export default Summary;
