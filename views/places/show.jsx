const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div class="twin-displays">
                    <div>
                        <div>
                            <h1>{data.place.name}</h1>
                            <h2>Rating</h2>
                            <p>{data.place.rating}</p>
                        </div>
                        <div>
                            <h3>{data.place.city} , {data.place.state} </h3>
                            <p>Come visit {data.place.name}! best known for our {data.place.cuisines} cuisine!</p>
                        </div>
                    </div>
                    <div>
                        <img src={data.place.img} alt={data.place.name}></img>
                    </div>

                </div>
            </main>
        </Def>
    )
}

module.exports = show
