import {useState, useEffect} from 'react';

interface TestData {
  name?: string;
  age?: string;
}

export default function Profile() {
  const [data, setData] = useState<TestData>({
    name: undefined,
    age: undefined,
  });
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  function addData() {
    fetch('http://localhost:3000/cats', {method: "POST"})
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          getData();
        });
  }

  function getData() {
    setLoading(true);
    fetch('http://localhost:3000/cats')
        .then((res) => res.json())
        .then((data) => {
          console.log('data');
          console.log(data);
          setData(data[0]);
          setTotal(data.length);
          setLoading(false);
        });
  }

  function onChange() {

  }

  return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.age}</p>
        <div>
          <input value={total} onChange={onChange} type="text"/>
          <div>
            <button onClick={addData}>add</button>
          </div>
        </div>
      </div>
  );
}
