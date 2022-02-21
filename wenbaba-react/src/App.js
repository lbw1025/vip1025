import './App.css';
import {Link,NavLink,Route, Redirect,Prompt} from 'react-router-dom'
import Home from "../src/view/Home"
import Detail from '../src/view/Detail'
let flag = true;
function App() {
  return(
    <div className="app">
      {/* <Link to ="/home">首页</Link>
      <Link to ="/detail">详情页</Link> */}
      <NavLink to="/home" activeClassName="xx">首页</NavLink>
      <NavLink to="/detail/111">详情页</NavLink>
      <NavLink to="/test">测试1</NavLink>
      <NavLink to="/test2">测试2</NavLink>
      
      <Route path='/home' component={Home}></Route>
      <Route path="/detail/:id" exact component={Detail}></Route>
      <Route path="/text" render={()=>{
        return(
          <div>
            <h2>1111</h2>
             <p>测试1</p>
          </div>

        )
      }}> </Route>
      <Route path="/test2" children={()=>{
        return (
          <div>我是children</div>
        )
      }}></Route>
     {<Route path= "/text" render={()=>{
          return <Redirect to="/home">
              {/* <Prompt when={flag} message={()=>("确定跳转？")}></Prompt> */}
          </Redirect>
      }}> 

      </Route>}
    </div>
  )
}

export default App;
