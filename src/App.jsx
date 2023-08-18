import { useState } from 'react'
import Form from './components/Form'

const App = () =>{
  const [value, setValue] = useState('')
  const [List, setList] = useState([])
  
  return(
  <>
    <Form 
    value={value}
    setValue={setValue}
    list={List}
    setList={setList}
    />  
  </>
  )
}

export default App
