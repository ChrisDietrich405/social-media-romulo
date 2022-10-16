export const helloFunc = () => {
  console.log("hello")
}



export const login = (username: string, password: string) => {

  if (username === "harry" && password === "password") {
    return true;
  } else {
    return false
    // throw new Error("big big problems");
  }
}
