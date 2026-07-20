// src/routes/_404.tsx
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <h1>404 Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
      <a href="/">Ana sayfaya geri dön</a>
    </div>
  );
});
