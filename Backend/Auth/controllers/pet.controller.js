import PetModel from '../models/Pet';
import {createAPet} from '../services/pets';

export const create = async (req, res) => {
  let newPet;
  try {
    newPet = createAPet(req);
  } catch (e) {
    return res.sendStatus(404);
  }

  try {
    PetModel.create(newPet);
    res.sendStatus(201);
  } catch (e) {
    return res.sendStatus(505);
  }
};
