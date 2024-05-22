import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Numbers from './components/Numbers'
import Colors from './components/Colors'
import Animals from './components/Animals'
import QuizNum from './components3/QuizNum'
import QuizCol from './components3/QuizCol'
import QuizAni from './components3/QuizAni'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/number' element={<Numbers/>}/>
      <Route path='/color'element={<Colors/>}/>
      <Route path='/animal' element={<Animals/>}/>
      <Route path='quizNum' element={<QuizNum/>}/>
      <Route path='quizCol' element={<QuizCol/>}/>
      <Route path='quizAni' element={<QuizAni/>}/>
    </Routes>
    <div>
    </div>
    </>
  )
}

export default App
