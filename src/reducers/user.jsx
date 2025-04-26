export default function User(state = { user: [] }, actions) {
  switch (actions.type) {
    case "USER":
      return {
        ...state,
        user: [...state.user, actions.user],
      };

    default:
      return state;
  }
}
