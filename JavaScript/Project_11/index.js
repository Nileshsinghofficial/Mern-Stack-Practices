const user = document.getElementById('userId');
const User_img = document.getElementById('userImg');
const User_name = document.getElementById('userName');
const User_Bio = document.getElementById('userBio');

const Follower = document.getElementById('repo1');
const Following = document.getElementById('repo2');
const Repo = document.getElementById('repo3');


const vistProfile_url = document.getElementById('vistProfile');


const notFound = document.getElementById('notFoundMessage');


async function fetchUser(username) {

    notFound.style.display = 'none';
    document.querySelector('.secondDiv').style.display = 'none';
    
    try{
        let responce = await fetch(`https://api.github.com/users/${username}`);
        let result = await responce.json();
        // console.log(result)
        
        
         
        if (result.message === "Not Found") {
            notFound.textContent = '❌ User Not Found!';
            notFound.style.display = 'block';
            
            return;
        }
    
        

        const {avatar_url, name, bio, followers, following,public_repos, html_url} = result


        User_img.src = avatar_url
        User_name.textContent = name || 'No name available';

        User_Bio.textContent = bio || '';

        Follower.textContent = followers;
        Following.textContent = following;
        Repo.textContent = public_repos;

        vistProfile_url.href = html_url;

        document.querySelector('.secondDiv').style.display = 'flex';


        

    } catch (e){
        console.log('failed to fetch',e)
        notFound.style.display = 'block';
        // document.querySelector('.secondDiv').style.display = 'none';
    }

    
}




document.getElementById('btn').addEventListener('click', () => {
    let userId = user.value.trim()
    if (userId === '') {
        notFound.textContent = '⚠️ Please enter a username.';
        notFound.style.display = 'block';
        document.querySelector('.secondDiv').style.display = 'none';
        return;
    }

    fetchUser(userId);
    
})
