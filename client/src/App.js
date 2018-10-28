import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nutrition from './components/Nutrition';
import Faq from './components/Faq';
import Headerimg from './components/Headerimg';
import Box from './components/InfoBoxes';
import Home from './components/Home';
import Footer from './components/Footer';
import Catering from './components/Catering';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Signup from './components/Signup';
import Login from './components/Login';
import User from './components/User';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxInfo: [
        { headline: "DAILY FRESH PRODUCE", desc: "We use fresh organic vegetables and free raised grass-fed meat" },
        { headline: "Inventory", desc: "We offer a large variety of fresh organic vegetables & meats" },
        { headline: "Prices", desc: "We offer the most competitive prices and offer price match guarantee from our competitors" }
      ],
      meat: [
        "Steak", "Chicken", "Carnitas", "Barbacoa", "Chorizo", "Sofritas"
      ],
      sides: [
        "White Rice", "Brown Rice", "Black Beans", "Pinto Beans"
      ],
      toppings: [
        "Queso", "Fresh Tomato Salsa", "Sour Cream", "Romaine Lettuce", "Guacamole", "Monterey Jack Cheese"
      ],
      ordersReceived: [],
      isLoggedIn: false,
      email: '',
      password: '',
      meatChoice: '',
      sideChoice: '',
      toppingChoice: '',
      loginBtn: false,
    }
    this.getOrders = this.getOrders.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.loginButton = this.loginButton.bind(this)
    this.logout = this.logout.bind(this)
    this.submitNew = this.submitNew.bind(this)
  }

  login() {
    const url = "http://localhost:3000/api/user_token";
    const body = { "auth": { "email": this.state.email, "password": this.state.password } }
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(body),
    }
    fetch(url, init)
      .then(res => res.json())
      .then(res => localStorage.setItem("jwt", res.jwt))
      .then(() => this.setState({
        isLoggedIn: true,
      }))
      .then(() => this.getOrders())
      .catch(err => console.log(err))
  }

  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }

  getOrders() {
    const jwt = localStorage.getItem("jwt")
    const init = {
      headers: { "Authorization": `Bearer ${jwt}` }
    }
    fetch(`http://localhost:3000/api/orders`, init)
      .then(res => res.json())
      .then(data => this.setState({
        ordersReceived: data,
      }))
      .catch(err => err)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.isLoggedIn()
    this.getOrders()
    this.login()
  }

  componentWillMount() {
    this.loginButton()
  }

  loginButton() {
    this.setState({
      loginBtn: true
    })
  }

  logout() {
    localStorage.removeItem("jwt")
    this.setState({
      isLoggedIn: false,
    })
  }

  submitNew() {
    const jwt = localStorage.getItem("jwt")
    const body = { "order": { "meats": this.state.meats, "sides": this.state.sides, "toppings": this.state.toppings } }
    const init = {
      headers: { "Authorization": `Bearer ${jwt}`, 'Content-Type': 'application/json', 'Accept': 'application/json' },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body)
    }
    fetch(`http://localhost:3000/api/orders`, init)
      .then(() => this.getOrders())
      .catch(err => err.message)
  }

  render() {
    let userDisplay = this.state.isLoggedIn ? null :
      !this.state.loginBtn ?
        userDisplay = <Signup />
        :
        userDisplay = <Login
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          login={this.login}
        />

    return (
      <div>
        <Header
          email={this.state.email}
          isLoggedIn={this.state.isLoggedIn}
          logout={this.logout}
        />
        <div className="headerImg">
          <Headerimg />
        </div>
        <div className="userDisp">
          {
            this.state.isLoggedIn ? null : <p>Sign up here or if you currently have an account <a href="/" onClick={this.loginButton}>click here</a> to log in</p>
          }
          {userDisplay}
        </div>
        <div className="routes">
          <Router>
            <Route render={({ location }) => (

              <Switch location={location}>
                <Route exact path="/"
                  component={() => <Home
                    boxInfo={this.state.boxInfo}
                    email={this.state.email}
                    password={this.state.password}
                    login={this.login}
                    isLoggedIn={this.isLoggedIn}
                    handleChange={this.handleChange}
                  />} />
                <Route path={"/nutrition"} component={Nutrition} />
                <Route path={"/faq"} component={Faq} />
                <Route path={"/menu"} component={() =>
                  <Menu
                    meats={this.state.meat}
                    sides={this.state.sides}
                    toppings={this.state.toppings} />}
                />
                <Route path={"/catering"} component={Catering} />
                <Route path={"/user"} component={() =>
                  <User
                    ordersReceived={this.state.ordersReceived}
                    submitNew={this.submitNew}
                  />} />
              </Switch>
            )} />
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
