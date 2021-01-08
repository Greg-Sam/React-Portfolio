import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Crd from '../../components/Crd'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const portfolioInfo = [
  {
    img: './img/codebook.PNG',
    name: 'CodeBook',
    description: 'A simple app to help you keep track of all your coding accomplishments. CodeBook allows you to share your coding journey with classmates.',
    link: 'https://radiant-headland-26253.herokuapp.com/index.html',
    github: 'https://github.com/Greg-Sam/Project2',
    cardType: 'grey'
  },
  {
    img: './img/COVIDINFORMA.PNG',
    name: 'COVID Informa',
    description: 'Interactive map providing data visualization of realtime COVID 19 statistics. Made use of mapbox, apis, html, css and materialize.',
    link: 'https://nicouva.github.io/Project1-COVID19-Map/#',
    github: 'https://github.com/nicouva/Project1-COVID19-Map',
    cardType: 'maroon'
  },
  {
    img: './img/weatherDashboard.PNG',
    name: 'Weather Dashboard',
    description: 'Searchable weather dashboard that provides current conditions and a five day forecast for cities around the world.',
    link: 'https://greg-sam.github.io/Weather-Dashboard/',
    github: 'https://github.com/Greg-Sam/Weather-Dashboard',
    cardType: 'grey'
  },
  {
    img: './img/password.PNG',
    name: 'Password Generator',
    description: 'This app receives user input and generates a strong password to meet their specifications',
    link: 'https://greg-sam.github.io/pw_gen/',
    github: 'https://github.com/Greg-Sam/pw_gen',
    cardType: 'white'
  },
  {
    img: './img/portfolio.jpg',
    name: 'Portfolio',
    description: 'This is the portfolio you are already viewing.',
    link: 'https://greg-sam.github.io/react-portfolio/',
    github: 'https://github.com/Greg-Sam/react-portfolio',
    cardType: 'white'
  },
]


const Portfolio = () => {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


  return (

  //   <Grid container className={classes.root} spacing={2}>
  //     <Grid item xs={12}>
  //       <Grid container justify="center" spacing={spacing}>
  //         {[0, 1, 2].map((value) => (
  //           <Grid key={value} item>
  //             <Paper className={classes.paper} />
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // );

<>
  <h1>Portfolio Page</h1>


  {
    portfolioInfo.map((data, i) =>
      <Crd
        img={data.img}
        name={data.name}
        text={data.text}
        link={data.link}
        github={data.github}
        cardType={data.cardType}
      />)
  }
  </>
  )
}

export default Portfolio