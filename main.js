const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
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


const myContainer = document.getElementById("container");


for(let i = 0; i < posts.length; i++){
    
    let postsElement = posts[i];

    // creo gli elementi

    const divPost = document.createElement("div");
    divPost.className = "post";
    myContainer.append(divPost);

    const divPostHeader = document.createElement("div");
    divPostHeader.className = "post__header";
    divPost.append(divPostHeader);

    // div post-meta   dove appendo post-meta__icon && post-meta__data
    const divPostMeta = document.createElement("div");
    divPostMeta.className = "post-meta";
    divPostHeader.append(divPostMeta);

    // div class post-meta__icon
    const divPostMetaIcon = document.createElement("div");
    divPostMetaIcon.className = "post-meta__icon";
    divPostMeta.append(divPostMetaIcon);


    const imgProfile = document.createElement("img");
    imgProfile.className = "profile-pic";
    imgProfile.src = postsElement.author.image;
    imgProfile.alt = postsElement.author.name;
    divPostMetaIcon.append(imgProfile);


    // div class post-meta__data
    const divPostMetaData = document.createElement("div");
    divPostMetaData.className = "post-meta__data";
    divPostMeta.append(divPostMetaData);

    const divPostaMetaAuthor = document.createElement("div");
    divPostaMetaAuthor.className = "post-meta__author";
    divPostaMetaAuthor.append(postsElement.author.name);
    divPostMeta.append(divPostaMetaAuthor);

    const divPostMetaTime = document.createElement("div");
    divPostMetaTime.className = "post-meta__time";
    divPostMetaTime.append(postsElement.created);
    divPostMetaData.append(divPostMetaTime);
}