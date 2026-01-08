import * as React from 'react';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, Stack, styled, TableHead, Typography } from '@mui/material';
import Datas from './Datas';
import Navbar from './Navbar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



const StyledContainer = styled(TableContainer)({
width:"100%",
 borderRadius: '10px',
    maxHeight:500,background:"#c7a2a2ff",
    
})

const StyledTableCell = styled(TableCell)(({theme})=>({
  
    background:"#98c5a7ff",
    zIndex:0,'&:first-of-type': {
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px'
  },
  '&:last-of-type': {
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px'
  }

    
}))

const Cell = styled(TableCell)(({theme})=>({
 
 background:"white",
  
    
}));

 

  


const MuiTable = () => {
 const [searchTerm,setSearchTerm] = React.useState('');
 const [sort,setSort] = React.useState('');
 const [order,setOrder] = React.useState("asc");
 const [page, setPage] = React.useState(1);
 React.useEffect(()=>{
  setPage(1);
 },[sort,order])

 
   const filterData =  Datas.filter(row=>{
     return Object.values(row).join().toLowerCase().includes(searchTerm.toLowerCase());
     
   })
   
   const sortedData = React.useMemo(()=>{
     if(!sort) return filterData;
     
     return [...filterData].sort((a,b)=>{
       let valueA = a[sort];
       let valueB = b[sort];
       
       if(sort === "date"){
         valueA = new Date(valueA);
         valueB = new Date(valueB);
        }
        
        if(valueA<valueB) return order ==="asc"? -1:1;
        if(valueA>valueB) return order ==="asc"?1:-1;
        
        return 0;
      })
    },[filterData,sort,order])
    
    
    const TotalPost  = sortedData.length;
    const PostPerPage  = 8;
    const TotalPages  = Math.ceil(TotalPost/PostPerPage);
  
    const startIndex = (page-1) * PostPerPage;
    const endIndex = startIndex + PostPerPage;
    const currentData = sortedData.slice(startIndex,endIndex);
    
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (value) =>{
    setSearchTerm(value);
    setPage(1)
  }


  const handleOrder = ()=>{
    setOrder(pre=> pre==="asc"? "desc" : "asc")
  }



  return (
    <Box bgcolor={"#969090ff"}>
      <Navbar onSearch={handleSearch} />
      
      
  <StyledContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Cell>Name  </Cell>
            <Cell >Status</Cell>
            <Cell >Date </Cell>
            <Cell >Age </Cell>

          {/* sort section */}
            
          <Cell>
        <Stack direction={"row"}>
       <FormControl sx={{width:"150px"}} variant='outlined'>
        <InputLabel sx={{ top:-6}}  >Sortby
        </InputLabel>
        <Select label='sortby' id='select-input' sx={{height:"40px"}} value={sort} onChange={(e)=>setSort(e.target.value)}> 
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="age">Age</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
       </FormControl>
       <IconButton size='small' onClick={handleOrder} >{
order === "asc" ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
        }<Typography variant='body1'>{order}</Typography></IconButton>
        </Stack>

          </Cell>
 
          <Cell></Cell>
          </TableRow>



          <TableRow sx={{borderRadius:"8px"}} >
            <StyledTableCell>  Name  </StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
            <StyledTableCell >Date </StyledTableCell>
            <StyledTableCell >Age </StyledTableCell>
       
            <StyledTableCell ><Button variant='contained'>Actions</Button></StyledTableCell>
            <StyledTableCell ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentData.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
             {row.name}  
              </TableCell>
               
              <TableCell  ><Chip 
  label={row.status}
  color={
    row.status === "Active" ? "success" :
    row.status === "Pending" ? "warning" :
    row.status === "Inactive" ? "error" :
    "default"
  }
  sx={{
    color: "#fff",
    fontWeight: 500,
  }}
/></TableCell>
              <TableCell  >{row.date}</TableCell>
              <TableCell  >{row.age}</TableCell>
              <TableCell colSpan={1}>
                        <IconButton><EditSquareIcon/></IconButton>
                        <IconButton><DeleteIcon/></IconButton>
                        <Button  >View</Button>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledContainer>
    
     <Box display={"flex"}   justifyContent={"center"}>
      
    <Stack   spacing={2}>
      <Typography variant='caption'>Page: {page} of {TotalPages}</Typography>
      <Pagination count={TotalPages || 1} page={page} onChange={handleChange} />
    </Stack>
     </Box>
    </Box>
  )
}

export default MuiTable;