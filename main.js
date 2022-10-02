async function postData(url = '', data = {}) {
    // Default options are marked with *
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Server': 'nginx/1.20.0',
          'Connection': 'keep-alive'
        },
        body: JSON.stringify(data)
    });

    const content = await rawResponse.json();
    console.log(content);
}

document.querySelector('.post').addEventListener('click', ()=>{
    const dataObject = {
        "roomid": `${document.querySelector('.roomid').value}`,
        "playerCount": 3,
        "playerData": {
            "player1": 100,
            "player2": 200,
            "player3": 170
        },
        "active": true
    }

    postData('http://uplayonline.ap-south-1.elasticbeanstalk.com/', dataObject)
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
})

