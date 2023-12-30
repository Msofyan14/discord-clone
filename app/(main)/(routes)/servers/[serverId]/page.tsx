interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const SeverIdPage = async ({ params }: ServerIdPageProps) => {
  return <div>{params.serverId}</div>;
};

export default SeverIdPage;
