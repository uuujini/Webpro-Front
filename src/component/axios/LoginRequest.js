import request from "./axios";

export const LoginGoogle = async () => {
  return await request.get(`user/retrieveAll`);
};
