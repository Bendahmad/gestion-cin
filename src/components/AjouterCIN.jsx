import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterCINAction } from "../config/actions";
import { useNavigate } from "react-router-dom";

function AjouterCIN() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numeroCIN, setNumeroCIN] = useState("");
  const [genre, setGenre] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();
  const nombreCIN = useSelector((data) => data.cins.length);

  const navigate = useNavigate();

  const handleAjouter = (e) => {
    e.preventDefault();
    dispatch(
      ajouterCINAction({
        id: nombreCIN + 1,
        nom,
        prenom,
        numeroCIN,
        genre,
        dateNaissance,
        photo,
      })
    );
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-center py-4">
          <h2 className="text-3xl font-semibold">Ajouter une CIN</h2>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleAjouter} className="space-y-5">
            {/* Nom */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom :
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>

            {/* Prénom */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénom :
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>

            {/* Numéro CIN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Numéro CIN :
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                value={numeroCIN}
                onChange={(e) => setNumeroCIN(e.target.value)}
                required
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genre :
              </label>
              <select
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
              >
                <option value="">Sélectionnez le genre :</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
            </div>

            {/* Date de naissance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date de naissance :
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo :
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                onChange={(e) =>
                  setPhoto(URL.createObjectURL(e.target.files[0]))
                }
                required
              />
            </div>

            <div className="flex justify-center gap-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="w-auto bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Ajouter CIN
              </button>
              {/* Retour Button */}
              <button
                type="button"
                className="w-auto bg-gray-600 text-white font-medium py-2 px-4 rounded-md shadow-md hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate("/")}
              >
                Retour
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AjouterCIN;
