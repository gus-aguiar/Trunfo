import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const initialState = {
  name: '',
  description: '',
  atk: 0,
  def: 0,
  agi: 0,
  image: '',
  select: 'normal',
  trunfo: false,
  salvar: true,
  // registeredCards: [],
};
class App extends React.Component {
  state = {
    ...initialState,
  };

  validationFields = () => {
    const { name,
      description,
      image,
      atk,
      def,
      agi } = this.state;
    const validationName = name.length > 0;
    const validationDescription = description.length > 0;
    const validationImage = image.length > 0;
    const maxSum = 211;
    const validationSum = (+atk + +def + +agi) < maxSum;
    const maxNum = 91;
    const validationAttr1 = +atk < maxNum;
    const validationAttr2 = +def < maxNum;
    const validationAttr3 = +agi < maxNum;
    const validationTwoAttr1 = +atk >= 0;
    const validationTwoAttr2 = +def >= 0;
    const validationTwoAttr3 = +agi >= 0;
    this.setState({
      salvar: !(validationName
          && validationDescription
          && validationImage
          && validationSum
          && validationAttr1
          && validationAttr2
          && validationAttr3
          && validationTwoAttr1
          && validationTwoAttr2
          && validationTwoAttr3
      ),
    });
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  onSaveButtonClick = () => {
    this.setState({ ...initialState });
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
          onSaveButtonClick={ this.onSaveButtonClick }
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
          // ,/
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
