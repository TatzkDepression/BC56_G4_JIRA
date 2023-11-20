import React from 'react'

const Breadcrumb = ({title}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
                <li className="breadcrumb-item">Project</li>
                <li className="breadcrumb-item">ReactJS Jira Clone</li>
                <li className="breadcrumb-item active" aria-current="page">
                    {title}
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb