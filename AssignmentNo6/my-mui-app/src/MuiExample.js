import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Select, MenuItem,
  FormControl, InputLabel, RadioGroup, FormControlLabel,
  Radio, FormHelperText, Slider, Switch
} from '@mui/material';

const styles = {
  container: {
    maxWidth: 600,
    margin: '50px auto',
    padding: 30,
    backgroundColor: '#e3f2fd',
    borderRadius: 12,
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    // Removed fixed height and overflow
  },
  heading: {
    textAlign: 'center',
    marginBottom: 28,
    color: '#0d47a1',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 25,
  },
  formControlHalf: {
    flex: 1,
  },
  button: {
    marginTop: 20,
  }
};

const RegistrationForm = () => {
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [error, setError] = useState({ gender: false, role: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = { gender: !gender, role: !role };
    setError(newError);
    if (!newError.gender && !newError.role) alert('Registration Successful');
  };

  return (
    <Box style={styles.container} component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" style={styles.heading}>Student Registration</Typography>

      <Box style={styles.formRow}>
        <TextField label="Full Name" variant="outlined" style={styles.formControlHalf} required />
        <TextField label="Email" variant="outlined" style={styles.formControlHalf} type="email" required />
      </Box>

      <Box style={styles.formRow}>
        <FormControl component="fieldset" style={styles.formControlHalf} error={error.gender} required>
          <Typography variant="subtitle1" gutterBottom>Gender</Typography>
          <RadioGroup row value={gender} onChange={e => setGender(e.target.value)} name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          {error.gender && <FormHelperText>Please select your gender</FormHelperText>}
        </FormControl>

        <FormControl variant="outlined" style={styles.formControlHalf} error={error.role} required>
          <InputLabel id="role-label">Role</InputLabel>
          <Select labelId="role-label" value={role} onChange={e => setRole(e.target.value)} label="Role">
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          {error.role && <FormHelperText>Please select your role</FormHelperText>}
        </FormControl>
      </Box>

      <Typography gutterBottom>Experience Level</Typography>
      <Slider
        value={sliderValue}
        onChange={(e, val) => setSliderValue(val)}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        style={{ marginBottom: 25 }}
      />

      <FormControlLabel
        control={<Switch checked={subscribe} onChange={() => setSubscribe(!subscribe)} color="primary" />}
        label="Subscribe to newsletter"
        style={{ marginBottom: 25 }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth style={styles.button}>
        Register
      </Button>
    </Box>
  );
};

export default RegistrationForm;
