import supabaseClinet from "@/utils/supabase";

export async function getCompanies(token) {
  const supabase = await supabaseClinet(token);

  const { data, error: error } = await supabase.from("companies").select("*");

  if (error) {
    console.log("Error Fetching Companies:", error);
    return null;
  }
  return data;
}
