const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        isLiked: false,
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        isLiked: false,
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        isLiked: false,
        likes: 152
    }
]

function renderUserInfo(info) {
    const userInfoDiv = document.createElement('div')
    userInfoDiv.classList.add('user-info')

    const userDiv = document.createElement('div')
    userDiv.classList.add('user')

    const postProfileImg = document.createElement('img')
    postProfileImg.src = info.avatar
    postProfileImg.classList.add('post-profile-img')

    const textDiv = document.createElement('div')
    textDiv.classList.add('txt')

    const fullName = document.createElement('h3')
    // fullName.classList.add('user-full-name')
    fullName.textContent = info.name

    const loc = document.createElement('p')
    // loc.classList.add('location')
    loc.textContent = info.location

    const menuDiv = document.createElement('div')
    // menuDiv.classList.add('menu')

    const menuIcon = document.createElement('img')
    menuIcon.src = "/images/icons8_menu_vertical_2.svg"
    menuIcon.classList.add('menu-icon')

    textDiv.append(
        fullName,
        loc
    )
    userDiv.append(
        postProfileImg,
        textDiv
    )

    menuDiv.append(menuIcon)

    userInfoDiv.append(
        userDiv,
        menuDiv,
    )

    return userInfoDiv
}

function renderPostImg(image) {
    const postDiv = document.createElement('div')
    // postDiv.classList.add('post')

    const postImg = document.createElement('img')
    postImg.src = image.post
    postImg.classList.add('post-img')


    postDiv.append(
        postImg
    )

    return postDiv
}

function renderPostDetails(detail) {
    const postDetailsDiv = document.createElement('div')
    postDetailsDiv.classList.add('post-details')

    const iconsDiv = document.createElement('div')
    iconsDiv.classList.add('icons')

    const likeIcon = document.createElement('img')
    likeIcon.src = "/images/icon-heart.png"
    likeIcon.classList.add('like-icon')

    const commentIcon = document.createElement('img')
    commentIcon.src = "/images/icon-comment.png"
    commentIcon.classList.add('comment-icon')

    const shareIcon = document.createElement('img')
    shareIcon.src = "/images/icon-dm.png"
    shareIcon.classList.add('share-icon')

    const likesDiv = document.createElement('div')
    likesDiv.classList.add('like-number')
    likesDiv.textContent = `${detail.likes} likes`

    const postMsgDiv = document.createElement('div')
    postMsgDiv.classList.add('post-message')
    
    const postMsg = document.createElement('p')
    postMsg.innerHTML = `<strong>${detail.username}</strong> ${detail.comment}`

    iconsDiv.append(
        likeIcon,
        commentIcon,
        shareIcon
    )

    postMsgDiv.append(postMsg)

    postDetailsDiv.append(
        iconsDiv,
        likesDiv,
        postMsgDiv
    )

    likeIcon.addEventListener('click', () => {
        detail.isLiked = !detail.isLiked

        if (detail.isLiked) {
            detail.likes++
            likeIcon.src = "/images/icons8_Heart.svg"
        } else {
            detail.likes--
            likeIcon.src = "/images/icon-heart.png" 
        }

        likesDiv.textContent = `${detail.likes} likes`
    })

    return postDetailsDiv
}

function renderPost(singlepost) {
    const postCard = document.createElement('section')
    postCard.classList.add('post-card')

    const userInfoDiv = renderUserInfo(singlepost)
    const postDiv = renderPostImg(singlepost)
    const postDetailsDiv = renderPostDetails(singlepost)


    postCard.append(
        userInfoDiv,
        postDiv,
        postDetailsDiv
    )

    return postCard
}

const container = document.getElementById('main')
for (const post of posts) {
    container.appendChild(renderPost(post))
}

