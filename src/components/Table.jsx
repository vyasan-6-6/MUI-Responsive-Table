import * as React from "react";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    Stack,
    styled,
    TableHead,
    Typography,
} from "@mui/material";
import Datas from "./Datas";
import Navbar from "./Navbar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const StyledContainer = styled(TableContainer)({
    width: "100%",
    borderRadius: 12,
    maxHeight: 500,
    background: "#ffffff",
    marginTop: 24,
    boxShadow: "0 6px 20px rgba(236,72,153,0.15)",
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    background: "#fdf2f8",
    fontWeight: 600,
    color: "#1f2937",
    borderBottom: "1px solid #fbcfe8",
}));

const Cell = styled(TableCell)(({ theme }) => ({
    background: "#ffffff",
    color: "#1f2937",
}));

const MuiTable = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [sort, setSort] = React.useState("");
    const [order, setOrder] = React.useState("asc");
    const [page, setPage] = React.useState(1);
    React.useEffect(() => {
        setPage(1);
    }, [sort, order]);
    
    React.useEffect(() => {
  if (page > TotalPages) {
    setPage(1);
  }
}, [TotalPages]);


    const filterData = React.useMemo(()=>{
      const term =  searchTerm.trim().toLowerCase();
      if(!term) return Datas;

      return Datas.filter(row=> 
        Object.values(row).join().toLowerCase().includes(term)
         
      )
    },[searchTerm])

    const sortedData = React.useMemo(() => {
        if (!sort) return filterData;

        return [...filterData].sort((a, b) => {
            let valueA = a[sort];
            let valueB = b[sort];

            if (sort === "date") {
                valueA = new Date(valueA);
                valueB = new Date(valueB);
            }

            if (valueA < valueB) return order === "asc" ? -1 : 1;
            if (valueA > valueB) return order === "asc" ? 1 : -1;

            return 0;
        });
    }, [filterData, sort, order]);

    const TotalPost = sortedData.length;
    const PostPerPage = 8;
    const TotalPages = Math.ceil(TotalPost / PostPerPage);

    const startIndex = (page - 1) * PostPerPage;
    const endIndex = startIndex + PostPerPage;
    const currentData = sortedData.slice(startIndex, endIndex);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSearch = (value) => {
        setSearchTerm(value.trim());
        setPage(1);
    };

    const handleOrder = () => {
        setOrder((pre) => (pre === "asc" ? "desc" : "asc"));
    };

    console.log({
        searchTerm,
        filtered: filterData.length,
        total: Datas.length,
        totalsort: sortedData.length,
    });

    return (
        <Box display={"flex"} justifyContent={"center"} px={2} bgcolor={"#fafafa"}>
            <Box width="100%" maxWidth={1400}>
                <Navbar onSearch={handleSearch} />

                <StyledContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow
                                sx={{
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 2,
                                    backgroundColor: "#fdf2f8",
                                }}
                            >
                                <StyledTableCell>Name </StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell>Date </StyledTableCell>
                                <StyledTableCell>Age </StyledTableCell>

                                {/* sort section */}

                                <StyledTableCell>
                                    <Stack direction={"row"}>
                                        <FormControl sx={{ width: "150px" }} variant="outlined">
                                            <InputLabel sx={{ top: -6 }}>Sortby</InputLabel>
                                            <Select
                                                label="sortby"
                                                id="select-input"
                                                sx={{ height: "40px" }}
                                                value={sort}
                                                onChange={(e) => setSort(e.target.value)}
                                            >
                                                <MenuItem value="name">Name</MenuItem>
                                                <MenuItem value="age">Age</MenuItem>
                                                <MenuItem value="date">Date</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <IconButton size="small" onClick={handleOrder}>
                                            {order === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                            <Typography variant="body1">{order}</Typography>
                                        </IconButton>
                                    </Stack>
                                </StyledTableCell>
                            </TableRow>

                            <TableRow sx={{ borderRadius: "8px" }}>
                                <Cell> Name </Cell>
                                <Cell>Status</Cell>
                                <Cell>Date </Cell>
                                <Cell>Age </Cell>

                                <Cell>
                                    <Typography fontWeight={600} color="#6b7280">
                                        Actions
                                    </Typography>
                                </Cell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentData.map((row, index) => (
                                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>

                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            color={
                                                row.status === "Active"
                                                    ? "success"
                                                    : row.status === "Pending"
                                                    ? "warning"
                                                    : row.status === "Inactive"
                                                    ? "error"
                                                    : "default"
                                            }
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 500,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell colSpan={1}>
                                        <IconButton
                                            sx={{
                                                color: "#ec4899",
                                                "&:hover": { backgroundColor: "#fdf2f8" },
                                            }}
                                        >
                                            <EditSquareIcon />
                                        </IconButton>

                                        <IconButton
                                            sx={{
                                                color: "#ef4444",
                                                "&:hover": { backgroundColor: "#fee2e2" },
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>

                                        <Button
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                borderColor: "#f9a8d4",
                                                color: "#ec4899",
                                                textTransform: "none",
                                                "&:hover": {
                                                    borderColor: "#ec4899",
                                                    backgroundColor: "#fdf2f8",
                                                },
                                            }}
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledContainer>
                <Box display="flex" justifyContent="center" mt={2}>
                    <Stack spacing={1} alignItems="center">
                        <Typography variant="caption" color="text.secondary">
                            Page {page} of {TotalPages}
                        </Typography>

                        <Pagination
                            count={TotalPages || 1}
                            page={page}
                            onChange={handleChange}
                            sx={{
                                "& .Mui-selected": {
                                    backgroundColor: "#ec4899 !important",
                                    color: "#fff",
                                },
                                "& .MuiPaginationItem-root:hover": {
                                    backgroundColor: "#fdf2f8",
                                },
                            }}
                        />
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default MuiTable;
