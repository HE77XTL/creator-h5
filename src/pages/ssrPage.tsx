export default function SSRPage(props:any) {
  console.log(props);
  return <div>
    <span>SSRPage</span>
    <div>{props.he} </div>
  </div>;
}

export async function getServerSideProps() {
  return {
    props: {
      he: 77
    },
  };
}
