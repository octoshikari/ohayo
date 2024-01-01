import { Scope } from 'effector';
import { Provider } from 'effector-solid';
import { ParentComponent } from 'solid-js';

export const App: ParentComponent<{ scope: Scope }> = ({ scope }) => {
  return (
    <Provider value={scope}>
      <div>fsdfsdfs</div>
    </Provider>
  );
};
