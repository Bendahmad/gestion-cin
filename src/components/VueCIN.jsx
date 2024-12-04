import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function VueCIN() {
  const { id } = useParams();
  const cins = useSelector((data) => data.cins);
  const cinId = cins.find((cin) => cin.id === parseInt(id));
  const navigate = useNavigate();

  if (!cinId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-red-600 font-semibold text-lg">CIN introuvable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg">
        {/* En-tête */}
        <div className="bg-blue-600 text-white text-center py-4 rounded-t-lg">
          <h2 className="text-2xl font-semibold">Détails de la CIN</h2>
        </div>

        {/* Corps de la carte */}
        <div className="p-6">
          {/* Photo */}
          <div className="flex flex-col items-center mb-6">
            <strong className="text-gray-700">Photo :</strong>
            <img
              src={cinId.photo}
              alt="CIN"
              className="w-32 h-32 mt-3 rounded-full shadow-md border-2 border-gray-200"
            />
          </div>

          {/* Informations */}
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Nom :</strong> {cinId.nom}
            </p>
            <p className="text-gray-700">
              <strong>Prénom :</strong> {cinId.prenom}
            </p>
            <p className="text-gray-700">
              <strong>Numéro CIN :</strong> {cinId.numeroCIN}
            </p>
            <p className="text-gray-700">
              <strong>Genre :</strong> {cinId.genre}
            </p>
            <p className="text-gray-700">
              <strong>Date de naissance :</strong> {cinId.dateNaissance}
            </p>
          </div>
        </div>

        {/* Pied de la carte */}
        <div className="bg-gray-100 text-center py-4 rounded-b-lg">
          <button
            className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => navigate("/")}
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}

export default VueCIN;
