const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        isLiked: false,
        isFollowing: false,
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
        isFollowing: false,
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
        isFollowing: false,
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
    menuDiv.classList.add('menu')

    const btn = document.createElement('button')
    btn.textContent = "Follow"
    btn.classList.add('follow-btn')

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

    menuDiv.append(
        btn,
        menuIcon

    )

    userInfoDiv.append(
        userDiv,
        menuDiv,
    )

    btn.addEventListener('click', () => {
        info.isFollowing = !info.isFollowing

        if (info.isFollowing) {
            btn.textContent = "Following"
            btn.classList.add('following-btn')
        } else {
            btn.textContent = "Follow"
            btn.classList.remove('following-btn')
        }
    })

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

    const txtInputDiv = document.createElement('div')
    txtInputDiv.classList.add('txt-input')

    const txtInput = document.createElement('input')
    txtInput.classList.add('input')

    const sendIcon = document.createElement('img')
    sendIcon.src = "/images/icons8_paper_plane.svg"
    sendIcon.classList.add('send-icon')

    iconsDiv.append(
        likeIcon,
        commentIcon,
        shareIcon
    )

    txtInputDiv.append(
        txtInput,
        sendIcon
    )

    postMsgDiv.append(
        txtInputDiv,
        postMsg
    )

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

    commentIcon.addEventListener('click', () => {
        txtInputDiv.classList.toggle('is-flex')
    })

    txtInput.addEventListener('blur', () => {
        txtInputDiv.classList.remove('is-flex')
    })

    sendIcon.addEventListener('click', () => {
        txtInput.value = ""
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

