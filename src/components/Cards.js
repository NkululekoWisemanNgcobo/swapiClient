import { Container, Grid } from '@mui/material';
import CardComponent from './CardCardComponent';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from "react-router-dom";
import { Fragment } from 'react';

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
    page = parseInt(page);
    const navigate = useNavigate();

    function nextPage(event, pageNum) {
        navigate(`/people/${pageNum}`, { replace: true });
    }

    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: { page },
    });

    if (loading) return "May the force be with you.";
    if (error) return `Error! ${error}`;
    let people = data.peoplePage;
    let count = Math.ceil(people.count / people.results.length);
    return (
        <Fragment>
            <Container style={{ padding: 20 }}>
                <Grid container spacing={2}>
                    {people &&
                        people.results.map((person, index) => (
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
                    <Pagination count={count} onChange={nextPage} page={page} color="secondary" />
                </Box>

            </Container>
        </Fragment>

    )
}

export default Cards