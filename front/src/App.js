import React, { Component } from 'react';
import { AppBar, Typography, Toolbar, Grid, Card, CardContent, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import './App.css';

import axios from 'axios'
import Slider from "react-slick";

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dataTempo: null,
      dataPosts: null,
      dataRamais: null,
      dataNoticias: null
    }

  }

  componentDidMount() {

    axios.get('https://python-django-basic-lhrff.mybluemix.net/RSS')
      .then( ({data}) => {
        this.setState({
          dataNoticias: data.slice(0, 10)
        })
      })
      .catch(console.error)

    axios.get('http://extensions-env.vemqzyhppw.us-east-2.elasticbeanstalk.com/api')
      .then( ({data}) => {
        this.setState({
          dataRamais: data.users.slice(0, 4)
        })
      })
      .catch(console.error)

    axios.get('http://ine5646-env.stpppmiam6.us-east-2.elasticbeanstalk.com/api')
    .then( ({data}) => {
      this.setState({
        dataTempo: data
      })
    })
    .catch(console.error)

    //HARD CODE
    this.setState({
      dataPosts: [{"id":"36","titulo":"teste de titulo via REST 2","descricao":"teste de texto via REST 2","foto":null,"datahora":"2018-06-27 22:52:01"},{"id":"35","titulo":"teste de titulo via REST","descricao":"teste de texto via REST","foto":null,"datahora":"2018-06-27 22:37:16"},{"id":"34","titulo":"teste titulo envio form","descricao":"teste texto envio form","foto":"11555f3ec5701a20acf1fd1e51d68bd8.jpg","datahora":"2018-06-27 22:36:46"},{"id":"33","titulo":"Teste de artigo com foto","descricao":"Testando enviar um artigo que inclui imagem.","foto":"c2a2c3a7429c771c4ff9806c7c742d8d.jpg","datahora":"2018-06-18 00:07:17"},{"id":"32","titulo":"Teste de entrada sem imagem","descricao":"Testando o corpo de uma entrada sem imagem.\r\n\r\nOs acentos neste texto dever\u00e3o aparecer corretamente no banco de dados como UTF-8, e dever\u00e3o tamb\u00e9m ser filtrados corretamente no JSON (depois devem ser tratados com alguma fun\u00e7\u00e3o de utf8 encode\/decode quando o JSON for ser lido).","foto":null,"datahora":"2018-06-18 00:06:15"}]
    })

  }


  getDataTempo = () => {
    
    const data = this.state.dataTempo || {}
    const dataMain = data.main || {}
    
    return {
      cidade: data.name,
      temperaturaMinima: dataMain.temp_min,
      temperaturaMaxima: dataMain.temp_max,
      temperaturaAtual: dataMain.temp
    }
  }

  getDataPosts = () => {
    
    return this.state.dataPosts || []

  }

  getDataRamais = () => {
    
    return this.state.dataRamais || []

  }

  getDataNoticias = () => {
    
    return this.state.dataNoticias || []

  }


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
                  
                  <Slider dots={true} infinity={true} speed={1500} autoplay={true} >
                  
                    {
                      this.getDataPosts().map(post => {
                        return (<div key={post.id}>
                          <Typography variant="headline" component="h2"> {post.titulo} </Typography>
                          <Typography> {post.descricao} </Typography>
                        </div>)
                      })
                    }

                  </Slider>
      
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={4}>
              
              <Card>
                <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography>
                    Tempo para {this.getDataTempo().cidade}
                  </Typography>
                  <Typography style={{fontSize: 40}}>
                    {this.getDataTempo().temperaturaAtual}ºC
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
                  <hr />
                  <Slider dots={true} infinity={true} speed={1500} autoplay={true} >
                  
                    {
                      this.getDataNoticias().map(post => {
                        return (<div key={post.Link + post.Titulo} onClick={() => window.location = post.Link}>
                          <Typography variant="headline" component="h2"> {post.Titulo} </Typography>
                          <Typography> {post.Descricao} </Typography>
                        </div>)
                      })
                    }

                  </Slider>
                </CardContent>
              </Card>

            </Grid>
            
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    Ramais
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow> 
                        <TableCell>Nome</TableCell>  
                        <TableCell>Ramal</TableCell>  
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.getDataRamais().map(linha => {
                        return (
                          <TableRow key={linha.extension}>
                            <TableCell component="th" scope="row">
                              {linha.name}
                            </TableCell>
                            <TableCell>{linha.extension}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </div>

      </div>
    );
  }
}
