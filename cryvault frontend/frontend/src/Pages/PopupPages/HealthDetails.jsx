import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControlLabel, FormControl, Paper, CssBaseline } from '@mui/material';

const questions = [
  "Do you have or have a history of any medical condition that could affect the collection or use of the stem cells such as, Cancer, Diabetes, Hepatitis, Blood Disease, Bleeding Problem, Heart Disease, Drug or Alcohol abuse, HIV/AIDS or positive test for the HIV/AIDS virus, HTLV, Malaria, Hepatitis? Stroke, Seizure or Multiple Sclerosis, Lung Disease, Kidney Disease, Liver Disease, Babesiosis, Genetic Disorder?",
  "Do you currently have or are you being treated for any type of infection?",
  "Do you have, or have a family history of Dementia, Degenerative or Neurological Disease, or Creutzfeldt-Jakob Disease?",
  "In the past 6 months, have you received a bite from an animal suspected of Rabies or taken any vaccinations (shots) for the same?",
  "Have you been treated for a sexually transmitted disease in the last 12 months?",
  "In the past 12 months, have you had any immunisations, tattoos, body piercing, an accidental needle-prick, or come into contact with someone's blood, open wound, or small pox vaccination site and/or bandage?",
  "In the past 12 months, have you been in juvenile detention, lock-up, jail or prison for more than 72 hours?",
  "In the past 12 months, have you lived with a person who has Hepatitis?",
  "Have you in the past 5 years received compensation for sex?",
  "Have you ever received whole blood, blood factor products, blood derivatives, growth hormones, bone or skin graft, or a tissue, organ (either human or animal), dura mater or bone marrow transplantation?",
  "Have You In the Past 12 Months Had Intimate Contact with who has HIV/AIDS or Hepatitis B/C?",
];

const HealthDetails = () => {
  return (
    <Container component="main">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Health History Questionnaire
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          (Genetic Mother)
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="center">Yes</TableCell>
                <TableCell align="center">No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((question, index) => (
                <TableRow key={index}>
                  <TableCell>{question}</TableCell>
                  <TableCell colSpan={2} align="center">
                    <FormControl component="fieldset">
                      <RadioGroup row aria-label={`question${index}`} name={`question${index}`}>
                        <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default HealthDetails;
