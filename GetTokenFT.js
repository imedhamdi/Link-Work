const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "BIGipServerPOOL_PROD02-SDDC-K8S_HTTPS=!Pp4Z7NDlsybnU93h+F8cTPNdVNh0Tll8uE5FvRMNEN3rYHzxRq61F1PufBY0nwURQ5MB7+Gddw4LTQ==; BIGipServerPOOL_PROD_HTTP_ERR=!69du9xZIcCjcqxfh+F8cTPNdVNh0Tk/iVgk40Lq5XjLw/aBwyz2I7/3QxFjipNJeLSZ95bih7rzh; TS01140659=01b3abf0a2cf9d3499b1e3a47ba78c71d00d81613db40037fe35e0637da8bb8466253f155bc8a91a7c67d204ad4e4a99afa3ff4ad7; so007-peame-affinity-prod-p=80164a2ef7b13035");

const urlencoded = new URLSearchParams();
urlencoded.append("Content-Type", "application");
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("scope", "api_offresdemploiv2 o2dsoffre");
urlencoded.append("client_id", "PAR_jobfinder_7c538b1b3986d86614a42165ce6f50d8e925e086ac9b26e88654483502e65754");
urlencoded.append("client_secret", "a4a9f87a2e3e4c2291a01f99d600431a515edc0abd8b6a69f317b70753910680");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("https://entreprise.francetravail.fr/connexion/oauth2/access_token?realm=%2Fpartenaire", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));