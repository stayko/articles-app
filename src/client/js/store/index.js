import { applyMiddleware, createStore, compose }  from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers";

const middleware = applyMiddleware(thunk, createLogger());
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  middleware
);

const initialState = {
  articles: [
    {
      "title": "A long article title",
      "imageUrl": "http://rag532wr4du1nlsxu2nehjbv.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/ties-thumb-100x100-c-default.jpg",
      "text": "A Lorem ipsum, a lorem ipsum. A Lorem ipsum, a lorem ipsum.",
      "comments": []
    },
    {
      "title": "A long article title 2",
      "imageUrl": "https://www.dailyworth.com/wp-content/uploads/2015/09/3841-the-10-healthiest-and-most-affordable-places-to-retire-thumb-100x100.jpg",
      "text": "A Lorem ipsum 2, a lorem ipsum. A Lorem ipsum 2, a lorem ipsum.",
      "comments": []
    }
  ]
}

const store = createStore(reducers, initialState, enhancers);
export default store;
