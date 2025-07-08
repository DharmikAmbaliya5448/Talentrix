import { useEffect } from "react";
import { useSession } from "@clerk/clerk-react";
import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";

const JobListing = () => {
  const { session, isLoaded } = useSession();

  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
    error: errorJobs,
  } = useFetch(getJobs);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!isLoaded || !session) return;

      const token = await session.getToken({ template: "supabase" });

      fnJobs(token); // ✅ pass the token to your getJobs call
    };

    fetchJobs();
  }, [isLoaded, session]);

  console.log("dataJobs:", dataJobs);

  return <div>Job Listing...</div>;
};

export default JobListing;
