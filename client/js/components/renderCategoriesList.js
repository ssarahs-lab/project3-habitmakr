export function renderCategoriesList(){

    page.innerHTML = ""

    let categoryNames = []
    let categoryImgURL = []

    axios
    .get("api/categories")
    .then((response) => {

        const a = document.createElement('a');
        response.data.forEach((category)=> {

          categoryNames.push(category.identities);
          categoryImgURL.push(category.image_related_identity_url)

          console.log(categoryNames)

           
            a.setAttribute('href', '#');
            a.innerHTML = category.identities;

            

        })

    })

}