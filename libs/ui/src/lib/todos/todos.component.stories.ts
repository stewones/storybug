import { SomeService } from '@org/core';
import { TodosComponent } from './todos.component';

export default {
  title: 'Todos',
  decorators: [],
};

export const todos = () => {
  return {
    moduleMetadata: {
      declarations: [TodosComponent],
    },
    template: `
    safsfa
      <div>
        <org-todos></org-todos>
      </div>
    `,
    props: {},
  };
};
