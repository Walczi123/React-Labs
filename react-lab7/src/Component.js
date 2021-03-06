import React from 'react'
import EmployeeList from './EmployeeList'
//import AddComponent from './AddComponent'

class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          isLoading: true,
        };
        this.componentGet = this.componentGet.bind(this);
      }
    
      componentDidMount() {
        this.componentGet();
      }

      componentGet(){
        this.setState({ isLoading:true});
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ employees:data }))
        .then(() => {this.setState({ isLoading: false })
        });
      }

      render()
      {
        return(
          <div>
            {this.state.isLoading ? <label>Loading...</label>:
              <div> Data loaded: 
              <br/>
              <EmployeeList employee={this.state.employees}/>
              </div>
            }
          </div>
        )
      }
}
export default Companies
