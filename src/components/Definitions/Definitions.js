import React from 'react'
import './Definitions.css'

const Definitions = ({ word, meanings, category, status, darkMode }) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && status === 200 && (category === 'en' || category === 'en_GB') && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{
                            borderRadius: 25,
                            boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 30%)",
                            transition: "all 0.5s linear"
                        }}
                        controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>
                )
            }
            {word === "" ? (<span className="subTitle">Start by typing a word in Search</span>)
            : word !== "" && status === 404 && !(category === "en" || category === "en_GB") ? (<span className="nonEnglishSubTitle">Sorry pal, unfortunately the language is no longer supported.<br />Currently only English language is supported.</span>)
                : word !== "" && status === 404 && (category === 'en' || category === 'en_GB') ? (<span className="subTitle">Sorry pal, no definitions found.<br />Start by typing another word in Search</span>)
                    : (
                        meanings.map((mean) =>
                            mean.meanings.map((item) =>
                                item.definitions.map((def) => (
                                    <div
                                        key={def.definition}
                                        className="singleMean"
                                        style={{
                                            backgroundColor: darkMode ? 'white' : '#282c34',
                                            color: darkMode ? 'black' : 'white',
                                            boxShadow: "0px 5px 15px 0px rgb(0 0 0 / 25%)",
                                            transition: "all 0.5s ease-in-out"
                                        }}
                                    >
                                        <b>{def.definition}</b>
                                        {/* The API was updated & support for synonyms, antonyms was dropped. So, I had to add check to display synonyms only if the property exists. */}
                                        {(def.example || (def.synonyms && def.synonyms.length > 0)) &&
                                            <hr style={{
                                                backgroundColor: "black",
                                                width: "100%"
                                            }}
                                            />
                                        }

                                        {def.example && (
                                            <span>
                                                <b>Example : </b>
                                                {def.example}
                                            </span>
                                        )}
                                        {/* The API was updated & support for synonyms, antonyms was dropped. So, I had to add check to display synonyms only if the property exists. */}
                                        {def.example && (def.synonmys && def.synonmys.length > 0) && (<br />)}
                                        {def.synonyms && def.synonyms.length > 0 && (
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
