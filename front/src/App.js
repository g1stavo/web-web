import React, { Component } from 'react';
import { AppBar, Typography, Toolbar, Grid, Paper, Card, CardContent } from '@material-ui/core'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="body">
        <AppBar position="static" style={{backgroundColor: '#7986CB'}}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Intranet
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={{padding: 24}}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    Notícias da Empresa
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={4}>
              
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    Previsão do Tempo
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={8}>
              
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    Notícias (Brasil)
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
            
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    Ramais
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </div>

      </div>
    );
  }
}
