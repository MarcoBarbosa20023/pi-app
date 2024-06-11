export const ApiService = {

    // fetch('https://5e9iqbmwn1.execute-api.eu-north-1.amazonaws.com/items')
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    //   setData(data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    get: async (url) => await fetch('https://5e9iqbmwn1.execute-api.eu-north-1.amazonaws.com/items')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    })
}


