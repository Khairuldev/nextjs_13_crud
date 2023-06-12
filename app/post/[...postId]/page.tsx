//cara memnggunakan catch all aroud

function Index({ params }: { params: { postId: string } }) {
  console.log(params);

  return <div>Post list Detail {params.postId[4]}</div>;
}

export default Index;
