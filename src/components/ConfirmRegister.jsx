import { Auth } from "aws-amplify";

export default async function confirmSignUp() {
  let username = "garrettkchun@yahoo.com";
  let code = "012971";
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}
