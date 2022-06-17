import Header from "../components/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import PatientCard from "../components/PatientCard";
import Footer from "../components/Footer";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BrowserSort from "../components/BrowserSort";




const theme = createTheme({
  palette: {
    primary: {
      main: '#2596be', 
    },
    secondary: {

      main: '#002639',
     
    },
    terciary: {
    
      main: "#7f7f7f",
     
    },
    quaternary: {  
      main: '#ffffff',
     
    },
  }
});

export default function Browser(){

  const [data, setData ] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [itemsPerPage, setItemsPage] = useState(2)
  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  
   useEffect( () => {
    fetchPatients()
    .then((res) => setData(res));
    paginator(data, currentPage, itemsPerPage );
  }, [currentPage, data,itemsPerPage])

  const fetchPatients = async () => {
    const url = 'https://aribdavid-patient-manager-api.herokuapp.com/patient';
    const response = await fetch(url)
    .then((data) => data.json());
    return response;
  }

 function paginator(items, current_page, per_page_items) {
    let page = current_page || 1,
    per_page = per_page_items || 3,
    offset = (page - 1) * per_page,
  
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

    setCurrentItems(paginatedItems);  
    setTotalPages(total_pages);
    
    // return {
    //   page: page,
    //   per_page: per_page,
    //   pre_page: page - 1 ? page - 1 : null,
    //   next_page: (total_pages > page) ? page + 1 : null,
    //   total: items.length,
    //   total_pages: total_pages,
    //   data: paginatedItems
    // };
  }

  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Container sx={{ py: 8 }} maxWidth="md">
        <BrowserSort setItemsPage={setItemsPage} />
        <br/>
        <br/>
          <Grid container spacing={4}>
            {data.length > 0 && currentItems.map((card, index) => (
             <PatientCard card={card} key={index}  />
            ))}
          </Grid>
          <Stack spacing={2}>
            <Pagination sx={{alignSelf: 'center'}} onChange ={({target})=> setPage(target.textContent)} count={totalPages} color="primary" />
          </Stack>
        </Container>
        <Footer />
    </ThemeProvider>  
  )
}