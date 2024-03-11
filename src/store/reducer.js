// 合并多个reducer reducer 是状态处理者
import { combineReducers } from "redux";

import recommendReducer from "@/views/discover/views/recommend/store";

export default combineReducers({
  recommend: recommendReducer,
});
