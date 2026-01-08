import { Box, Stack } from "@mui/material"
import Table from "./components/Table"
import Navbar from "./components/Navbar" 

 

function App() {
   
  return (
    <>
    <Navbar  />
    <Box  mt={8}>
       <Stack >
        <Table/>
     
       </Stack>
    </Box>
    </>
  )
}

export default App
