import React from 'react';

const HighlighterItem = ({title, subtitle}) => {

    return (
        <div className="column highlight">
            <div className="card">
                <div className="card-content">
                    <p className="title">{ title }</p>
                    <p className="subtitle">{ subtitle }</p>
                </div>
            </div>
        </div>
    );
}

export default HighlighterItem;

