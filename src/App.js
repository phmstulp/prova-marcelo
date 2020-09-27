import React from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import Cadastro from './pages/cadastro';
import Listar from './pages/listar';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/listar" className= { classes.link }>
              <ListItem>
                <ListItemIcon button>
                  <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary={ "Consulta" }></ListItemText>
              </ListItem>
            </Link>
            <Link to="/cadastro" className= { classes.link }>
              <ListItem>
                <ListItemIcon button>
                  <AddCircleOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary={ "Cadastro" }></ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route path="/listar" component={ Listar } />
          <Route path="/cadastro" component={ Cadastro } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;