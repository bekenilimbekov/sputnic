
import './App.css'
import {ProductCard} from './Component/ProductCard/index.tsx'
function App() {


  return (
    <>
      <ProductCard
        title="Кепка"
        origin="Россия"
        price={37500}
        currency = "RUB"
        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlnG5VC9rTNb3wYl6GM3alY-sz9C2sG6zLw&s'
      />
    </>
  )
}

export default App
