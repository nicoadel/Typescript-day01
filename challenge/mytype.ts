var itemsData = jsonMeals;

document.getElementById("item_container").innerHTML =
        `${itemsData.map(itemRestaurant).join('')}`


    function itemRestaurant(item) {
        return `
                <div class="col-lg-4 col-md-6 col-sm-6 col-xsm-12 ">
                <div class="block_element rounded">
                    <img class="p-2 rounded" src="${item.photo}" alt="">
                    <div class="movie_description">
                        <h4 class="pt-3  font-weight-bold text-center">${item.name}</h4>
                        <h5>${item.art}</h5> 
                        <h5 class="">${item.description}</h5>
                        <p class="d-flex justify-content-end mr-3"><button class="like btn btn-success mr-3">Like</button><span class="d-flex justify-content-center align-items-center font-weight-bold font-italic rounded-circle" id="item_likes">${item.likes}</span><p>
                    </div>
                </div>
            </div>
                `
    }

 $(".like").click(like);

    function like(element) {


        let temp = Number($(this).next().html());
        temp += 1;
        
        $(this).next().html(String(temp));
       let test = $(this).parent().parent().children();
        console.log(test.html());
        console.log(itemsData[1].name);
        for (let i = 0; i <= itemsData.length; i++)
        {
            console.log(i);
            if(itemsData[i].name == test)
            {
                itemsData[i].like += 1;
                console.log(itemsData[i].likes);

            }
        }
    }
