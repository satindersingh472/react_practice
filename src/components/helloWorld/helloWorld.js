import Styles from "./helloWorld.module.scss";
import Button from "@mui/material/Button";
import axios from "axios";




export default function HelloComp() {
    return (
    <div>
      <h1 className={Styles.hello}>Hello World.</h1>
      <Button variant="contained" color="success" onClick={api_call} >
        Click me
      </Button>
      <div className="txt" id="txt" >
         </div>
    </div>
  );
    };

function api_call() {
  axios
    .request({
        url: 'https://dog-api.kinduff.com/api/facts'
    })
    .then((response) => {
      document.getElementById('txt')['innerHTML'] = `<h3>${response['data']['facts']}</h3>`
    })
    .catch((error) => {
      document.getElementById('txt').innerHTML = `<h3>${error}</h3>`;
    });
}
