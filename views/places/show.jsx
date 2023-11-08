const React = require('react')
const Def = require('../default')

function show(data) {
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
                            <h3>{data.place.city} , {data.place.state} </h3>
                            <p>Come visit {data.place.name}! best known for our {data.place.cuisines} cuisines!</p>
                        </div>
                    </div>
                    <div>
                        <img src={data.place.pic} alt={data.place.name}></img>
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
