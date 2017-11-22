

export function mapById(items = [], initialState = {}) {
  return items.reduce((state, item) => {
    state[item.id] = item;
    return state;
  }, initialState);
}
