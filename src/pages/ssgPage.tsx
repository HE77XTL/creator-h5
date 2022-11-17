export default function SSGPage(props: any) {
  return <div>
    <span>SSG  Page</span>
    <div>{props.he} </div>
  </div>;
}

export async function getStaticProps() {
  return {
    props: {
      he: 88
    },
  };
}
