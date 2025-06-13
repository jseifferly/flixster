import { useState } from 'react';
import '../styles/LoadButton.css'

export default function LoadButton() {

    const [click, setClick] = useState();

    return (
        <div>
            <button className="loadMore">Load More</button>
        </div>
    );
}