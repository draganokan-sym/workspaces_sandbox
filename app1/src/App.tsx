import React, { useState } from 'react';
import {TypeA, RenderA} from 'apps-shared'
 
export const App: React.FC = () => {
  const [state, setState] = useState<TypeA>("blabla")

  return (
    <div>
      <h1>app1</h1>
      <RenderA prop={state} />
      <input type="text" value={state} onChange={e=>setState(e.target.value)} />
    </div>
  )
}