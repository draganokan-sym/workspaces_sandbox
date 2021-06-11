import React, { useState } from 'react';
import {TypeB, RenderB, MEANING_OF_LIFE} from 'apps-shared'
 
export const App: React.FC = () => {
  const [state, setState] = useState<TypeB>(MEANING_OF_LIFE)

  return (
    <div>
      <h1>app2</h1>
      <RenderB prop={state} />
      <input type="number" value={state} onChange={e=>setState(parseInt(e.target.value, 10))} min="10" max="100" />
    </div>
  )
}