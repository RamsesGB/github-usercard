import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/RamsesGB',
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell',
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

for (let i = 0; i < followersArray.length - 1; i++) {
  axios
    .get(followersArray[i])
    .then((res) => {
      cardComponent(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function cardComponent(data) {
  let cardContainer = document.querySelector('.cards');

  //<div class="card">
  let cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  //<img>
  let userImg = document.createElement('img');
  userImg.setAttribute('src', data.avatar_url);

  //<div class="card-info">
  let cardInfoDiv = document.createElement('div');
  cardInfoDiv.className = 'card-info';

  //<h3 lass="name">
  let userNameTitle = document.createElement('h3');
  userNameTitle.className = 'name';
  userNameTitle.textContent = data.name;

  // <p class="username">{users user name}</p>
  let userName = document.createElement('p');
  userName.className = 'username';
  userName.textContent = data.login;

  // <p>Location: {users location}</p>
  let userLocation = document.createElement('p');
  userName.textContent = data.location;

  // <p>Profile:
  let profileParagraph = document.createElement('p');
  profileParagraph.textContent = 'Profile: ';

  // <a href={address to users github page}>{address to users github page}</a>
  let profileLink = document.createElement('a');
  profileLink.setAttribute('href', data.html_url);
  profileLink.textContent = data.html_url;

  //
  let followerCount = document.createElement('p');
  followerCount.textContent = `Followers: ${data.followers}`;

  //
  let followingCount = document.createElement('p');
  followingCount.textContent = `Following: ${data.following}`;

  // <p>Bio: {users bio}</p>
  let userBio = document.createElement('p');
  userBio.textContent = `Bio: ${data.bio}`;

  cardContainer.appendChild(cardDiv);

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);

  cardInfoDiv.appendChild(userNameTitle);
  cardInfoDiv.appendChild(userName);
  cardInfoDiv.appendChild(userLocation);
  cardInfoDiv.appendChild(profileParagraph);

  profileParagraph.appendChild(profileLink);

  cardInfoDiv.appendChild(followerCount);
  cardInfoDiv.appendChild(followingCount);
  cardInfoDiv.appendChild(userBio);

  return cardContainer;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
