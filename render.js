const Renderer=function(){
    let  renderPosts= function(posts){
        $("#posts").empty()

        for(let index in posts){
            $("#posts").append(`<div class=post id=${posts[index].id} data-id=${posts[index].id}><div class="post-text">${posts[index].text} </div></div>`)

            for(let indexTwo in posts[index].comments){
            $(`#${posts[index].id}`).append(`<div class=comments data-id=${posts[index].comments[indexTwo].id} ><span class="delete-comment"> X </span> ${posts[index].comments[indexTwo].text} </div>`)
            }
        }   
        $(".post").append(`<input  type="text" placeholder="whats on your mind">`)
        $(".post").append(`<button type="button" id="button">comment</button>`)
        $(".post").append(`<div><button type="button" class=delete >Delete Post</button></div>`)



    }
    return {
        renderPosts: renderPosts
    }
}