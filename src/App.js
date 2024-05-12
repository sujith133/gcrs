import Graphs from './components/Graphs';
import Maps from './components/Maps';
import { Box,Button,InputLabel,MenuItem, Select, Typography } from '@mui/material';
import './App.css';
import useStore from './StoreManager';


function App() {
  const osmChanged=useStore((state) => state.changeOsm)
  const isOsm=useStore((state) => state.isOsm)
  const layerChanged=useStore((state) => state.layerChanged)
  const isAdded=useStore((state) => state.isAdded)
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
    "West Bengal",
    "india"
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
          <div className='rowContainer'>
            <div>
            <InputLabel id="selector">Select State</InputLabel>  
          <Select
            labelId="selector"
            id="states"
            label="select state"
            value={stat}
            onChange={handler}
            placeholder='select state'
            className='selector'
          >{statesInIndia.map((each)=>
            <MenuItem value={each} id={each} key={each}>{each}</MenuItem>
          )}
          
          </Select>

            </div>
          <Button type='button' variant='contained' className='changeButton' onClick={()=>osmChanged()}><Typography variant='p'>{isOsm?'Switch to OSM':'Switch to XYZ'}</Typography></Button>
          <Button type='button' variant='contained' className='addButton'  onClick={()=>layerChanged()}><Typography variant='p'>{isAdded?'remove':'add'}</Typography></Button>

          </div>

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
