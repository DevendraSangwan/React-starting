import Name from "./Name"
function App() {
  const username="Devendra"
  return ( //we send only one element in this ...so we use "fregment"
    <>
    <Name/>
    { <h1>Hello {username} </h1> /*if we write something in curly bracket then it take it as a variable like in JS we write ${} like this  */}
    <p>Yes</p>
    </>

  )
}

export default App
