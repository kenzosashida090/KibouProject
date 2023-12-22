type TinitialState = {
  users: [
    {
      name: string;
      email: string;
      password: string;
    }
  ];
  isUser: boolean;
};
const initialState: TinitialState = {
  users: [
    {
      name: "",
      email: "",
      password: "",
    },
  ],
  isUser: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "signup":
      return {
        ...state,
        users: [{ ...initialState.users, ...initialState }],
      };
  }
};
