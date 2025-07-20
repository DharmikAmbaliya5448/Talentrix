import supabaseClinet, { supabaseUrl } from "@/utils/supabase";

export async function applyToJob(token, _, jobData) {
  const supabase = await supabaseClinet(token);

  const random = Math.floor(Math.random() * 90000);
  const fileName = `resume-${random}-${jobData.candidate_id}`;

  const { error: storageError } = await supabase.storage
    .from("resumes")
    .upload(fileName, jobData.resume);

  if (storageError) {
    console.log("Error Uploading Resume:", storageError);
    return null;
  }

  const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;
 
  console.log(supabaseUrl);
  console.log(resume);

  

  const { data, error } = await supabase
    .from("application")
    .insert([
      {
        ...jobData,
        resume,
      },
    ])
    .select();

  if (error) {
    console.log("Error Submitting Application:", error);
    return null;
  }
  return data;
}
