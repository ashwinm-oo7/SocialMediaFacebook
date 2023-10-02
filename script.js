var settingsmenu =document.querySelector(".settings-menu");
var darkBtn= document.getElementById("dark-btn");
const commentsIcon = document.getElementById("comments-icon");
const commentsBox = document.getElementById("comments-box");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
        }
}

if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");        
    document.body.classList.remove("dark-theme");

}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");        
    document.body.classList.add("dark-theme");
    
}
else{
    localStorage.setItem("theme", "light");
}
// ------modify----------------------------------------------------------
function toggleCommentsBox() {
    if (commentsBox.style.display === "none" || commentsBox.style.display === "") {
        commentsBox.style.display = "block"; // Show the comments box
    } else {
        commentsBox.style.display = "none"; // Hide the comments box
    }
}

// Add a click event listener to the comments icon
commentsIcon.addEventListener("click", toggleCommentsBox);

    // Function to post a comment
    // function postComment() {
    //     const commentInput = document.getElementById("comment-input");
    //     const commentsArea = document.getElementById("comments-area");
    //     const commentText = commentInput.value.trim();

    //     if (commentText !== "") {
    //         // Create a new comment element
            // const commentElement = document.createElement("div");
            // commentElement.className = "comment";
            // commentElement.innerText = commentText;

            // Append the comment element to the comments area
            // const commentsArea = document.getElementById("comments-area");

            // commentsArea.appendChild(commentElement);

            // Clear the comment input field
            // commentInput.value = "";

              // Hide the comment box after posting
    //           const commentsBox = document.getElementById("comments-box");
    //           commentsBox.style.display = "none";

    //                       // Show the comments container
    //           commentsContainer.style.display = "hide";

    //     }
    // }

    // Get a reference to the post comment button
    // const postCommentButton = document.getElementById("post-comment-button");

    // Add a click event listener to the post comment button
    // postCommentButton.addEventListener("click", postComment);


    var thisurl = document.URL;
function changeCommentsUrl(newUrl){
// should refresh fb comments plugin for the "newUrl" variable
document.getElementById('thecomments').innerHTML='';
parser=document.getElementById('thecomments');
parser.innerHTML='<div class="fb-comments" data-href="'+newUrl+'" data-num-posts="10" data-width="400"></div>';
FB.XFBML.parse(parser);
}
changeCommentsUrl(thisurl);
