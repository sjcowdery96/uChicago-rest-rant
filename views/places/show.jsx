const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive"> No Comments Yet!</h3>
    )
    let rating = (
        <h3 className="inactive"> No Ratings Yet!</h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! :-(' : 'Rave! :-)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="twin-displays">
                    <div>
                        <div>
                            <h1>{data.place.name}</h1>
                            <h2>Rating: {rating}</h2>
                        </div>
                        <div>
                            <h3>{data.place.showEstablished()}</h3>
                            <h4>{data.place.city} , {data.place.state} </h4>
                            <p>Come visit {data.place.name}! best known for our {data.place.cuisines} cuisines!</p>
                        </div>
                    </div>
                    <div>
                        <img src={data.place.pic} alt={data.place.name}></img>
                    </div>
                    <div>
                        <h2>{comments}</h2>
                    </div>
                </div>
                <div>
                    <h3>Leave a comment</h3>
                    <form method="POST" action={`/places/${data.place.id}/comment`}>
                        <div className="form-group">
                            <label htmlFor="author">Author:</label>
                            <input type="text" id="author" name="author" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content:</label>
                            <textarea id="content" name="content" rows="5" cols="30" required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stars">Star Rating:</label>
                            <input type="number" id="stars" name="stars" step="0.5" min="0" max="5" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rant">Rant:</label>
                            <input type="checkbox" id="rant" name="rant" />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Comment" />
                    </form>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show


/*


*/