import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('secretWord action creator', ()=> {
    beforeEach(() => {
       //set moxios to avoid requests placed in the test to go to http 
       moxios.install();
    });
    
    afterEach(()=>{
      moxios.uninstall();
    });

    //integration test

    test('adds response word to state', () => {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: secretWord,
            });
        });
        
        return store.dispatch(getSecretWord())
           .then(()=>{
             const newState = store.getState();
             expect(newState.secretWord).toBe(secretWord);
           });
    });

});