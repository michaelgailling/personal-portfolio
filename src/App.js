import './App.css';
import "bootstrap/dist/css/bootstrap.css";

//React router stuff
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume/resume'
import Contact from './components/contact'
import Footer from './components/footer'
import { Container } from 'react-bootstrap';


function App() {
    return (
        <BrowserRouter>
            <Container>
                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                
                <Footer />
            </Container>
        </BrowserRouter>
    );
}

export default App;
