import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

const AppContext = React.createContext()

function App() {
  let [currentUser, setCurrentUser] = React.useState()
  return (
    <div className="App">
      <div style={{backgroundColor:"lightgray"}}>
        <Header/>
      </div>
      <div style={{flex:1}}>
        {currentUser?(
          // composition syle of ignoring the prop drilling and manipulating the componenet children
        <Dashboard>
          <DashboardNav/>
          <DashboardContent>
            <WelcomeMessage user={currentUser}/>
          </DashboardContent>
        </Dashboard>
        ):
        (<LoginScreen onLogin ={()=> setCurrentUser({name:"micheal"})}/> //passing function as a props
        )}
      </div>
      <div style={{backgroundColor:"lightgray"}}>
        <div>Footer</div>
      </div>
    </div>
  );
}

function Header(){
  return(
    <div>
      <h1>Header</h1>
    </div>
  )
}

function LoginScreen({onLogin}){ // accepting function as a props
  console.log(onLogin)
  return(
    <div>
      <h3>Please Login</h3>
      <button onClick = {onLogin}>Login</button> {/*executing function which is passed as props */}
    </div>
  )
}

function Dashboard({children}){
  return(
    <div>
      <h2>The Dashboard</h2>
      {/* Passing children to the parent component, making parent element aware of having t he children */}
      {children} 

    </div>
  )
}

function DashboardNav(){
  return(
    <div>
      <h2>DashboardNav</h2>
    </div>
  )
}

function DashboardContent({children}){
  return(
    <div>
      <h3>DashboardContent</h3>
      {children}
    </div>
  )
}

function WelcomeMessage({user}){
  return(
    <div>
      <p>{user.name}</p>
    </div>
  )
}
export default App;
