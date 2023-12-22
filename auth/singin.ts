import { supabase } from "../lib/supabase";

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data) {
      return data;
    }
  } catch (error) {}
};
