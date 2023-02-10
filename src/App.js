import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: initialuserDetailsList,
  }

  onChangeText = event => {
    this.setState({searchInput: event.target.value})
  }
  // eslint-disable-next-line lines-between-class-members
  delleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUsersList = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredUsersList})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchUser = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" value={searchInput} onChange={this.onChangeText} />
        <ul className="list-container">
          {searchUser.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              deleteUser={this.delleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
