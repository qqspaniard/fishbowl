import { usersCollection } from "../mongo.ts";

export default class User {
  static findOne(params: object) {
    return usersCollection.findOne(params);
  }
}