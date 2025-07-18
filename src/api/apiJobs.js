import supabaseClinet from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClinet(token);

  let query = supabase.from("jobs").select(`
  *,
  company:comapnies(name, logo_url),
  saved:saved-jobs!saved-jobs_job_id_fkey(id, user_id)
`);

  if (location) {
    query = query.eq("location", location);
  }
  if (company_id) {
    query = query.eq("company_id", company_id);
  }
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.log("Error Fetching Jobs:", error);
    return null;
  }
  return data;
}

export async function saveJobs(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClinet(token);

  if (alreadySaved) {
    const { data, error: deleteError } = await supabase
      .from("saved-jobs")
      .delete()
      .eq("job_id", saveData.job_id);

    if (deleteError) {
      console.log("Error Deleting Saved Jobs:", deleteError);
      return null;
    }
    return data;
  } else {
    const { data, error: insertError } = await supabase
      .from("saved-jobs")
      .insert([saveData])
      .select();

    if (insertError) {
      console.log("Error Inserting Saved Jobs:", insertError);
      return null;
    }
    return data;
  }

  //   const { data, error } = await supabase.from("jobs").select(`
  //   *,
  //   company:comapnies(name, logo_url),
  //   saved:saved-jobs!saved-jobs_job_id_fkey(id, user_id)
  // `);

  // if (error) {
  //   console.log("Error Fetching Jobs:", error);
  //   return null;
  // }
  // return data;
}
