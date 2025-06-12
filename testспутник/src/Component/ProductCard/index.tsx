import React from 'react';
import './index.css';
import type { ProductCardProps } from './index.ts';

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <section className="product">
      <div className="container">
        <div className="product__content">
          <img src={imageUrl} alt={title} />
          <h2>{title}</h2>
          <p>Страна: {origin}</p>
          <p>Цена: {formattedPrice}</p>
        </div>
      </div>
    </section>
  );
};
