import axios from "axios";
import { Component } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Main from "./components/Main";
  
class App extends Component{
  constructor(){
    super();
    this.state={
      loading: false,
      users:[]
    }
  }
  searchUser=(keyword)=>{
    this.setState({loading: true})
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({loading: false,users:res.data.items}))
  }
    render(){
      return(
       <>
         <Header searchValue={this.searchUser}/>
         { this.state.loading ? <Loading /> :  <Main uservalue={this.state.users}/>}
       </>
      )
    }
}

export default App