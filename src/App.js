import Graphs from './components/Graphs';
import Maps from './components/Maps';
import { Box,InputLabel,MenuItem, Select } from '@mui/material';
import './App.css';
import useStore from './StoreManager';


function App() {
  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  const handleChange = useStore((state) => state.changeState)
  const stat = useStore((state) => state.states)
  const handler =(event)=>{
    
    handleChange(event.target.value)
  }  
  return (
      <Box className="bg-container">
        <header>
          <center>
          <InputLabel id="selector">Select State</InputLabel>
  
  <Select
    labelId="selector"
    id="states"
    label="select state"
    value={stat}
    onChange={handler}
    className='selector'
  >{statesInIndia.map((each)=>
    <MenuItem value={each} id={each} key={each}>{each}</MenuItem>
  )}
    
  </Select>
          </center>
        </header>
        <div className='rowContainer'>
          <Graphs />
          <Maps />
        </div>
        
        <footer>
          <center>
            <h1>GCRS</h1>
          </center>
        </footer>
        </Box>
  );
}

export default App;
