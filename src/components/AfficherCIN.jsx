import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { supprimerCINAction } from "../config/actions";

function AfficherCIN() {
  const cins = useSelector((data) => data.cins);
  const dispatch = useDispatch();

  const handleSupprimer = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce CIN ?")) {
      dispatch(supprimerCINAction(id));
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Liste des CINs</h2>
        <Link to="/ajouter-cin">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Ajouter CIN
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full bg-white text-left">
          <thead className="bg-gray-50 text-gray-700 uppercase text-sm font-medium">
            <tr>
              <th className="px-6 py-3 border-b">ID</th>
              <th className="px-6 py-3 border-b">Nom</th>
              <th className="px-6 py-3 border-b">Prénom</th>
              <th className="px-6 py-3 border-b">Numéro CIN</th>
              <th className="px-6 py-3 border-b">Genre</th>
              <th className="px-6 py-3 border-b">Date de naissance</th>
              <th className="px-6 py-3 border-b">Photo</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cins.map((cin, index) => (
              <tr
                key={cin.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-6 py-4 border-b text-gray-800">{cin.id}</td>
                <td className="px-6 py-4 border-b text-gray-800">{cin.nom}</td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {cin.prenom}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {cin.numeroCIN}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {cin.genre}
                </td>
                <td className="px-6 py-4 border-b text-gray-800">
                  {cin.dateNaissance}
                </td>
                <td className="px-6 py-4 border-b">
                  <img
                    src={cin.photo}
                    alt="photo"
                    className="w-10 h-10 rounded-full border object-cover"
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-3">
                    <Link to={"/modifier-cin/" + cin.id}>
                      <button
                        className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
                        title="Modifier"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </Link>
                    <Link to={"/vue-cin/" + cin.id}>
                      <button
                        className="text-blue-600 hover:text-blue-800 focus:outline-none"
                        title="Voir"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                    </Link>
                    <button
                      className="text-red-600 hover:text-red-800 focus:outline-none"
                      onClick={() => handleSupprimer(cin.id)}
                      title="Supprimer"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AfficherCIN;
