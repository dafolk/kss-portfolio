import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function Journey() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { amount: 0.2 });

  const timelines = [
    {
      time: "Late 2017",
      icon: <AccountBalanceIcon />,
      work: {
        header: "University",
        body: "studied Bachelor's Degree in Computer Science at University of Yangon",
      },
    },
    {
      time: "Mid 2018",
      icon: <CodeIcon />,
      work: {
        header: "Education",
        body: "studied 2 java courses at Gusto University",
      },
    },
    {
      time: "Early 2020",
      icon: <CoronavirusIcon />,
      work: {
        header: "Doomed",
        body: "Academic postponed due to COVID-19",
      },
    },
    {
      time: "Early 2021",
      icon: <PublicOffIcon />,
      work: {
        header: "CDM",
        body: "joined CDM due to Myanmar Military Coup",
      },
    },
    {
      time: "Early 2022",
      icon: <WorkIcon />,
      work: {
        header: "First Career",
        body: "Genix Pharma Myanmar",
      },
    },
    {
      time: "Late 2022",
      icon: <AutoStoriesIcon />,
      work: {
        header: "Education",
        body: "studied marketing management course at Strategy First University",
      },
    },
    {
      time: "Early 2023",
      icon: <CodeIcon />,
      work: {
        header: "Career Changed",
        body: "back to my dream career and started an internship as backend developer at Sabahna Technology",
      },
    },
    {
      time: "Mid 2023",
      icon: <LaptopMacIcon />,
      work: {
        header: "Real Career Started",
        body: "started working as a junior frontend developer at the same company",
      },
    },
    {
      time: "Late 2023",
      icon: <AccountBalanceIcon />,
      work: {
        header: "New University",
        body: "found a way to continue my Bachelor's Degree at UoPeople and joined Computer Science Program",
      },
    },
  ];

  return (
    <section id="journey">
      <Box
        ref={timelineRef}
        sx={{
          mt: "10vh",
          mb: "2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Typography variant="h4">Take a tour to my journey</Typography>
        <motion.div
          variants={{
            onscreen: { y: 0, opacity: 1 },
            offscreen: { y: 200, opacity: 0 },
          }}
          animate={isInView ? "onscreen" : "offscreen"}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <Timeline position="alternate">
            {timelines.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="primary.light"
                >
                  {item.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot sx={{ color: "secondary.main" }}>
                    {item.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {item.work.header}
                  </Typography>
                  <Typography>{item.work.body}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Box>
    </section>
  );
}
