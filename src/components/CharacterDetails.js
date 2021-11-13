import * as React from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { CardActionArea, Container, Grid } from '@mui/material';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

const GET_PERSON = gql`
query GetPerson($name: String) {
    getPerson(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

const CharacterDetails = () => {
    let { name } = useParams();

    const { loading, error, data } = useQuery(GET_PERSON, {
        variables: { name },
    });

    console.log(data);

    if (loading) return "This is the way.";
    if (error) return `Error! ${error}`;

    return (
        <Container style={{ padding: 20 }}>
            <Grid container spacing={10} >
                <Grid item xs={6}>
                    <Paper style={{ backgroundColor: "#111" }}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="../assets/mando1.jpeg"
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper >
                        <List
                            sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                height: '100%',
                                '& ul': { padding: 0 },
                            }}
                        >
                            {data.getPerson.map(function (person, index) {
                                return (<li key={index}>
                                    <ul>
                                        {Object.keys(person).map(function (key, index) {
                                            if (key === "__typename")
                                                return "";
                                            return (
                                                <ListItem key={index}>
                                                    <ListItemText primary={`${key} : ${person[key]}`} />
                                                </ListItem>

                                            );
                                        })
                                        }
                                    </ul>
                                </li>)
                            })}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}

export default CharacterDetails

