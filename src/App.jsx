import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import ProductList from './components/features/ProductList'
import { lessons } from './data/mockData'

function App() {
  const handleSearch = (searchTerm) => {
    console.log("Поиск: ", searchTerm);
  };

  const handleAddToCart = (product) => {
    console.log("Добавление в корзину: ", product);
  };

  const handleViewDetails = (product) => {
    console.log("Просмотр деталей: ", product);
  };

  return (
    <div className="app">
      <Header title="Магазин товаров" onSearch={handleSearch} />

      <main className="app_main">
        <div className="app_container">
          <section className="app_section">
            <h2>Товары</h2>
            <ProductList
              products={lessons}
              filterText=''
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
            />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
