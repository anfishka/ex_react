import axios from 'axios'

function fetchRegistrationPlate() {
  let api_key = "6adb8dac3bcd1e82b8f138233342b2b1";
  //    let url = `https://baza-gai.com.ua/nomer/${registration_plate}`;
 // let url = `https://baza-gai.com.ua/nomer/AE4000IT`;
  let url = `https://baza-gai.com.ua/make/lamborghini/huracan`;


  axios.get(url, { headers: {
    Accept: "application/json",
    "X-Api-Key": api_key,
  },
})
    .then((r) => {
      console.log(r);
      if (r.data.error) {
        console.log(r.data.error);
      } else {
        console.log(r.data);
      }
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
   
    });
}

function ApiGai() {
  return (
    <>
      
    </>
  );
}

export default ApiGai;
