import { createStore } from "redux";

const initialeState = {
  cins: [
    {
      id: 1,
      nom: "Ben",
      prenom: "Youssef",
      numeroCIN: "JB1111",
      genre: "Homme",
      dateNaissance: "1999-01-16",
      photo: '/gestion-cin/homme.png',
    },
    {
      id: 2,
      nom: "Alla",
      prenom: "Rachida",
      numeroCIN: "JB2222",
      genre: "Femme",
      dateNaissance: "2000-10-06",
      photo: "/gestion-cin/femme.png",
    },
  ],
};

const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "AJOUTER_CIN":
      return { ...state, cins: [...state.cins, action.payload] };

    case "MODIFIER_CIN":
      const cin = state.cins.find(
        (cin) => cin.id === parseInt(action.payload.id)
      );
      if (cin) {
        cin.nom = action.payload.nom;
        cin.prenom = action.payload.prenom;
        cin.numeroCIN = action.payload.numeroCIN;
        cin.genre = action.payload.genre;
        cin.dateNaissance = action.payload.dateNaissance;
        cin.photo = action.payload.photo;
      }
      return state;

    case "SUPPRIMER_CIN":
      return {
        ...state,
        cins: [
          ...state.cins
            .filter((cin) => cin.id !== parseInt(action.payload))
            .map((cin, index) => ({ ...cin, id: index + 1 })),
        ],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
