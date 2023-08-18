import { useState } from 'react'
import Form from './components/Form'
import Content from './components/Content'

function App(){
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  
  var formProps = { value, setValue, list, setList }
  var contentProps = {list,setList} 

  return(
  <>
    <Form 
    {...formProps}
    />
    <Content 
    {...contentProps}
    />  
  </> 
  )
}

export default App
