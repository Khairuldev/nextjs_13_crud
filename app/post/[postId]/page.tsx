//cara memnggunakan dynamic parameter

function Index({ params }: { params: { postId: string } }) {
  return <div>Post Detail {params.postId}</div>;
}

export default Index;
