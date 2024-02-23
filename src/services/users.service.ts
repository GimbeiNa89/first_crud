import { User } from "../models/user.model";
import { IUser } from "../types/user.type";

export const showUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const createUser = async (user: IUser): Promise<IUser> => {
  return await User.create(user);
};
