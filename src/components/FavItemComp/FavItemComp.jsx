import React from 'react';





function FavItemComp() {
    return (
        <div>
            <select name="category" id="category">
                <option value="category"></option>
                <option value="funny">funny</option>
                <option value="cohort">cohort</option>
                <option value="cartoon">cartoon</option>
                <option value="nsfw">nsfw</option>
                <option value="meme">meme</option>
            </select>
        </div>
    );
}

export default FavItemComp;