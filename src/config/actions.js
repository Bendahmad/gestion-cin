export const ajouterCINAction = (cin) => {
  return { type: "AJOUTER_CIN", payload: cin };
};

export const modifierCINAction = (cin) => {
  return { type: "MODIFIER_CIN", payload: cin };
};

export const supprimerCINAction = (id) => {
  return { type: "SUPPRIMER_CIN", payload: id };
};
