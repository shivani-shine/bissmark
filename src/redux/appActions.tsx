import { SHOW_SIDEBAR } from "./types";

export const sideBarHandlerAction = (data:any) => {
 // console.log("DATA IN ACTION", data);
  return{
    type: SHOW_SIDEBAR,
    payload: data,
  };
};
