import React, { Suspense } from 'react';
import ('./App.css')
// @ts-ignore
const Layouts = React.lazy(() => import('cards/App'));


export default function App() {
  return (
    <Suspense fallback={<div>Loading remote components...</div>}>
      <Layouts />
    </Suspense>
  );
}