import supabaseClinet from "@/utils/supabase";

export async function getJobs(token) {
  const supabase = await supabaseClinet(token);

  let query = supabase.from("jobs").select("*");

  const { data, error } = await query;

  if (error) {
    console.log("Error Fetching Jobs:", error);
    return null;
  }
  return data;
}
