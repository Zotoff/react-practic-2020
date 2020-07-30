import React from 'react'

const Repos = ({repos}) => {
    return (
        <React.Fragment>
            {
                repos.map((repo, index) => (
                    <div className="card mb-3" key={index}>
                        <div className="card-body">
                            <a rel="noopener noreferrer" href={repo.html_url} target="_blank">{repo.name}</a>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default Repos;