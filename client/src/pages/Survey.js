import React from "react";
export default function Survey(){
    return (
        <div>
            <h1> Rate a class! </h1>
            <form className="survey-questions">
                <h2>
                    What class is this for?
                    {/* Should we use a dropdown? */}
                    <input type="text"/>
                </h2>
                <h2> Professor <input type="text"/> </h2>
                <h2> Year <input type="text"/> </h2>
                <h2> Semester <input type="text"/> </h2>
                <h2> Difficulty <input type="text"/> </h2>
                <h2> Grade Received <input type="text"/> </h2>
                <h2> Required textbooks <input type="text"/> </h2>
                <h2> Hours a week for homework <input type="text"/> </h2>
                <h2> Number of midterms <input type="text"/> </h2>
                <h2> Has a no homework option <input type="checkbox" value="true" /> </h2>
                <h2> Has a clobber policy <input type="checkbox" value="true" /> </h2>
                <h2> Has mandatory discussion attendance <input type="checkbox" value="true" /> </h2>
                <h2> Prereqs/coreqs <input type="text"/> </h2>
                <h2> Classes to help prepare <input type="text"/> </h2>
                <h2> Next classes to take <input type="text"/> </h2>
            </form>
        </div>
    )
}