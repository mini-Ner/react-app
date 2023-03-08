import logo from './logo.svg';
import './App.css';
function Header(){
  return  <header>
  <h1><a href="/">WEB</a></h1>
  </header> 
}
function Body(){
  return <body>
    <h2><a href="/">component</a></h2>
  </body>
}
function Nav(){
 return <nav>
  <ol>
  <li><a href="/read/1">html</a></li>
  <li><a href="/read/2">css</a></li>
  <li><a href="/read/3">js</a></li>
</ol>
</nav>
}
function Article(){
return <article>
    <h2>welcome</h2>
        hello, WEB
</article>
}
function App() {
  return (
    <div>
     <Header></Header>
     <Body></Body>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
