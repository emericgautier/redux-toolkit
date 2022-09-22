import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form>
          <input type="text" placeholder="Artiste" />
          <input type="text" placeholder="Année" />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
