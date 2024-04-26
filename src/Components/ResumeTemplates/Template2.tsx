import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Template2 = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          John Doe
        </Typography>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          gap={1}
          justifyContent="flex-start"
        >
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", color: "#8d8d8d", fontSize: ".7rem" }}
          >
            Bengalore
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", color: "#8d8d8d", fontSize: ".7rem" }}
          >
            India
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center", color: "#8d8d8d", fontSize: ".7rem" }}
          >
            FullStack Developer
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ whiteSpace: "nowrap" }}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            gap={1}
            justifyContent="flex-start"
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
                <a href="tel:9874049546">+91 9874049546</a>
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
                <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
              </Typography>
            </Stack>
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
                <a href="https://www.linkedin.com/in/xxx-xxx" target="_blank">
                  https://www.linkedin.com/in/xxx-xxx
                </a>
              </Typography>
            </Stack>
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
                <a href="https://www.linkedin.com/in/xxx-xxx" target="_blank">
                  https://www.github.com/xxx-xxx
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before": {
                width: "0%",
              },
              ".MuiDivider-wrapper": {
                background: "#e7e7e7",
              },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              About
            </Typography>
          </Divider>
          <Typography sx={{ fontSize: ".8rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            impedit pariatur officia eos eius consequuntur cupiditate velit
            sint, soluta quos veniam praesentium, ullam ex veritatis eveniet!
            Sint, sequi quod.
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before": {
                width: "0%",
              },
              ".MuiDivider-wrapper": {
                background: "#e7e7e7",
              },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Professional Experience
            </Typography>
          </Divider>
          <Box sx={{ mt: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Software Development Engineer III
              </Typography>
              <Stack direction="column">
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  Bengalore
                </Typography>
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  April 2023 ‑ Present
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
              variant="body1"
              component="div"
            >
              Company Name
            </Typography>
            <div style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
              impedit pariatur officia eos eius consequuntur cupiditate velit
              sint, soluta quos veniam praesentium, ullam ex veritatis eveniet!
              Sint, sequi quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio odit impedit pariatur officia eos eius
              consequuntur cupiditate velit sint, soluta quos veniam
              praesentium, ullam ex veritatis eveniet! Sint, sequi quod.
            </div>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Software Development Engineer II
              </Typography>
              <Stack direction="column">
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  Bengalore
                </Typography>
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  April 2023 ‑ Present
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
              variant="body1"
              component="div"
            >
              Company Name
            </Typography>
            <div style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
              impedit pariatur officia eos eius consequuntur cupiditate velit
              sint, soluta quos veniam praesentium, ullam ex veritatis eveniet!
              Sint, sequi quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio odit impedit pariatur officia eos eius
              consequuntur cupiditate velit sint, soluta quos veniam
              praesentium, ullam ex veritatis eveniet! Sint, sequi quod.
            </div>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Software Development Engineer
              </Typography>
              <Stack direction="column">
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  Bengalore
                </Typography>
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  April 2023 ‑ Present
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
              variant="body1"
              component="div"
            >
              Company Name
            </Typography>
            <div style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
              impedit pariatur officia eos eius consequuntur cupiditate velit
              sint, soluta quos veniam praesentium, ullam ex veritatis eveniet!
              Sint, sequi quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio odit impedit pariatur officia eos eius
              consequuntur cupiditate velit sint, soluta quos veniam
              praesentium, ullam ex veritatis eveniet! Sint, sequi quod.
            </div>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before": {
                width: "0%",
              },
              ".MuiDivider-wrapper": {
                background: "#e7e7e7",
              },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Skills
            </Typography>
          </Divider>
          <Box sx={{ mt: 2 }}>
            <Stack direction={"row"} gap={4} sx={{ mb: 1 }}>
              <Box
                sx={{
                  width: "200px",
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
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                </ul>
              </Box>
            </Stack>
            <Stack direction={"row"} gap={4} sx={{ mb: 1 }}>
              <Box
                sx={{
                  width: "200px",
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
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                </ul>
              </Box>
            </Stack>
            <Stack direction={"row"} gap={4}>
              <Box
                sx={{
                  width: "200px",
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
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                  <li>Lorem ipsum dolor sit,</li>
                </ul>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before": {
                width: "0%",
              },
              ".MuiDivider-wrapper": {
                background: "#e7e7e7",
              },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Recent Projects
            </Typography>
          </Divider>
          <Box sx={{ mt: 1 }}>
            <Typography sx={{ fontWeight: "bold", mt: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <div style={{ fontSize: ".8rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
              impedit pariatur officia eos eius consequuntur cupiditate velit
              sint, soluta quos veniam praesentium, ullam ex veritatis eveniet!
              Sint, sequi quod. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odio odit impedit pariatur officia eos eius
              consequuntur cupiditate velit sint, soluta quos veniam
              praesentium, ullam ex veritatis eveniet! Sint, sequi quod.
            </div>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before": {
                width: "0%",
              },
              ".MuiDivider-wrapper": {
                background: "#e7e7e7",
              },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Certifications
            </Typography>
          </Divider>
          <Box sx={{ mt: 1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>AZ-900</Typography>
            </Stack>
            <Typography
              sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
              variant="body1"
              component="div"
            >
              Microsoft Azure Fundamentals
            </Typography>
            <div style={{ fontSize: ".8rem" }}>2022 - Present</div>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ mt: 2 }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before": {
                width: "0%",
              },
              ".MuiDivider-wrapper": {
                background: "#e7e7e7",
              },
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Education
            </Typography>
          </Divider>
          <Box sx={{ mt: 1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Institution Name
              </Typography>
              <Stack direction="column">
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  Bengalore
                </Typography>
                <Typography sx={{ fontSize: ".7rem", color: "#8d8d8d" }}>
                  April 2009 ‑ May 2012
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{ my: 0.5, fontSize: ".8rem", color: "#747474", mb: 1 }}
              variant="body1"
              component="div"
            >
              B.Tech
            </Typography>
            <div style={{ fontSize: ".8rem" }}>
              CGPA: <em>9.02%</em>
            </div>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Template2;
