import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {

//thunk integration testing
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';


    describe('no guessed words', () => {

// create store with initial state
        let store;
       const initialState = { secretWord };

       beforeEach(()=> {
         store = storeFactory(initialState);
       });

        test('updates state correctly for unsuccessful guess', () => {
            //dispatch action creator
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState()

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            //check state after change to see if it equals expected state
            expect(newState).toEqual(expectedState);
        });
        

        test('updates state correctly for successful guess', () => {
            //dispatch action creator
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
        //check state after change to see if it equals expected state
        expect(newState).toEqual(expectedState);
        });
    });

    describe('some guessed words', () => {
        const guessedWords = [ {guessedWord: 'agile', letterMatchCount:1}];
        const initialState = { guessedWords, secretWord };
        //create store with initial state       
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });


        test('updates state correctly for unsuccessful guess', () => {
           //dispatch action creator
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords : [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3}]
            }
          //check state after change to see if it equals expected state
          expect(newState).toEqual(expectedState);
        });

        test('updates state correctly for successful guess', () => {
            //dispatch action creator
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
              secretWord,
              success: true,
              guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5}]
            }
           //check state after change to see if it equals expected state
            expect(newState).toEqual(expectedState);
        });
        
    });
    
});