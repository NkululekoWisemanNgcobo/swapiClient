import { Container, Grid } from '@mui/material';
import CardComponent from './CardCardComponent';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

const GET_PEOPLE = gql`
query PeoplePage($page: Int) {
    peoplePage(page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

const Cards = () => {
    let { page } = useParams();
    page = page != null ? page : 1;

    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: { page },
    });

    if (loading) return "May the force be with you.";
    if (error) return `Error! ${error}`;
    return (
        <Container style={{ padding: 20 }}>
            <Grid container spacing={2}>
                {data.peoplePage &&
                    data.peoplePage.results.map((person, index) => (
                        <Grid item xs={3} key={index}>
                            <CardComponent
                                key={index}
                                name={person.name}
                            />
                        </Grid>
                    )
                    )
                }
            </Grid>
            <Box sx={{ mx: "auto", width: 400 }}>
                <Pagination count={10} color="secondary" />
            </Box>

        </Container>

    )
}

export default Cards