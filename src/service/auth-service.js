import * as Cookies from "js-cookie";
import * as CryptoJs from "crypto-js";
const cookieName = "gp";
const secretKey = "c6a70f1f21339854500e236c93f15944";

export function GetCookie() {
  return Cookies.get(cookieName);
}

export function SetCookie(data) {
  Cookies.set(cookieName, data);
}

export function deleteCookie() {
  Cookies.remove(cookieName);
}

export function updateCookie(data) {
  deleteCookie();
  SetCookie(data);
}

export function updateLogin(data) {
  deleteCookie();
  login(data);
}

export function login(data) {
  const ecryptedData = CryptoJs.AES.encrypt(JSON.stringify(data), secretKey);
  SetCookie(ecryptedData);
}

export function getLogin() {
  const encrytedData = GetCookie();
  if (typeof encrytedData !== "undefined" && encrytedData !== null) {
    const decryptedData = CryptoJs.AES.decrypt(
      encrytedData.toString(),
      secretKey
    ).toString(CryptoJs.enc.Utf8);

    return JSON.parse(decryptedData);
  } else {
    return null;
  }
}

export function logout() {
  deleteCookie();
}
