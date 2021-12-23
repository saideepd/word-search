import React from 'react'
import './Definitions.css'

const Definitions = ({ word, meanings, category, status }) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && status === 200 && (category === 'en' || category === 'en_GB') && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{ backgroundColor: "white", borderRadius: 10 }}
                        controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>
                )
            }
            {word === "" ? (<span className="subTitle">Start by typing a word in Search</span>)
                : word !== "" && status === 404 ? (<span className="subTitle">Sorry pal, no definitions found.<br />Start by typing another word in Search</span>)
                    : (
                        meanings.map((mean) =>
                            mean.meanings.map((item) =>
                                item.definitions.map((def) => (
                                    <div
                                        className="singleMean"
                                        style={{ backgroundColor: 'white', color: 'black' }}
                                    >
                                        <b>{def.definition}</b>
                                        <hr style={{ backgroundColor: "black", width: "100%" }} />

                                        {def.example && (
                                            <span>
                                                <b>Example : </b>
                                                {def.example}
                                            </span>
                                        )}
                                        <br />
                                        {def.synonyms && (
                                            <span>
                                                <b>Synonyms : </b>
                                                {def.synonyms.map((s) => s).join(', ')}
                                            </span>
                                        )}
                                    </div>
                                ))
                            )
                        )
                    )
            }
        </div>
    )
}

export default Definitions
