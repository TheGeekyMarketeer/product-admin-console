// src/actions/index.js
import { ADD_ARTICLE } from "../constants/constants";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}