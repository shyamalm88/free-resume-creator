import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import he from "he";
import useResumeDataContextProvider from "../../hooks/useResumeDataContextProvider";

const Template1 = () => {
  const context = useResumeDataContextProvider();
  const [data, setData] = React.useState(context.resumeData);
  console.log(data);

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          <>
            {data.firstName} {data.middleName} {data.lastName}
          </>
        </Typography>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          gap={1}
          justifyContent="center"
        >
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", color: "#8d8d8d", fontSize: ".7rem" }}
          >
            <>{data.city}</>
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", color: "#8d8d8d", fontSize: ".7rem" }}
          >
            <>{data.country}</>
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", color: "#8d8d8d", fontSize: ".7rem" }}
          >
            <>{data.profession}</>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ whiteSpace: "nowrap" }}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            gap={1}
            justifyContent="center"
            flexWrap={"wrap"}
          >
            <Stack
              direction="row"
              gap={1}
              justifyContent="center"
              alignItems={"center"}
            >
              <StayPrimaryPortraitIcon
                fontSize="small"
                sx={{ fontSize: ".7rem" }}
              />
              <Typography
                variant="body1"
                component="small"
                sx={{
                  textAlign: "center",
                  fontSize: ".7rem",
                }}
              >
                <a href={`tel:${data.mobileNo}`}>
                  +91 <>{data.mobileNo}</>
                </a>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              gap={1}
              justifyContent="center"
              alignItems={"center"}
            >
              <EmailIcon fontSize="small" sx={{ fontSize: ".7rem" }} />
              <Typography
                variant="body1"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: ".7rem",
                }}
              >
                <a href={`mailto:${data.email}`}>{<>{data.email}</>}</a>
              </Typography>
            </Stack>
            {data.linkedin && (
              <Stack
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems={"center"}
              >
                <LinkedInIcon fontSize="small" sx={{ fontSize: ".7rem" }} />
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    textAlign: "center",
                    fontSize: ".7rem",
                  }}
                >
                  <a href={`${data.linkedin}`} target="_blank" rel="noreferrer">
                    <>{data.linkedin}</>
                  </a>
                </Typography>
              </Stack>
            )}
            {data.github && (
              <Stack
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems={"center"}
              >
                <GitHubIcon fontSize="small" sx={{ fontSize: ".7rem" }} />
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    textAlign: "center",
                    fontSize: ".7rem",
                  }}
                >
                  <a href={`${data.github}`} target="_blank" rel="noreferrer">
                    <>{data.github}</>
                  </a>
                </Typography>
              </Stack>
            )}
            {data.personalWebSite && (
              <Stack
                direction="row"
                gap={1}
                justifyContent="center"
                alignItems={"center"}
              >
                <LanguageIcon fontSize="small" sx={{ fontSize: ".7rem" }} />
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    textAlign: "center",
                    fontSize: ".7rem",
                  }}
                >
                  <a
                    href={`${data.personalWebSite}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <>{data.personalWebSite}</>
                  </a>
                </Typography>
              </Stack>
            )}
          </Stack>
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              About
            </Typography>
          </Divider>
          <Typography sx={{ fontSize: ".8rem" }} component="div">
            <div
              style={{ wordWrap: "break-word" }}
              dangerouslySetInnerHTML={{
                __html: data.summary
                  ? he.decode(data.summary?.[0].profileSummary)
                  : "",
              }}
            ></div>
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Skills
            </Typography>
          </Divider>
          <Box sx={{ mt: 2 }}>
            <Stack direction={"row"} gap={4} sx={{ mb: 1 }}>
              <Box
                sx={{
                  minWidth: "200px",
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Technical Skills:
                </Typography>
              </Box>
              <Box>
                <ul
                  style={{
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    columnGap: "20px",
                    fontSize: ".8rem",
                  }}
                >
                  {data.technicalSkills.map((item: any) => {
                    return <li>{item.label}</li>;
                  })}
                </ul>
              </Box>
            </Stack>
            <Stack direction={"row"} gap={4} sx={{ mb: 1 }}>
              <Box
                sx={{
                  minWidth: "200px",
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Soft Skills:
                </Typography>
              </Box>
              <Box>
                <ul
                  style={{
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    columnGap: "20px",
                    fontSize: ".8rem",
                  }}
                >
                  {data.softSkills.map((item: any) => {
                    return <li>{item.label}</li>;
                  })}
                </ul>
              </Box>
            </Stack>
            <Stack direction={"row"} gap={4}>
              <Box
                sx={{
                  minWidth: "200px",
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Tools:</Typography>
              </Box>
              <Box>
                <ul
                  style={{
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    columnGap: "20px",
                    fontSize: ".8rem",
                  }}
                >
                  {data.tools.map((item: any) => {
                    return <li>{item.label}</li>;
                  })}
                </ul>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Professional Experience
            </Typography>
          </Divider>
          {data.experience.map((item: any, index: number) => {
            return (
              <Box sx={{ mt: 2 }} key={index}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.jobTitle}
                  </Typography>
                  <Stack direction="column">
                    <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                      {item.location}
                    </Typography>
                    <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                      {item.startMonth}, {item.startYear} ‑{" "}
                      {`${
                        (item.isCurrentJob ? "Present" : item.endMonth,
                        item.endYear)
                      }`}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
                  variant="body1"
                  component="div"
                >
                  {item.company}
                </Typography>
                <div
                  style={{ fontSize: ".8rem", wordWrap: "break-word" }}
                  dangerouslySetInnerHTML={{
                    __html: item.description ? he.decode(item.description) : "",
                  }}
                ></div>
              </Box>
            );
          })}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Recent Projects
            </Typography>
          </Divider>
          {data.projects.map((item: any, index: number) => {
            return (
              <Box sx={{ mt: 1 }} key={index}>
                <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    my: 0.5,
                    fontSize: ".8rem",
                    color: "#747474",
                    mb: 1,
                  }}
                  variant="body1"
                  component="div"
                >
                  {item.subTitle}
                </Typography>
                <div
                  style={{ fontSize: ".8rem", wordWrap: "break-word" }}
                  dangerouslySetInnerHTML={{
                    __html: item.description ? he.decode(item.description) : "",
                  }}
                ></div>
              </Box>
            );
          })}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Certifications
            </Typography>
          </Divider>
          {data.certifications.map((item: any, index: number) => {
            return (
              <Box sx={{ mt: 1 }} key={index}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.certificationName}
                  </Typography>
                </Stack>

                <div style={{ fontSize: ".8rem" }}>
                  {item.issueMonth}, {item.issueYear} - {item.expirationMonth},{" "}
                  {item.expirationYear}
                </div>
              </Box>
            );
          })}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Education
            </Typography>
          </Divider>
          {data.education.map((item: any, index: number) => {
            return (
              <Box sx={{ mt: 1 }} key={index}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.institutionName}
                  </Typography>
                  <Stack direction="column">
                    <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                      {item.location}
                    </Typography>
                    <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                      {item.completionMonth} {item.completionYear}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
                  variant="body1"
                  component="div"
                >
                  {item.degree}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Template1;
