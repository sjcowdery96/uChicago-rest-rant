const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive"> No Comments Yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
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
                            <h2>Rating</h2>
                            <p>{data.place.rating}</p>
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
