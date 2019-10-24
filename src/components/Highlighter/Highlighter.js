import React from 'react';
import HighlighterItem from '../HighlighterItem/HighlighterItem';

const Highlighter = ({hightlights}) => {

    return(
        <div className="columns pd">
            {hightlights.map(hightlight => <HighlighterItem title={hightlight.title} subtitle={hightlight.subtitle}/>)}
        </div>
    ) 
}

export default Highlighter;