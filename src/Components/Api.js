import React from 'react';
import { useEffect,useState } from 'react';

const Api = () => {
    
    const [userList,setUserList] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(data=>{
            if (data.status == 1) {
                setUserList(data)
            }
        })
        .catch((error) => {
            console.error(error);
            console.log(error);
        });
    },[])
    console.log(userList);

    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default Api;