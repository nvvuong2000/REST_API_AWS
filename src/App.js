import './App.css';
import axios from "axios";
import { useState, useEffect} from "react"

function App() {
  
  const [products, setProduct] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get('https://fbjlr2p7xi.execute-api.us-east-2.amazonaws.com/test/iots')
        .then((res) => { setProduct(res.data) })
      } catch (error) {
        console.log('Failed to fetch posts: ', error.message);
      }
    }
    fetchData();
  }, []);

  return (

    <div className="App">
      <ul>
        {products.iots&&
          products.iots.map((item,index) => {
            return (
              <li key={index}>
                <div className="content">
                  <i className="las la-otter" />
                  <div>
                    <h1>{item.temp}</h1>
                    <h2>timeStamp:{item.timestamp}-co2:{item.co2}-hum:{item.hum}-light:{item.light}</h2>
                  </div>
                </div>
              </li>
            )
          }
          )}


      </ul>





    </div>
  );
}

export default App;
