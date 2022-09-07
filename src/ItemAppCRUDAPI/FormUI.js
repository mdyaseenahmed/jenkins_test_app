import React, { Component } from "react";

export default class FormUI extends Component {
  constructor() {
    super();
    this.state = {
      itemsArray: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/getItems")
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
        this.setState({itemsArray: data})
      });
  }

  render() {
    var newItemName = "";
    var newItemPrice = "";
    const formUI = <div>
      <form>
        Enter the Item Name:<br/>
        <input data-testid="itemName_element" type="text" name="" onChange={(e)=>{
          newItemName = e.target.value;
        }} /><br /><br />
        Enter the Item Price:<br/>
        <input data-testid="itemPrice_element" type="text" name="" onChange={(e)=>{
          newItemPrice = e.target.value;
        }}/><br /><br />
        <button onClick={(e)=>{
          var newItem = {
            itemId: this.state.itemsArray.length+1,
            itemName: newItemName,
            price: newItemPrice
          }

          fetch('http://localhost:8000/api/addItem',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              "Content-type": "application/json"
            },
            body: JSON.stringify(newItem)
          }).then((res)=> {
            res.json();
          }).catch((err)=> {
            console.error(err);
          })
        }}>Add</button>
      </form>
    </div>

    const Item = <>
      {this.state.itemsArray.map((item, index)=>{
            return <tr key={index}>
                  <td>{item.itemId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                </tr>
          })}
    </>

    return(
      <div>
        <h1>Hello</h1>
        <center>
        <h1>Available Items</h1>
        <table data-testid="table_element">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Item}
          </tbody>
        </table>
        <br />
        {formUI}
        </center>
      </div>
    ) 
  }
}
