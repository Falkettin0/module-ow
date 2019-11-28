require ('isomorphic-fetch');

const Url = "https://ipinfo.io/json";
async function getInfo (url) {
    const response = await fetch(url) ;
    return response.json();
}

(async function main () {
    let ipInfo = await getInfo(Url);
    console.log(ipInfo);
 })
 ();