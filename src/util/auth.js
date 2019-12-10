import VueCookie from 'vue-cookie'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueCookie)
Vue.use(VueLocalStorage)

// ================= Local Storage =====================
export function saveState(nameStore, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(nameStore, serializedState);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
}

export function getState(nameStore) {
  try {
    var serializedState = localStorage.getItem(nameStore);
    if (serializedState === null || serializedState == '[]') {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// ================= Cookie =====================

const tokenCookie = "user_token"
export function getToken() {
  return VueCookie.get(tokenCookie)
}

export function setToken(token, remember) {
  if (remember) {
    return VueCookie.set(tokenCookie, token, {
      expires: 7
    })
  }
  return VueCookie.set(tokenCookie, token)
}

export function removeToken() {
  return VueCookie.delete(tokenCookie)
}
