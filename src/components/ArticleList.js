import Article from './Article'

function ArticleList({posts}){
    console.log(posts)
    let article = posts.map((post) => { 
        return (<Article title = {post.title} date = {post.date} preview = {post.preview} key = {post.id}/>)
    })

    return (
        <main>
            {article}
           {/* <Article date = 'January 1, 1970' /> */}
        </main>
    )
}

export default ArticleList