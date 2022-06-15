export function renderCategoriesList(){

    page.innerHTML = ""

    let categoryNames = []
    let categoryImgURL = []

    axios
    .get("api/categories")
    .then((response) => {

        let divCard = document.createElement('div');
        let categoryLink = document.createElement('a');
        let img = document.createElement('img');
       

        divCard.classList.add("card")

        response.data.forEach((category)=> {

          categoryNames.push(category.identities);
          categoryImgURL.push(category.image_related_identity_url)

          console.log(categoryNames)
            
          page.appendChild(divCard)
        
            categoryLink.setAttribute('href', '#');
            categoryLink.innerHTML = category.identities;

            img.src = category.image_related_identity_url


            divCard.appendChild(img)
            divCard.appendChild(categoryLink)

        })

    })

}