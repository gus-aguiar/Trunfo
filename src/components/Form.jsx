import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome da Carta
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição da carta
          <input
            data-testid="description-input"
            type="textarea"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="atk">
          Attack da carta
          <input
            data-testid="attr1-input"
            type="number"
            name="atk"
            id="atk"
          />
        </label>
        <label htmlFor="def">
          Defesa da carta
          <input
            data-testid="attr2-input"
            type="number"
            name="def"
            id="def"
          />
        </label>
        <label htmlFor="agi">
          Agilidade da carta
          <input
            data-testid="attr3-input"
            type="number"
            name="agi"
            id="agi"
          />
        </label>
        <label htmlFor="image">
          Imagem da Carta
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
          />
        </label>
        <label htmlFor="select">
          Raridade da Carta
          <select name="select" id="select" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id="trunfo"
          />
        </label>
        <button
          type="submit"
          name="salvar"
          id="salvar"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
