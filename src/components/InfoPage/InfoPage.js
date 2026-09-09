import React from 'react';
import './InfoPage.css';

export default function InfoPage({ title, subtitle, points = [] }) {
  return (
    <section className='info-page'>
      <h1>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
      <ul>
        {points.map((point, index) => (
          <li key={`${point}-${index}`}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
