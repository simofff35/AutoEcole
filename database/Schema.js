const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://simo:simo@auto.cxriz3e.mongodb.net/?retryWrites=true&w=majority";

//?Client
const clientSchema = new mongoose.Schema({
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
const voitureSchema = new mongoose.Schema({
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
  Disp: {
    type: Boolean,
    required: true,
  },
  Vitesse: {
    type: String,
  },
  Image: {
    contentType: String,
    data: Buffer,
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

const Client = mongoose.model("Client", clientSchema);
const Voiture = mongoose.model("Voiture", voitureSchema);
const Commande = mongoose.model("Commande", commandeSchema);

module.exports = { Client, Voiture, Commande };
