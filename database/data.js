const mongoose = require("mongoose");

//?Client
const client = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
  },

  Prenom: {
    type: String,
    required: true,
  },

  Tel: {
    type: Number,
    maxlength: 10,
    require: true,
  },
});
//?Voiture
const voiture = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  Couleur: {
    type: String,
    required: true,
  },
  Matricule: {
    type: String,
    required: true,
  },
  Etat: {
    trype: String,
  },
  Kil: {
    type: Number,
  },
  Prix: {
    type: Number,
    required: true,
  },
});
//?Commande
const commandeSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  voiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "voiture",
    required: true,
  },
  NJour: {
    type: Number,
    required: true,
  },
  PTotale: {
    type: Number,
  },
});
