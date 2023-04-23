import "./aboutMe.css";

export default function AboutMe(){
    return(
      <div className="aboutMe">
        <div className="head">
          <div className="title">
           <h2>ABOUT ME</h2>
          </div>
          <div className="edit-button">
            <button>Edit</button>
          </div>
        </div>
        <div className="typeSec">
          <textarea type="text" placeholder="Add something about you." className="type" ></textarea> 
        </div>
      </div>
    );
}