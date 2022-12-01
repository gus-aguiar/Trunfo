import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    atk: 0,
    def: 0,
    agi: 0,
    image: '',
    select: 'normal',
    trunfo: false,
    salvar: true,
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  render() {
    const { name,
      description,
      atk,
      def,
      agi,
      image,
      select,
      trunfo,
      salvar } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ atk }
          cardAttr2={ def }
          cardAttr3={ agi }
          cardImage={ image }
          cardRare={ select }
          cardTrunfo={ trunfo }
          //   hasTrunfo,
          isSaveButtonDisabled={ salvar }
          // onSaveButtonClick,/
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ atk }
          cardAttr2={ def }
          cardAttr3={ agi }
          cardImage={ image }
          cardRare={ select }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;

// initial commit;
