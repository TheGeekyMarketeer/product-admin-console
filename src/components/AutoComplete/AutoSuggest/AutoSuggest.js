import React, {useState} from 'react';
import AutoSuggestContainer from '../AutoSuggestContainer/AutoSuggestContainer';
import Autosuggest from 'react-autosuggest';

const AutoSuggest = ({children}) => {

    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [selections, setSelections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const cache = {
        suggestions: this.state.suggestions
    };

    const onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
        
    };

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    const getSuggestionValue = suggestion => suggestion.name;

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions();
    };

    // Use your imagination to render suggestions.
    const renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );

    return (
        <AutoSuggestContainer>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        </AutoSuggestContainer>
    )
}

export default AutoSuggest
