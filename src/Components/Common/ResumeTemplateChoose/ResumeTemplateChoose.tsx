import {
  Box,
  Button,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BootStrapDialog, {
  Content,
  Footer,
} from "../BootStrapDialog/BootStrapDialog";
import { templateData } from "../../../data/templateData";
import useResumeTemplateContextProvider from "../../../hooks/useResumeTemplateContextProvider";
const Template1 = React.lazy(() => import("../../ResumeTemplates/Template1"));
const Template2 = React.lazy(() => import("../../ResumeTemplates/Template2"));

const components = {
  Template1,
  Template2,
};

let ChosenTemplate: any = null;

const ResumeTemplateChoose = () => {
  const [update, setUpdate] = React.useState(false);
  const { activeTemplate, setActiveTemplate } =
    useResumeTemplateContextProvider();
  const [openTemplateChooseModal, setOpenTemplateChooseModal] =
    React.useState(false);

  const handleChooseTemplate = (templateName: string) => {
    setActiveTemplate(templateName);
  };

  React.useEffect(() => {
    ChosenTemplate = (components as any)[activeTemplate];
    setUpdate(true);
  }, [activeTemplate]);

  return (
    <Grid item xs={4} sx={{ mt: 10 }}>
      <Box
        sx={{
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "hidden",
          maxHeight: "340px",
          display: "flex",
          marginLeft: "auto",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            transform: "scale(0.494)",
            position: "relative",
            top: "-70px",
            width: "190%",
          }}
        >
          {ChosenTemplate && update && <ChosenTemplate />}
        </div>
      </Box>
      <Box sx={{ justifyContent: "center", display: "flex", mt: 4 }}>
        <Button
          variant="outlined"
          className="customActionBtn"
          onClick={() => setOpenTemplateChooseModal(true)}
        >
          Change Template
        </Button>
      </Box>

      <BootStrapDialog
        open={openTemplateChooseModal}
        setOpen={setOpenTemplateChooseModal}
        title="Choose From Templates"
      >
        <Content>
          <Container>
            <Box sx={{ display: "flex" }}>
              {templateData.map((item) => {
                const SpecificComponent = (components as any)[item.template];
                return (
                  <Box sx={{ maxWidth: 275 }} key={item.id}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} gutterBottom>
                        {item.template}
                      </Typography>
                      <Box
                        sx={{
                          border: "1px solid #ccc",
                          background: "#fff",
                          maxHeight: "340px",
                          display: "flex",
                          marginLeft: "auto",
                          justifyContent: "center",
                          overflowY: "auto",
                          overflowX: "hidden",
                        }}
                      >
                        <div
                          style={{
                            transform: "scale(0.494)",
                            position: "relative",
                            top: "-70px",
                            width: "190%",
                          }}
                        >
                          <SpecificComponent />
                        </div>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => handleChooseTemplate(item.template)}
                      >
                        Choose
                      </Button>
                    </CardActions>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Content>
        <Footer>
          <Button autoFocus onClick={() => setOpenTemplateChooseModal(false)}>
            Save changes
          </Button>
        </Footer>
      </BootStrapDialog>
    </Grid>
  );
};

export default ResumeTemplateChoose;
