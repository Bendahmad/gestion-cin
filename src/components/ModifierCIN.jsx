import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifierCINAction } from "../config/actions";
import { useState } from "react";

function ModifierCIN() {
  const { id } = useParams();
  const cins = useSelector((data) => data.cins);
  const cinId = cins.find((cin) => cin.id === parseInt(id));

  if (!cinId) {
    return <p>CIN introuvable</p>;
  }

  const [nom, setNom] = useState(cinId.nom);
  const [prenom, setPrenom] = useState(cinId.prenom);
  const [numeroCIN, setNumeroCIN] = useState(cinId.numeroCIN);
  const [genre, setGenre] = useState(cinId.genre);
  const [dateNaissance, setDateNaissance] = useState(cinId.dateNaissance);
  const [photo, setPhoto] = useState(cinId.photo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModifie = (e) => {
    e.preventDefault();
    dispatch(
      modifierCINAction({
        id: id,
        nom: nom,
        prenom: prenom,
        numeroCIN: numeroCIN,
        genre: genre,
        dateNaissance: dateNaissance,
        photo: photo,
      })
    );
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Modifier CIN
        </h2>

        {/* Formulaire */}
        <form onSubmit={handleModifie} className="space-y-6">
          {/* Nom */}
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700"
            >
              Nom :
            </label>
            <input
              type="text"
              id="nom"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>

          {/* Prénom */}
          <div>
            <label
              htmlFor="prenom"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom :
            </label>
            <input
              type="text"
              id="prenom"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>

          {/* Numéro CIN */}
          <div>
            <label
              htmlFor="numeroCIN"
              className="block text-sm font-medium text-gray-700"
            >
              Numéro CIN :
            </label>
            <input
              type="text"
              id="numeroCIN"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={numeroCIN}
              onChange={(e) => setNumeroCIN(e.target.value)}
              required
            />
          </div>

          {/* Genre */}
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre :
            </label>
            <select
              id="genre"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            >
              <option value="">Sélectionnez un genre</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>

          {/* Date de naissance */}
          <div>
            <label
              htmlFor="dateNaissance"
              className="block text-sm font-medium text-gray-700"
            >
              Date de naissance :
            </label>
            <input
              type="date"
              id="dateNaissance"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
              required
            />
          </div>

          {/* Photo */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo :
            </label>
            <input
              type="file"
              id="photo"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
            />
          </div>

          {/* Bouton soumettre */}

          <div className="flex justify-center gap-4">
            {/* Modifier Button */}
            <button
              type="submit"
              className="w-auto bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Modifier CIN
            </button>
            {/* Retour Button */}
            <button
              type="button"
              className="w-auto bg-gray-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => navigate("/")}
            >
              Retour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifierCIN;
