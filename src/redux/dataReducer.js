const initialState = {
  data: [
    {
      title: "Fractured",
      release: 2019,
      rating: 8,
      format: "digital",
      genre: ["Mystery", "Sci-Fi", "Western"],
    },
  ],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default dataReducer;
