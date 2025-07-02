import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from '@mui/material';
import {
  FaGraduationCap,
  FaLink,
  FaTrophy,
  FaChalkboardTeacher,
  FaUniversity
} from 'react-icons/fa';
import { AiOutlineDownload, AiOutlineUsergroupAdd } from 'react-icons/ai';
import CloseIcon from '@mui/icons-material/Close';
import KazimImg from '../assets/images/Kazim.jpeg';
import KazimCV from '../assets/docs/Muhammad_Kazim_CV.pdf';
import MeritCertificate from '../assets/docs/Merit_Certificate.pdf';

const SectionCard = ({ children }) => (
  <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
    {children}
  </Paper>
);

const About = () => {
  const [openCertificate, setOpenCertificate] = useState(false);
  const handleOpenCertificate = () => setOpenCertificate(true);
  const handleCloseCertificate = () => setOpenCertificate(false);

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6 }, maxWidth: 1000, margin: '0 auto' }}>
      {/* Header */}
      <SectionCard>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Avatar
            alt="Muhammad Kazim"
            src={KazimImg}
            sx={{ width: 120, height: 120 }}
          />
          <Box>
            <Typography variant="h4" fontWeight="bold">About Me</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
            I'm <strong>Muhammad Kazim</strong>, a data scientist and Ph.D. candidate in Industrial and Manufacturing Engineering at North Dakota State University, graduating in Summer 2025. My research lies at the convergence of <strong>multilayer network theory and machine learning</strong>, with a focus on enhancing the resilience and intelligence of complex systems. I develop graph-based models—particularly using <strong>Graph Neural Networks (GNNs)</strong>—to address challenges in <strong>energy systems, biomedical informatics, infrastructure modeling, and cybersecurity</strong>. My work bridges disciplines to advance sustainable, data-driven solutions for critical networks.
            </Typography>
            <Button
              href={KazimCV}
              download="Muhammad_Kazim_CV.pdf"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              startIcon={<AiOutlineDownload />}
            >
              Download CV (PDF)
            </Button>
          </Box>
        </Box>
      </SectionCard>

      {/* Academic Timeline */}
      <SectionCard>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          <FaGraduationCap style={{ marginRight: 8 }} /> Academic Timeline
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><FaGraduationCap /></ListItemIcon>
            <ListItemText primary="Ph.D. Industrial and Manufacturing Engineering – NDSU (2022–2025)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><FaGraduationCap /></ListItemIcon>
            <ListItemText primary="MS Computer Science – Abasyn University (2015–2017)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><FaGraduationCap /></ListItemIcon>
            <ListItemText primary="MSc Computer Science – University of the Malakand (2011–2013)" />
          </ListItem>
        </List>
      </SectionCard>

      {/* Affiliations */}
      <SectionCard>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          <AiOutlineUsergroupAdd style={{ marginRight: 8 }} /> Affiliations
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <FaUniversity />
            </ListItemIcon>
            <ListItemText
              primary="Artificial Intelligence on SUSTainable Energy Infrastructure Network (AI-SUSTEIN)"
              secondary={
                <Link
                  href="https://www.aisustein.com/students"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  https://www.aisustein.com/students
                </Link>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <FaUniversity />
            </ListItemIcon>
            <ListItemText
              primary="CELL Lab – NDSU"
              secondary={
                <Link
                  href="https://www.ndsu.edu/labs/cell/we_are"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  https://www.ndsu.edu/labs/cell/we_are
                </Link>
              }
            />
          </ListItem>
        </List>
      </SectionCard>

      {/* HEC Scholarship */}
      <SectionCard>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          <FaLink style={{ marginRight: 8 }} /> HEC US–Pakistan Knowledge Corridor Scholarship
        </Typography>
        <Typography variant="body1">
          Selected for the prestigious HEC US–Pakistan Knowledge Corridor PhD program—a fully funded scholarship supporting study at a Top‑50 QS‑ranked U.S. university. Benefits included full tuition, annual stipend (~USD 19,200), health insurance, airfare, and relocation support. Recipients commit to returning to Pakistan after graduation.{' '}
          <Link href="https://www.hec.gov.pk/english/scholarshipsgrants/us-pakcorridor/pages/default.aspx" target="_blank" rel="noopener noreferrer">
            Learn more
          </Link>
        </Typography>
      </SectionCard>

      {/* Awards & Recognitions */}
      <SectionCard>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          <FaTrophy style={{ marginRight: 8 }} /> Awards & Recognitions
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon><FaTrophy /></ListItemIcon>
            <ListItemText
              primary="Gold Medalist – Academic Excellence (University of Malakand)"
              secondary={
                <Link
                  component="button"
                  underline="hover"
                  onClick={handleOpenCertificate}
                >
                  View Merit Certificate
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon><FaTrophy /></ListItemIcon>
            <ListItemText primary="NSF/USDA-Supported Research Scholar" />
          </ListItem>
          <ListItem>
            <ListItemIcon><FaLink /></ListItemIcon>
            <ListItemText primary="Research contributor in AI for power systems & biomedical analytics" />
          </ListItem>
        </List>
      </SectionCard>

      {/* Conferences */}
      <SectionCard>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          <FaChalkboardTeacher style={{ marginRight: 8 }} /> Conferences & Presentations
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="AI SUSTEIN Annual Meeting – University of Arkansas, 2023" />
          </ListItem>
          <ListItem>
            <ListItemText primary="AI SUSTEIN Annual Meeting – University of Las Vegas, 2024" />
          </ListItem>
          <ListItem>
            <ListItemText primary="IMECE 2024 – Portland, Oregon" />
          </ListItem>
        </List>
      </SectionCard>

      {/* Certificate Modal */}
      <Dialog open={openCertificate} onClose={handleCloseCertificate} fullWidth maxWidth="md">
        <DialogTitle>
          Merit Certificate
          <IconButton
            aria-label="close"
            onClick={handleCloseCertificate}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <iframe
            src={MeritCertificate}
            title="Merit Certificate"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default About;
