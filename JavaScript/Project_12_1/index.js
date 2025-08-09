let keyword = document.getElementById("keyword");
let count = 1;
let val;

const API_CONFIG = {
  baseUrl: 'https://api.unsplash.com/search/photos',
  access_Token_key: 'IOvvAzOmhSYxyB9HDazBCoaFS-4Xj1JYaVMd2UgOtdI',
  perPage: 12,
  // header: {}

}


// const options = {
//   method: 'GET',
//   header: {
//   }
// }



document.getElementById("btn").addEventListener("click", () => {
  count = 1;
  document.getElementById('allImg').innerHTML = ''
  val = keyword.value
  keyword.value = ''
  fetchImg(val)
});



async function fetchImg(val){
  let url = `${API_CONFIG.baseUrl}?page=${count}&query=${val}&client_id=${API_CONFIG.access_Token_key}&per_page=${API_CONFIG.perPage}`
  let responce = await fetch(url);

  let result = await responce.json();
  displayImg(result);

}

function displayImg(res){
    res.results.map((data) => {
    let div = document.createElement('div');
    div.setAttribute('class','singleImg');
        div.innerHTML = 
          `   <div class="firstDiv">
                <img src=${data.user.profile_image.large} alt="" class="userImg">
                <p class="userName">${data.user.name}</p>
              </div>
              <div class="secondDiv">
                <img src=${data.urls.regular} alt="" class="mainImg">
                <p class="imgDes">${data.alt_description || ''}</p>
              </div>
         `;
    

    document.getElementById('allImg').appendChild(div);
    document.getElementById('loadMoreBtn').style.display = 'inline-flex';
    document.getElementById('resetBtn').style.display = 'inline-flex';
    
  });
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  count++;
  fetchImg(val);
 

})

document.getElementById('resetBtn').addEventListener('click', () => {
  let clear = document.getElementById('allImg');

  clear.innerHTML = ''

  keyword.value = ''

  count = 1;

  val = '';
  document.getElementById('loadMoreBtn').style.display = 'none';
  document.getElementById('resetBtn').style.display = 'none';

})






// const url = `https://api.unsplash.com/search/photos?page=3&query=mobile&client_id=IOvvAzOmhSYxyB9HDazBCoaFS-4Xj1JYaVMd2UgOtdI&per_page=6`;


