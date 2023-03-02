import { createStore } from "@stencil/store";

export const store = createStore({
  counter: 0,
  delta: 1,
});

store.onChange('counter', value => {
  if(value > 100) store.state.delta = 0;
});

export const removeEventListener =  store.on('reset', () => {
  console.log('Store got reset');
})

export const unsubscribe = store.use({
  get: (key) => console.log(`Someone's reading prop ${key}`),
  set: (key, newValue, oldValue) => {
    console.log(`Prop ${key} changed from ${oldValue} to ${newValue}`);
  },
  reset: () => console.log('Store got reset'),
  dispose: () => console.log('Store got disposed'),
})
