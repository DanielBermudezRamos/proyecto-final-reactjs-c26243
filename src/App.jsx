import { Layout } from './components/Layout/Layout'
import Productos from './components/Productos/Productos'
import './App.css'

function App() {

  return ( 
    <Layout>
      <Productos Mensaje="De la cocina a su casa" />            
    </Layout>
  )
}

export default App