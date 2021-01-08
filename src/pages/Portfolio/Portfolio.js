import Card from '../../components/Card'


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
  
  return (
    <>
    <h1>Portfolio Page</h1>
    {
    portfolioInfo.map((data, i) =>
      <Card/>)
    }
    </>
  )
}

export default Portfolio