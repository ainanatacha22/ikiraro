import { useState } from 'react'

import Body from './pages/Body'
function App() {

  const [change, setChange] = useState('')
  const handleChange = (e) => {
    setChange(e.target.value)
  }

  return (
    <div className='w-full m-auto'>

      <div className='my-4 mx-4'>
        <input type="text" placeholder="Search......." onChange={e => handleChange(e)} />
      </div>

      <Body change={change} />
    </div>
  )
}

export default App
