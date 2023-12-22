import { supabase } from "../lib/supabase";

export const signUpUser = async (
  email: string,
  password: string,
  username: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });
  if (data) {
    console.log("Holaaa estas registrado");
    return console.log(data);
  }
  if (error) return console.log("error");
};
