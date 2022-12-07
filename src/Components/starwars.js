import React, { Fragment } from "react";
import axios from "axios";

class StarWars extends React.Component {

   state = {
      randomNumber:1,
      starWarsCharacter:[]
   }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        console.log(response)
        this.setState({
          starWarsCharacter:response.data
        });
        console.log(this.state.starWarsCharacter);
      })
      .catch((error)=>{
        console.log(error);
      });
    }

    Delete=(data)=>{
      axios.patch(`https://jsonplaceholder.typicode.com/users/${data.id}`,{
        name:"sam",
        email:"xyz@adbhd.com",
        phonenumber:"768734776"
      }
      )
    }
// componentDidUpdate(randomNumber){
//   axios
//       .get(`https://jsonplaceholder.typicode.com/users/${this.state.randomNumber}`)
//       .then((response) => {
//         console.log(response)
//         this.setState({
//           starWarsCharacter:response.data
//         });
//         console.log(this.state.starWarsCharacter);
//       })
//       .catch((error)=>{
//         console.log(error);
//       });
// }
    
  render() {
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.starWarsCharacter.map((data)=>
            <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <button onClick={()=>this.Delete(data)}>Patch</button>
            </tr>
            )}
          </tbody>
        </table>
        <button onClick={()=>this.setState({randomNumber:Math.floor(Math.random()*10)})}>Random number</button>
      </Fragment>
    );
  }
}

export default StarWars;
