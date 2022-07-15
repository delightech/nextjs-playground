import {octokit} from "@/utils/fetcher";

export const getStaticProps = async () => {
  const repos = await octokit.request(
    "GET /users/{username}/repos",
    { username: "delightech" }
  );
  return {props: {repos}};
};

export default function Page(props: any){
  if(!props.repos.data) return <>error!</>;
  console.log(props.repos.data);
  return <div>Hello Next.js</div>;
}