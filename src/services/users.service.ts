// import { users } from "../data/user.data";
import { User } from "../models/user.model";
import { IUser } from "../types/user.type";

export const showUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const showUserById = async (id: string): Promise<IUser | null> => {
  // const foundUser = await User.findById(id);
  // return foundUser as IUser; da capire percè fa funzionare
  return await User.findById(id);
};

export const createUser = async (user: IUser): Promise<IUser> => {
  return await User.create(user);
};

export const updateUserById = async (
  id: string,
  user: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
  // return { users } as IUser;
};

// node è un esecutore di javascript che serve per gestire chiamate web e gestire database o software?
/*
export const showUserById = async ( id: IUser ): Promise<IUser> {
  const foundUser = User.findById(_id: );
  return await foundUser; vers. sbagliata.
};
*/
//node MVC separa il model dalla view e funzioni da cercare. è un tipo di architettura. ha a che fare con i controller in un altro file.
//paradigma{filosofia in cui tutto il mio codice lo scrivo tramite i criteri di Object Oriented Programming) e pattern (come scegli di strutturare il tuo codice)
// consistenza tra tipo di promise e tipo di return
// chiave secondaria o esterne, collegamento esterno tra dati di tabelle(php) o collezioni (mongodb)
// database ti tipo SQL sono fatti con codici forse troppo statici che non permettono molti cambiamenti, per quanto riguarda
// anche i collegamenti di chiavi, ovviamente ha il vantaggio di essere più sicuro e con percorsi piu definiti nel caso di query ''incrociata' tra più database?
// per questo si è passato man mano a database di tipo NOSQL. dove si gestisce meglio il database a livello di codice.
// costum headers
