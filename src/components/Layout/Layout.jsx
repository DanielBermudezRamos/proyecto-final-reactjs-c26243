import {Header} from './Header'; 
import {Footer} from './Footer'; 
 
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children". 
export function Layout({ children }) { 
  return ( 
    <> 
      <Header /> 
      <main> 
        {children} 
      </main> 
      <Footer />
    </>
  );
} 