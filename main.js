const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=15",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



for (let i = 0; i < posts.length; i++) {
   
    let postsElement = posts[i];
  

    const myContainer = document.getElementById("container").innerHTML += `

    <div class="post">
            
            <div class="post__header">

                <div class="post-meta">    

                    <div class="post-meta__icon">

                    <img class="profile-pic" src="${postsElement.author.image}" alt="${postsElement.author.name}"> 

                    </div>
                    <div class="post-meta__data">

                        <div class="post-meta__author">
                        ${postsElement.author.name}
                        </div>

                        <div class="post-meta__time">${postsElement.created}</div>
                    </div>                    
                </div>
            </div>

            <div class="post__text">${postsElement.content}</div>
            
            <div class="post__image">
                <img src="${postsElement.media}" alt="">
            </div>




            <div class="post__footer">

                <div class="likes js-likes">

                    <div class="likes__cta">

                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>

                    <div class="likes__counter">

                        Piace a <b id="like-counter-1" class="js-likes-counter">${postsElement.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>

       
    `;


}




// for (let i = 0; i < posts.length; i++) {

//     let postsElement = posts[i];

//     // creo gli elementi

//     // const divPost = document.createElement("div");
//     // divPost.className = "post";
//     // myContainer.append(divPost);

//     // // div post-header

//     // const divPostHeader = document.createElement("div");
//     // divPostHeader.className = "post__header";
//     // divPost.append(divPostHeader);

//     // // div post-meta   dove appendo post-meta__icon && post-meta__data
//     // const divPostMeta = document.createElement("div");
//     // divPostMeta.className = "post-meta";
//     // divPostHeader.append(divPostMeta);

//     // // div class post-meta__icon
//     // const divPostMetaIcon = document.createElement("div");
//     // divPostMetaIcon.className = "post-meta__icon";
//     // divPostMeta.append(divPostMetaIcon);


//     // const imgProfile = document.createElement("img");
//     // imgProfile.className = "profile-pic";
//     // imgProfile.src = postsElement.author.image;
//     // imgProfile.alt = postsElement.author.name;
//     // divPostMetaIcon.append(imgProfile);


//     // // div class post-meta__data
//     // const divPostMetaData = document.createElement("div");
//     // divPostMetaData.className = "post-meta__data";
//     // divPostMeta.append(divPostMetaData);

//     // const divPostaMetaAuthor = document.createElement("div");
//     // divPostaMetaAuthor.className = "post-meta__author";
//     // divPostaMetaAuthor.append(postsElement.author.name);
//     // divPostMeta.append(divPostaMetaAuthor);

//     // const divPostMetaTime = document.createElement("div");
//     // divPostMetaTime.className = "post-meta__time";
//     // divPostMetaTime.append(postsElement.created);
//     // divPostMetaData.append(divPostMetaTime);


//     // // div post__text

//     // const divPostText = document.createElement("div");
//     // divPostText.className = "post__text";
//     // divPostText.append(postsElement.content);
//     // divPost.append(divPostText);

//     // // div post__image
//     // const divPostImage = document.createElement("div");
//     // divPostImage.className = "post__image";
//     // divPost.append(divPostImage);

//     // const imgPostImage = document.createElement("img");
//     // imgPostImage.src = postsElement.media;
//     // imgPostImage.alt = "";
//     // divPostImage.append(imgPostImage);



//     // // div post footer

//     // // div likes button

//     // const divPostFooter = document.createElement("div");
//     // divPostFooter.className = "post__footer";
//     // divPost.append(divPostFooter);

//     // const divLikesJsLikes = document.createElement("div");
//     // divPostFooter.className = "likes";
//     // divPostFooter.append(divLikesJsLikes);

//     // const divLikesCta = document.createElement("div");
//     // divLikesCta.className = "likes__cta";
//     // divLikesJsLikes.append(divLikesCta);

//     // const aLinkButton = document.createElement("a");
//     // aLinkButton.className = "like-button";
//     // divLikesCta.append(aLinkButton);

//     // const iLikeButton = document.createElement("i");
//     // iLikeButton.className += `like-button__icon fas fa-thumbs-up`;
//     // aLinkButton.append(iLikeButton);

//     // const spanLikeButton = document.createElement("span");
//     // spanLikeButton.className = "like-button__label";
//     // spanLikeButton.innerHTML += `Mi Piace`;
//     // iLikeButton.append(spanLikeButton);

//     // // div counter

//     // const divLikesCounter = document.createElement("div");
//     // divLikesCounter.className = "likes__counter";

//     // const bLikeCounter = document.createElement("b");
//     // bLikeCounter.id

//     // divLikesCounter.innerHTML += `Piace a ${bLikeCounter} ${postsElement.likes} `;
//     // divLikesJsLikes.append(divLikesCounter);






// }