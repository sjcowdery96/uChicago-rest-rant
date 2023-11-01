const React = require('react')
const Def = require('./default')


function error404() {
    return (
        <Def>
            <main>

                <div>
                    <h1>404: PAGE NOT FOUND</h1>
                    <p>...enjoy this kitten instead</p>
                    <img src="https://placekitten.com/408/287" alt="placekitten" />
                </div>


            </main>
        </Def>
    )
}


module.exports = error404
